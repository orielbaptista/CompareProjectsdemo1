// src/backend/routes/authRoutes.js
const express = require('express');
const router = express.Router();
const { signup, login } = require('../controllers/authController'); // Corrected path

// Define the routes
router.post('/signup', signup);
router.post('/login', login);

module.exports = router;
