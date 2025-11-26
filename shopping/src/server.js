const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./db');
const itemsRoutes = require('./routes/items');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'));

// Database connection
db.connect();

// Routes
app.use('/api/items', itemsRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});