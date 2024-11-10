const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/userroters'); // Import auth routes

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json()); // To parse JSON bodies
app.use(cors()); // Allow cross-origin requests

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/Messho', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch((error) => console.error('Error connecting to MongoDB:', error));

// Routes
app.use('/auth', authRoutes); // Add route for authentication

// Default Route (optional)
app.get('/', (req, res) => {
    res.send('Welcome to the Event API');
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
