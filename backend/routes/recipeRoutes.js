const express = require('express');
const {
    createRecipe,
    getAllRecipes,
    getRecipeById,
    updateRecipe,
    deleteRecipe,
} = require('../controllers/recipeController');

const router = express.Router();

// Recipe routes
router.post('/', createRecipe); // Create a new recipe
router.get('/', getAllRecipes); // Get all recipes
router.get('/:id', getRecipeById); // Get a single recipe
router.put('/:id', updateRecipe); // Update a recipe
router.delete('/:id', deleteRecipe); // Delete a recipe

module.exports = router;
