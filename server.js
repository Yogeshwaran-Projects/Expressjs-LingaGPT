// server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const userCodeRoutes = require('./routes/userCode');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS for all routes
app.use(cors({
  origin: 'http://localhost:3001', // Allow requests from this origin
}));

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api', userCodeRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
