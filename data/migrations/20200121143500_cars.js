exports.up = async function(knex, promise) {
  await knex.schema.createTable("cars", tbl => {
    tbl
      .increments("car_id")
      .unsigned()
      .primary();
    tbl
      .string("vin")
      .unique();
    tbl.string("make")
    tbl.string("model")
    tbl.integer("mileage")
    tbl.string("title")
  });
};

exports.down = function(knex) {
    knex.dropTable('cars')
};
