// backend/server.js
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db'); // Import the DB connection
require('dotenv').config();

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());
app.use(cors());

app.use('/api/auth', require('./routes/auth'));
app.get('/', (req, res) => {
  res.send('ScripVault API is running');
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));