// anochat-server/routes/api/v1/userRoutes.js
const express = require('express');
const { register } = require('../../../controllers/api/v1/userController');

const router = express.Router();

router.post('/register', register);

module.exports = router;