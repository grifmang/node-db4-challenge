
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {id: 1, name: 'cheese'},
        {id: 2, name: 'pepperoni'},
        {id: 3, name: 'sausage'},
        {id: 4, name: 'dough'},
        {id: 5, name: 'sauce'}
      ]);
    });
};
