exports.up = function (knex) {
	return knex.schema.createTable("entries", (table) => {
		table.increments("id").primary();
		table.date("date").notNullable();
		table
			.integer("state_id")
			.unsigned()
			.notNullable()
			.references("id")
			.inTable("states")
			.onUpdate("CASCADE")
			.onDelete("CASCADE");
		table.string("name").notNullable();
		table.bigInteger("Census");
		table.bigInteger("Doses_Distributed");
		table.bigInteger("Doses_Administered");
		table.bigInteger("Dist_Per_100K");
		table.bigInteger("Admin_Per_100K");
		table.bigInteger("Administered_Moderna");
		table.bigInteger("Administered_Pfizer");
		table.bigInteger("Administered_Janssen");
		table.bigInteger("Administered_Unk_Manuf");
		table.bigInteger("Administered_Dose1_Recip");
		table.bigInteger("Administered_Dose1_Pop_Pct");
		table.bigInteger("Administered_Dose2_Pop_Pct");
		table.bigInteger("Administered_Dose1_Recip_18Plus");
		table.decimal("Administered_Dose1_Recip_18PlusPop_Pct");
		table.bigInteger("Administered_18Plus");
		table.bigInteger("Admin_Per_100k_18Plus");
		table.bigInteger("Distributed_Per_100k_18Plus");
		table.bigInteger("Administered_Dose1_Recip_65Plus");
		table.decimal("Administered_Dose1_Recip_65PlusPop_Pct");
		table.bigInteger("Administered_65Plus");
		table.bigInteger("Admin_Per_100k_65Plus");
		table.bigInteger("Distributed_Per_100k_65Plus");
		table.bigInteger("Administered_Dose2_Recip");
		table.bigInteger("Administered_Dose2_Recip_18Plus");
		table.decimal("Administered_Dose2_Recip_18PlusPop_Pct");
		table.bigInteger("Distributed_Moderna");
		table.bigInteger("Distributed_Pfizer");
		table.bigInteger("Distributed_Janssen");
		table.bigInteger("Distributed_Unk_Manuf");
		table.bigInteger("Series_Complete_Moderna");
		table.bigInteger("Series_Complete_Pfizer");
		table.bigInteger("Series_Complete_Janssen");
		table.bigInteger("Series_Complete_Unk_Manuf");
		table.bigInteger("Series_Complete_Moderna_18Plus");
		table.bigInteger("Series_Complete_Pfizer_18Plus");
		table.bigInteger("Series_Complete_Janssen_18Plus");
		table.bigInteger("Series_Complete_Unk_Manuf_18Plus");
		table.bigInteger("Series_Complete_Moderna_65Plus");
		table.bigInteger("Series_Complete_Pfizer_65Plus");
		table.bigInteger("Series_Complete_Janssen_65Plus");
		table.bigInteger("Series_Complete_Unk_Manuf_65Plus");
		table.bigInteger("Series_Complete_Yes");
		table.decimal("Series_Complete_Pop_Pct");
		table.bigInteger("Series_Complete_18Plus");
		table.decimal("Series_Complete_18PlusPop_Pct");
		table.bigInteger("Series_Complete_65Plus");
		table.decimal("Series_Complete_65PlusPop_Pct");
		table.bigInteger("Administered_65Plus_Entity")
		table.bigInteger("Census_12PlusPop");
		table.bigInteger("Administered_12Plus");
		table.bigInteger("Admin_Per_100k_12Plus");
		table.bigInteger("Distributed_Per_100k_12Plus");
		table.bigInteger("Administered_Dose1_Recip_12Plus");
		table.decimal("Administered_Dose1_Recip_12PlusPop_Pct");
		table.bigInteger("Administered_Dose2_Recip_12Plus");
		table.decimal("Administered_Dose2_Recip_12PlusPop_Pct");
		table.bigInteger("Series_Complete_12Plus");
		table.decimal("Series_Complete_12PlusPop_Pct");
		table.bigInteger("Series_Complete_Moderna_12Plus");
		table.bigInteger("Series_Complete_Pfizer_12Plus");
		table.bigInteger("Series_Complete_Janssen_12Plus");
		table.bigInteger("Series_Complete_Unk_Manuf_12Plus");
		table.bigInteger("Administered_12Plus_Entity")
	});
};

exports.down = function (knex) {
	return knex.schema.dropTable("entries");
};
