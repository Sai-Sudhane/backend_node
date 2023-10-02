const express = require('express');
const router = express.Router();
const { registerUser } = require('../controllers/studentController');

// Handle POST request to /register
router.post('/', registerUser);

module.exports = router;