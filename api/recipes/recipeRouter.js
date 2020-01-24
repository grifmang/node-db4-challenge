const express = require('express');
const recipes = require('./recipeModel.js');

const router = express.Router();

router.get('/', (req, res) => {
    recipes.getRecipes()
    .then(response => {
        return res.status(200).json(response);
    })
    .catch(err => {
        console.log(err);
        return res.status(500).json({ error: "Something went wrong." });
    })
})

router.get('/:id', (req, res) => {
    recipes.getShoppingList(req.params.id)
    .then(response => {
        return res.status(200).json(response);
    })
    .catch(err => {
        console.log(err);
        return res.status(500).json({ error: "Something went wrong." });
    })
})

router.get('/:id/steps', (req, res) => {
    recipes.getInstructions(req.params.id)
    .then(response => {
        return res.status(200).json(response.steps.split(','));
    })
})

module.exports = router;