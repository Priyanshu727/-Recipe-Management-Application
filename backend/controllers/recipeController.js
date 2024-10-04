const Recipe = require('../models/Recipe');

// Create a new recipe
const createRecipe = async (req, res) => {
    try {
        // Destructure all required fields from request body
        const { title, ingredients, instructions, cuisine, author } = req.body;

        // Validate request body
        if (!title || !ingredients || !instructions || !cuisine || !author) {
            return res.status(400).json({
                message: 'Please provide title, ingredients, instructions, cuisine, and author.'
            });
        }

        const newRecipe = new Recipe({ title, ingredients, instructions, cuisine, author });
        await newRecipe.save();

        res.status(201).json(newRecipe);
    } catch (error) {
        console.error('Error creating recipe:', error); // Log the error for debugging
        res.status(500).json({ message: 'Failed to create recipe', error: error.message });
    }
};

// Get all recipes
const getAllRecipes = async (req, res) => {
    try {
        const recipes = await Recipe.find();
        res.status(200).json(recipes);
    } catch (error) {
        console.error('Error fetching all recipes:', error.message);
        res.status(500).json({ message: error.message });
    }
};

// Get a single recipe by ID
const getRecipeById = async (req, res) => {
    try {
        console.log('Request to get recipe with ID:', req.params.id);

        // Check if the ID is a valid MongoDB ObjectId
        if (!req.params.id.match(/^[0-9a-fA-F]{24}$/)) {
            return res.status(400).json({ message: 'Invalid ID format' });
        }

        // Find the recipe by ID
        const recipe = await Recipe.findById(req.params.id);
        console.log('Recipe found:', recipe); // Log the found recipe

        // Check if recipe exists
        if (!recipe) {
            return res.status(404).json({ message: 'Recipe not found' });
        }

        // Return the found recipe
        res.status(200).json(recipe);
    } catch (error) {
        console.error('Error fetching recipe by ID:', error.message);
        res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
};

// Update a recipe
const updateRecipe = async (req, res) => {
    try {
        // Check if the ID is a valid MongoDB ObjectId
        if (!req.params.id.match(/^[0-9a-fA-F]{24}$/)) {
            return res.status(400).json({ message: 'Invalid ID format' });
        }

        const recipe = await Recipe.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!recipe) {
            return res.status(404).json({ message: 'Recipe not found' });
        }
        res.status(200).json(recipe);
    } catch (error) {
        console.error('Error updating recipe:', error.message);
        res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
};


// Delete a recipe
const deleteRecipe = async (req, res) => {
    try {
        // Check if the ID is a valid MongoDB ObjectId
        if (!req.params.id.match(/^[0-9a-fA-F]{24}$/)) {
            return res.status(400).json({ message: 'Invalid ID format' });
        }

        const recipe = await Recipe.findByIdAndDelete(req.params.id);
        if (!recipe) {
            return res.status(404).json({ message: 'Recipe not found' });
        }
        res.status(204).send(); // No content
    } catch (error) {
        console.error('Error deleting recipe:', error.message);
        res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
};


module.exports = {
    createRecipe,
    getAllRecipes,
    getRecipeById,
    updateRecipe,
    deleteRecipe,
};
