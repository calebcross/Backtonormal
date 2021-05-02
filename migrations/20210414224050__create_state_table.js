
exports.up = function (knex) {
	return knex.schema.createTable("states", (table) => {
		table.increments("id").primary();
		table.string("name").notNullable();
		table.string("stateCode").notNullable();
		table.string("region").notNullable();
		table.string("division").notNullable();
	});
};

exports.down = function (knex) {
	return knex.schema.dropTable("states");
};
