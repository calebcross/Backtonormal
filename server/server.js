const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");
const cors = require("cors");

const app = express();


const APP_PORT = 8080;

app.use(cors())

app.use(
	"/graphql",
	graphqlHTTP({
		schema,
		graphiql: true,
	})
);

app.listen(APP_PORT, () => console.log(`App is running on ${APP_PORT}`));
