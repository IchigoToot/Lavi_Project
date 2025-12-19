const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/tables', require('./routes/tables'));
app.use('/api/guests', require('./routes/guests'));

app.listen(5000, () => {
  console.log('Server running on port 5000');
});
const router = require('express').Router();

// Get all tables for an event
router.get('/:eventId', async (req, res) => {
  // Query database
  // Return tables
});

// Create new table
router.post('/', async (req, res) => {
  // Save to database
});

module.exports = router;