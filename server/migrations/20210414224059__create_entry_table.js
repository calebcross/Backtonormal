
exports.up = function(knex) {
    return knex.schema.createTable("entries", table => {
        table.increments("id").primary();
        table.string("date").notNullable();
        table
        .integer("state_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("states")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
        table.string("name").notNullable();
        table.integer("total_vaccinations");
        table.integer("total_distributed");
        table.integer("people_vaccinated");
        table.decimal("people_fully_vaccinated_per_hundred");
        table.decimal("total_vaccinations_per_hundred");
        table.integer("people_fully_vaccinated");
        table.decimal("people_vaccinated_per_hundred");
        table.decimal("distributed_per_hundred");
        table.integer("daily_vaccinations_raw");
        table.integer("daily_vaccinations");
        table.integer("daily_vaccinations_per_million");
        table.decimal("share_doses_used");
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable("entries")
  };
