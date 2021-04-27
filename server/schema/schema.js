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
		Total_Doses_Delivered: { type: GraphQLInt },
		Doses_Delivered_per_100K: { type: GraphQLInt },
		Adult_Doses_Delivered_per_100K: { type: GraphQLInt },
		Total_Doses_Administered: { type: GraphQLInt },
		Doses_Administered_per_100k: { type: GraphQLInt },
		Adult_Doses_Administered: { type: GraphQLInt },
		Adult_Doses_Administered_per_100K: { type: GraphQLInt },
		People_with_at_least_One_Dose: { type: GraphQLInt },
		Percent_of_Total_Pop_with_at_least_One_Dose: { type: GraphQLFloat },
		People_Adult_with_at_least_One_Dose: { type: GraphQLInt },
		Percent_of_Adult_Pop_with_at_least_One_Dose: { type: GraphQLFloat },
		People_Fully_Vaccinated: { type: GraphQLInt },
		Percent_of_Total_Pop_Fully_Vaccinated: { type: GraphQLFloat },
		People_Adult_Fully_Vaccinated: { type: GraphQLInt },
		Percent_of_Adult_Pop_Fully_Vaccinated: { type: GraphQLFloat },
		Total_Number_of_Pfizer_doses_delivered: { type: GraphQLInt },
		Total_Number_of_Moderna_doses_delivered: { type: GraphQLInt },
		Total_Number_of_Janssen_doses_delivered: { type: GraphQLInt },
		Total_Number_of_doses_from_unknown_manufacturer_delivered: {
			type: GraphQLInt,
		},
		Total_Number_of_Janssen_doses_administered: { type: GraphQLInt },
		Total_Number_of_Moderna_doses_administered: { type: GraphQLInt },
		Total_Number_of_Pfizer_doses_administered: { type: GraphQLInt },
		Total_Number_of_doses_from_unknown_manufacturer_administered: {
			type: GraphQLInt,
		},
		People_Fully_Vaccinated_Moderna: { type: GraphQLInt },
		People_Fully_Vaccinated_Pfizer: { type: GraphQLInt },
		People_Fully_Vaccinated_Janssen: { type: GraphQLInt },
		People_Fully_Vaccinated_Unknown_TwoDose_manufacturer: { type: GraphQLInt },
		People_Adult_Fully_Vaccinated_Moderna: { type: GraphQLInt },
		People_Adult_Fully_Vaccinated_Pfizer: { type: GraphQLInt },
		People_Adult_Fully_Vaccinated_Janssen: { type: GraphQLInt },
		People_Adult_Fully_Vaccinated_Unknown_TwoDose_manufacturer: {
			type: GraphQLInt,
		},
		People_with_2_Doses: { type: GraphQLInt },
		Percent_of_Total_Pop_with_Partial_Doses: { type: GraphQLFloat },
		People_Adult_with_Partial_Doses: { type: GraphQLInt },
		Percent_of_Adult_Pop_with_Partial_Doses: { type: GraphQLFloat },
		Percent_of_Total_Pop_with_2_Doses: { type: GraphQLInt },
		People_Adult_with_2_Doses: { type: GraphQLInt },
		Percent_of_Adult_Pop_with_2_Doses: { type: GraphQLFloat },
		People_with_Partial_Doses: { type: GraphQLInt },
		People_65plus_with_at_least_One_Dose: { type: GraphQLInt },
		Percent_of_65plus_Pop_with_at_least_One_Dose: { type: GraphQLFloat },
		People_65plus_Fully_Vaccinated: { type: GraphQLInt },
		Percent_of_65plus_Pop_Fully_Vaccinated: { type: GraphQLFloat },
		People_65plus_Fully_Vaccinated_Moderna: { type: GraphQLInt },
		People_65plus_Fully_Vaccinated_Pfizer: { type: GraphQLInt },
		People_65plus_Fully_Vaccinated_Janssen: { type: GraphQLInt },
		People_65plus_Fully_Vaccinated_Unknown_TwoDose_Manuf: { type: GraphQLInt },
		People_65plus_Doses_Administered: { type: GraphQLInt },
		Doses_Administered_per_100k_of_65plus_pop: { type: GraphQLInt },
		Doses_Delivered_per_100k_of_65plus_pop: { type: GraphQLInt },
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
