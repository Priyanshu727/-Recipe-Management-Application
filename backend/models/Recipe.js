const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    ingredients: {
        type: [String],
        required: true,
    },
    instructions: {
        type: String,
        required: true,
    },
    cuisine: {
        type: String,
        required: true, // This field is required
    },
    author: {
        type: String,
        required: true, // This field is required
    },
    image: {
        type: String,
        required: false,
    },
}, { timestamps: true });

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;
