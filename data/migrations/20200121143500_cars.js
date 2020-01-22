exports.up = async function(knex, promise) {
  await knex.schema.createTable("cars", tbl => {
    tbl.increments("car_ID").primary()
    tbl.string("vin",17).notNullable();
    tbl.string("make").notNullable();
    tbl.string("model").notNullable();
    tbl.integer("mileage").notNullable();
    tbl.string("title").defaultTo("Unknown");
  });
};

exports.down = async function(knex) {
  await knex.schema.dropTable("cars");
};
