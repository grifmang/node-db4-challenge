
exports.up = function(knex) {
  return knex.schema.createTable('recipes', table => {
      table.increments();
      table.text('description').notNullable();
      table.string('name', 255).index().notNullable().unique();
      table.text('steps').notNullable();
  })
  .createTable('ingredients', table => {
      table.increments();
      table.string('name', 255).index().notNullable().unique();
  })
  .createTable('recipe_ingredients', table => {
      table.increments();
      table.integer('recipe_id').unsigned()
        .references('id').inTable('recipes')
        .onDelete('CASCADE').onUpdate('CASCADE');
      table.integer('ingredient_id').unsigned()
        .references('id').inTable('ingredients')
        .onDelete('CASCADE').onUpdate('CASCADE');
      table.integer('quantity').notNullable().unsigned();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('recipe_ingredients')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipes');
};
