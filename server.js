const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");
const path = require("path");
const axios = require("axios");
const knex = require("knex")(require("./knexfile"));
require("dotenv").config();

const app = express();

const CDC_URL =
	"https://covid.cdc.gov/covid-data-tracker/COVIDData/getAjaxData?id=vaccination_data";

async function scrape(URL) {

	try {
	const response = await axios.get(URL);
	//console.log(response.data.vaccination_data)

	const { vaccination_data } = response.data;

	let states = null;

	knex.table("states").select("name", "id").then( res => {
		states = res
		//console.log(states)
	
	

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
				...restEntry
			} = entry;

			const foundState = states.find((oneState) => oneState.name === LongName);

				//console.log(foundState)
			const newEntry = {
				date: Date,
				state_id: foundState.id,
				name: LongName,
				Census: Census2019,
				...restEntry,
			};
			return newEntry;
		});

		//console.log(cleansedData);
		//knex('entries').insert(cleansedData).then( (res) => console.log(`inserted into table`))

	})
	}
	catch (err) {
		console.log(err);
	}
	
}
//knex('entries').insert(cleansedData).then( (res) => console.log(res))
scrape(CDC_URL);

const callDB = async () => {
		const States = await knex.table("states").select("name", "id");
		return States;

};

async function insertDB() {
	let States;

	try {
		States = await knex.table("states").select("name", "id");
		return States;
	} catch (err) {
		console.log(err);
		States = [];
	}

	/* knex('entries').insert(cleansedData).then( (res) =>
console.log(res)) */
}

//insertDB(dailyData.then( res => res))

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
