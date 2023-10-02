const express = require('express');
const router = express.Router();
const { loginUser } = require('../controllers/loginController');

// Handle POST request to /login
router.post('/', loginUser);

module.exports = router;