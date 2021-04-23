const graphql = require("graphql");
const _ = require("lodash");
const knex = require("knex")(require("../knexfile"));

const {
	GraphQLObjectType,
	GraphQLString,
	GraphQLSchema,
	GraphQLInt,
	GraphQLFloat,
	GraphQLList,
} = graphql;

const StateType = new GraphQLObjectType({
	name: "State",
	fields: () => ({
		id: { type: GraphQLInt },
		name: { type: GraphQLString },
		stateCode: { type: GraphQLString },
		region: { type: GraphQLString },
		division: { type: GraphQLString },
		entries: {
			type: new GraphQLList(EntryType),
			resolve(parent, args) {
				return knex.select().from("entries").where("state_id", parent.id);
			},
		},
	}),
});

const EntryType = new GraphQLObjectType({
	name: "Entry",
	fields: () => ({
		id: { type: GraphQLInt },
		date: { type: GraphQLString },
		name: { type: GraphQLString },
		state_id: { type: GraphQLInt },
		state: {
			type: StateType,
			resolve(parent, args) {
				return knex.first().from("states").where("id", parent.state_id);
			},
		},
		total_vaccinations: { type: GraphQLInt },
		total_distributed: { type: GraphQLInt },
		people_vaccinated: { type: GraphQLInt },
		people_fully_vaccinated_per_hundred: { type: GraphQLFloat },
		total_vaccinations_per_hundred: { type: GraphQLFloat },
		people_fully_vaccinated: { type: GraphQLInt },
		people_vaccinated_per_hundred: { type: GraphQLFloat },
		distributed_per_hundred: { type: GraphQLFloat },
		daily_vaccinations_raw: { type: GraphQLFloat },
		daily_vaccinations: { type: GraphQLInt },
		daily_vaccinations_per_million: { type: GraphQLInt },
		share_doses_used: { type: GraphQLFloat },
	}),
});

const RootQuery = new GraphQLObjectType({
	name: "RootQueryType",
	fields: {
		state: {
			type: StateType,
			args: { name: { type: GraphQLString } },
			resolve(parent, args) {
				//code to get date from db
				return knex.first().from("states").where("name", args.name);
			},
		},
		entry: {
			type: EntryType,
			args: { date: { type: GraphQLString }, state: { type: GraphQLString } },
			resolve(parent, args) {
				//code to get date from db
				return knex
					.first()
					.from("entries")
					.where({
						date: `${args.date}`,
						name: `${args.state}`,
					});
			},
		},
		states: {
			type: GraphQLList(StateType),
			resolve(parent, args) {
				return knex.select().from("states");
			},
		},
		entries: {
			type: GraphQLList(EntryType),
			args: { state: { type: GraphQLString } },
			resolve(parent, args) {
				return knex.select().from("entries").where("name", args.state);
			},
		},
	},
});
module.exports = new GraphQLSchema({
	query: RootQuery,
});
