
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {id: 1, description: "Recipe for pizza", name: "pizza", steps: "Spread dough, Spread sauce on dough, Place toppings"}
      ]);
    });
};
