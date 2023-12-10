const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User, Admin } = require('../models');

// User Registration
router.post('/register', [
    // Validation middleware
    // ...
], async (req, res) => {
    // Registration logic
    // ...
});

// User Login
router.post('/login', [
    // Validation middleware
    // ...
], async (req, res) => {
    // Login logic
    // ...
});

// Admin Login
router.post('/admin-login', [
    // Validation middleware
    // ...
], async (req, res) => {
    // Admin login logic
    // ...
});

module.exports = router;
