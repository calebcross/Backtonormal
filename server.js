const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");
const path = require("path");

const cron = require('node-cron');
const axios = require("axios");
const knex = require("knex")(require("./knexfile"));
const moment = require("moment");
require("dotenv").config();

const app = express();



const CDC_URL =
	"https://covid.cdc.gov/covid-data-tracker/COVIDData/getAjaxData?id=vaccination_data";



async function scrape(URL) {
	try {
		const response = await axios.get(URL);

		const { vaccination_data } = response.data;

		let mostRecent = vaccination_data[0].Date;
		let todaysDate = moment(new Date()).format("YYYY-MM-DD");

		console.log(`Most Recent from CDC: ${mostRecent}`)
		
		knex
			.table("entries")
			.max("date")
			.then((results) => results[0]["max(`date`)"])
			.then((maxDate) => {
				console.log(`Most Recent from DB: ${maxDate}`)
				if (maxDate != mostRecent) {
					knex
						.table("states")
						.select("name", "id")
						.then((states) => {
							return states;
						})
						.then((states) => {
							const cleansedData = vaccination_data.map((entry) => {
								const {
									Date,
									LongName,
									Census2019,
									Location,
									ShortName,
									date_type,
									Administered_Fed_LTC,
									Administered_Fed_LTC_Dose1,
									Administered_Fed_LTC_Dose2,
									Series_Complete_FedLTC,
									...restOfEntry
								} = entry;

								const foundState = states.find(
									(oneState) => oneState.name === LongName
								);
								const newEntry = {
									date: Date,
									state_id: foundState.id,
									name: LongName,
									Census: Census2019,
									...restOfEntry,
								};
								return newEntry;
							});

							knex('entries').insert(cleansedData).then( (res) => console.log(`inserted into db`))
						});
				}
				else { console.log(`not inserted`)}
			});
	} catch (err) {
		console.log(err);
	}
}



const task = cron.schedule('*/5 14-20 * * *', () => {
	console.log('running cdc scrape');
	scrape(CDC_URL);
  });


const APP_PORT = process.env.PORT || 8080;

app.use(
	"/graphql",
	graphqlHTTP({
		schema,
		graphiql: true,
	})
);

app.use(express.static("public"));

app.get("*", (req, res) => {
	res.sendFile(path.resolve(__dirname, "public", "index.html"));
});

app.listen(APP_PORT, () => console.log(`App is running on ${APP_PORT}`));
