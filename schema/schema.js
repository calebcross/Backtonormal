const graphql = require("graphql");
const knex = require("knex")(require("../knexfile"));
const moment = require("moment");

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
		id: { type: GraphQLInt,
			description:'Unique ID for State, Territory or Federal Entity' },
		name: {
			type: GraphQLString,
			description: "Full name of State, Territory or Federal Entity",
		},
		stateCode: {
			type: GraphQLString,
			description: "Abbreviation of State, Territory or Federal Entity",
		},
		region: {
			type: GraphQLString,
			description: "Region of State, Territory or Federal Entity",
		},
		division: {
			type: GraphQLString,
			description: "Division of State, Territory or Federal Entity",
		},
		entries: {
			type: new GraphQLList(EntryType),
			description: "Daily entries of Cumulative Data from CDC vaccination information",
			resolve(parent, args) {
				return knex.select().from("entries").where("state_id", parent.id);
			},
		},
		entry: {
			type: EntryType,
			args: { date: { type: GraphQLString } },
			resolve(parent, args) {
				return knex
					.first()
					.from("entries")
					.where({
						date: `${args.date}`,
						name: `${parent.name}`,
					});
			},
		},
	}),
});

const EntryType = new GraphQLObjectType({
	name: "Entry",
	fields: () => ({
		id: { type: GraphQLInt,
			description:'Unique ID for daily entry' },
		date: { type: GraphQLString,
			description:'Date of collection of data' },
		name: { type: GraphQLString,
			description:'Name of State, Territory or Federal Entity where data was collected' },
		state_id: { type: GraphQLInt,
			description:'Unique ID for State, Territory or Federal Entity where data was collected' },
		state: {
			type: StateType,
			resolve(parent, args) {
				return knex.first().from("states").where("id", parent.state_id);
			},
		},
		Census: { type: GraphQLFloat,
			description:'2019 Census Population' },
		Doses_Distributed: { type: GraphQLFloat,
			description:'Cumulative Doses Distrubuted'  },
		Doses_Administered: { type: GraphQLFloat,
			description:'Cumulative Doses Administered' },
		Dist_Per_100K: { type: GraphQLFloat,
			description:'Distributed doses per 100K of population' },
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
		Series_Complete_65PlusPop_Pct: { type: GraphQLFloat },
		Administered_65Plus_Entity: { type: GraphQLFloat },
		Census_12PlusPop: { type: GraphQLFloat },
		Administered_12Plus: { type: GraphQLFloat },
		Admin_Per_100k_12Plus: { type: GraphQLFloat },
		Distributed_Per_100k_12Plus: { type: GraphQLFloat },
		Administered_Dose1_Recip_12Plus: { type: GraphQLFloat },
		Administered_Dose1_Recip_12PlusPop_Pct: { type: GraphQLFloat },
		Administered_Dose2_Recip_12Plus: { type: GraphQLFloat },
		Administered_Dose2_Recip_12PlusPop_Pct: { type: GraphQLFloat },
		Series_Complete_12Plus: { type: GraphQLFloat },
		Series_Complete_12PlusPop_Pct: { type: GraphQLFloat },
		Series_Complete_Moderna_12Plus: { type: GraphQLFloat },
		Series_Complete_Pfizer_12Plus: { type: GraphQLFloat },
		Series_Complete_Janssen_12Plus: { type: GraphQLFloat },
		Series_Complete_Unk_Manuf_12Plus: { type: GraphQLFloat },
		Administered_12Plus_Entity: { type: GraphQLFloat },
		Count_70pct_vacc: { type: GraphQLFloat }
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
			async resolve(parent, args) {
				//code to get date from db
				let maxDateQuery = await knex.table("entries").max("date");

				return knex
					.first()
					.from("entries")
					.where("name", args.state)
					.andWhere("date", args.date || maxDateQuery[0]["max(`date`)"]);
			},
		},
		states: {
			type: GraphQLList(StateType),
			resolve(parent, args) {
				return knex.select().from("states").orderBy("name", "asc");
			},
		},
		entriesBy: {
			type: GraphQLList(EntryType),
			args: {
				state: { type: GraphQLString },
				from: { type: GraphQLString },
				to: { type: GraphQLString },
			},
			async resolve(parent, args) {
				const { state, from, to } = args;
				let maxDateQuery = await knex.table("entries").max("date");

				return knex
					.select()
					.from("entries")
					.where("name", state)
					.whereBetween("date", [from, to || maxDateQuery[0]["max(`date`)"]])
					.orderBy("date", "desc");
			},
		},
		entriesBetween: {
			type: GraphQLList(EntryType),
			args: { from: { type: GraphQLString }, to: { type: GraphQLString } },
			resolve(parent, args) {
				const { from, to } = args;
				return knex
					.select()
					.from("entries")
					.whereBetween("date", [from, to])
					.orderBy("date", "desc");
			},
		},
		entriesOn: {
			type: GraphQLList(EntryType),
			args: { date: { type: GraphQLString } },
			resolve(parent, args) {
				const { date } = args;
				return knex
					.select()
					.from("entries")
					.where("date", date)
					.orderBy("date", "desc");
			},
		},
	},
});
module.exports = new GraphQLSchema({
	query: RootQuery,
});
