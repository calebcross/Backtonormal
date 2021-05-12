const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");
const path = require("path");
require('dotenv').config();

const app = express();


const APP_PORT = process.env.PORT || 8080;

//app.use(cors())

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
