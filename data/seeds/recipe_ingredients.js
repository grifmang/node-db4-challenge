
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipe_ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipe_ingredients').insert([
        {id: 1, recipe_id: 1, ingredient_id: 5, quantity: 1},
        {id: 2, recipe_id: 1, ingredient_id: 4, quantity: 1},
        {id: 3, recipe_id: 1, ingredient_id: 1, quantity: 1},
        {id: 4, recipe_id: 1, ingredient_id: 2, quantity: 1}
      ]);
    });
};
