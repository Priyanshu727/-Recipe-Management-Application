const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const recipeRoutes = require('../routes/recipeRoutes');
const errorHandler = require('../middleware/errorHandler'); // Adjusted path to errorHandler
const connectDB = require('../config/db');
const cors = require('cors');
// Load environment variables
dotenv.config();

const app = express();
connectDB();

app.use(cors());

// Middleware
app.use(express.json());
// route
app.use('/api/recipes', recipeRoutes);
// Error handler
app.use(errorHandler);


const PORT = process.env.PORT;

app.listen(PORT, (err) => {
    if (err) {
        console.log(err, "server is not started");
    } else {
        console.log(`Listening on port: http://localhost:${PORT}`);
    }
});
