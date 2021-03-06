const entryData = require("../seed_data/entries");
const stateData = require("../seed_data/states");

exports.seed = function (knex) {
	return knex("states")
		.del()
		.then(function () {
			return knex("states").insert(stateData);
		})
		.then(() => {
			return knex("entries").truncate();
		})
		.then(() => {
			return knex("states").then((state) => {
				return state;
			});
		})
		.then((state) => {
			const entryDataWithStateIds = entryData.map((entry) => {
				state.forEach((oneState) => {
					if (entry.name == oneState.name) entry.state_id = oneState.id;
				});
				if (!entry.state_id) console.log(entry.name);
				return entry;
			});
			return knex("entries").insert(entryDataWithStateIds);
		});
};
