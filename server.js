const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");
const path = require("path");
const axios = require('axios');
const knex = require("knex")(require("./knexfile"));
require('dotenv').config();



const app = express();


const CDC_URL = "https://covid.cdc.gov/covid-data-tracker/COVIDData/getAjaxData?id=vaccination_data";

 async function scrape (URL) {

	let res = await axios.get(URL)
	
return res.data.vaccination_data
}

const dailyData = scrape(CDC_URL)

console.log(dailyData)

 function insertDB (data) {

	 console.log(data)

	const cleansedData = data.map( entry => {
		entry['Date'] = entry['date']
		entry['LongName'] = entry['name']
		entry['Census2019'] = entry['Census']
	})

  knex('entries').insert(cleansedData).then( (res) =>
console.log(res))

}

//insertDB(dailyData)


const APP_PORT = process.env.PORT || 8080;

app.use(
	"/graphql",
	graphqlHTTP({
		schema,
		graphiql: true,
	})
);

app.use(express.static('public'));

app.get('*', (req, res) => {
	res.sendFile(path.resolve(__dirname,'public', 'index.html'));
})

app.listen(APP_PORT, () => console.log(`App is running on ${APP_PORT}`));
