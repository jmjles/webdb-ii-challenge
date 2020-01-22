exports.seed = function(knex, promise) {
  // Deletes ALL existing entries
  return knex("cars")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("cars").insert([
        { vin: "111111", make: "BMW", model: "M3", mileage: 0, title: "Clean" }
      ]);
    });
};
