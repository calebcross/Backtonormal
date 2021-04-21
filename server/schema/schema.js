const graphql = require("graphql");
const _ = require("lodash");
const knex = require("knex")(require("../knexfile"));

const {
	GraphQLObjectType,
	GraphQLString,
	GraphQLSchema,
	GraphQLInt,
	GraphQLFloat,
    GraphQLList
} = graphql;

const StateType = new GraphQLObjectType({
	name: "State",
	fields: () => ({
		name: { type: GraphQLString },
		stateCode: { type: GraphQLString },
		region: { type: GraphQLString },
		division: { type: GraphQLString },
        entries: {type: new GraphQLList(EntryType),
        resolve(parent, args) {
            return knex.select().from("entries").where( "name", parent.name )
        }
        }
	}),
});

const EntryType = new GraphQLObjectType({
	name: "Entry",
	fields: () => ({
		date: { type: GraphQLString },
		state: {
			type: StateType,
			resolve(parent, args) {
				knex.select().from("states").where( "name", parent.name )
			}
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
                return knex.first().from("states").where( "name", args.name )
			},
		},
		entry: {
			type: EntryType,
			args: { date: { type: GraphQLString }, state: { type: GraphQLString } },
			resolve(parent, args) {
				//code to get date from db
				return knex.first().from("entries").where( "date", args.date )
			},
		},
        states: {
            type: GraphQLList(StateType),
            resolve(parent, args){
                return knex.select().from('states')
            }
        },
        entries: {
            type: GraphQLList(EntryType),
            resolve(parent, args){
                return knex.select().from('entries')
            }
        }
	},
});
module.exports = new GraphQLSchema({
	query: RootQuery,
});
