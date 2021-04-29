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
		Doses_Distributed: { type: GraphQLFloat },
Doses_Administered: { type: GraphQLFloat },
Dist_Per_100K: { type: GraphQLFloat },
Admin_Per_100K: { type: GraphQLFloat },
Administered_Moderna: { type: GraphQLFloat },
Administered_Pfizer: { type: GraphQLFloat },
Administered_Janssen: { type: GraphQLFloat },
Administered_Unk_Manuf: { type: GraphQLFloat },
Administered_Dose1_Recip: { type: GraphQLFloat },
Administered_Dose1_Pop_Pct: { type: GraphQLFloat },
Administered_Dose2_Pop_Pct: { type: GraphQLFloat },
Administered_Dose1_Recip_18Plus: { type: GraphQLFloat },
Administered_Dose1_Recip_18PlusPop_Pct: { type: GraphQLFloat },
Administered_18Plus: { type: GraphQLFloat },
Admin_Per_100k_18Plus: { type: GraphQLFloat },
Distributed_Per_100k_18Plus: { type: GraphQLFloat },
Administered_Dose1_Recip_65Plus: { type: GraphQLFloat },
Administered_Dose1_Recip_65PlusPop_Pct: { type: GraphQLFloat },
Administered_65Plus: { type: GraphQLFloat },
Admin_Per_100k_65Plus: { type: GraphQLFloat },
Distributed_Per_100k_65Plus: { type: GraphQLFloat },
Administered_Dose2_Recip: { type: GraphQLFloat },
Administered_Dose2_Recip_18Plus: { type: GraphQLFloat },
Administered_Dose2_Recip_18PlusPop_Pct: { type: GraphQLFloat },
Distributed_Moderna: { type: GraphQLFloat },
Distributed_Pfizer: { type: GraphQLFloat },
Distributed_Janssen: { type: GraphQLFloat },
Distributed_Unk_Manuf: { type: GraphQLFloat },
Series_Complete_Moderna: { type: GraphQLFloat },
Series_Complete_Pfizer: { type: GraphQLFloat },
Series_Complete_Janssen: { type: GraphQLFloat },
Series_Complete_Unk_Manuf: { type: GraphQLFloat },
Series_Complete_Moderna_18Plus: { type: GraphQLFloat },
Series_Complete_Pfizer_18Plus: { type: GraphQLFloat },
Series_Complete_Janssen_18Plus: { type: GraphQLFloat },
Series_Complete_Unk_Manuf_18Plus: { type: GraphQLFloat },
Series_Complete_Moderna_65Plus: { type: GraphQLFloat },
Series_Complete_Pfizer_65Plus: { type: GraphQLFloat },
Series_Complete_Janssen_65Plus: { type: GraphQLFloat },
Series_Complete_Unk_Manuf_65Plus: { type: GraphQLFloat },
Series_Complete_Yes: { type: GraphQLFloat },
Series_Complete_Pop_Pct: { type: GraphQLFloat },
Series_Complete_18Plus: { type: GraphQLFloat },
Series_Complete_18PlusPop_Pct: { type: GraphQLFloat },
Series_Complete_65Plus: { type: GraphQLFloat },
Series_Complete_65PlusPop_Pct: { type: GraphQLFloat }
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
			args: { state: { type: GraphQLString }, from: { type: GraphQLString}, to: { type: GraphQLString}},
			resolve(parent, args) {
				const { state, from, to } = args
				return knex.select().from("entries").where("name", state).whereBetween('date', [from, to]);
			},
		},
		entriesfrom: { 
			type: GraphQLList(EntryType),
			args: {from: { type: GraphQLString}, to: { type: GraphQLString}},
			resolve(parent, args) {
				const { from, to } = args
				return knex.select().from("entries").whereBetween('date', [from, to]);
			},
		},
		entries: {
			type: GraphQLList(EntryType),
			args: { date: { type: GraphQLString}},
			resolve(parent, args) {
				const { date } = args
				return knex.select().from("entries").where('date', date);
			},
		},
	},
});
module.exports = new GraphQLSchema({
	query: RootQuery,
});
