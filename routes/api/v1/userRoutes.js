// anochat-server/routes/api/v1/userRoutes.js
const express = require('express');
const { register, login, getProfile, logout } = require('../../../controllers/api/v1/userController');
const auth = require('../../../middleware/auth'); // You'll need to create this

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/me', auth, getProfile);  // This route should be protected
router.post('/logout', auth, logout);  // This route should be protected

module.exports = router;
