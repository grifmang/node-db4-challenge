const db = require('../../data/dbConfig.js');

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions
}

function getRecipes() {
    return db('recipes');
}

function getShoppingList(id) {
    return db('recipe_ingredients').join('ingredients', 'ingredients.id', 'recipe_ingredients.ingredient_id')
    .where('recipe_ingredients.recipe_id', id)
    .catch(err => {
        console.log(err);
    });
}

function getInstructions(id) {
    return db('recipes').select('steps').where({ id }).first();
}