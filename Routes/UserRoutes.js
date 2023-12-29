const express = require('express');
const { registerUser, loginUser, currentUser } = require('../Controller/userController');
const validateToken = require('../Middleware/validateTokenHandler');
const router = express.Router();

router.post('/register',registerUser);

router.post('/login', loginUser);

router.get('/current',validateToken,currentUser);

module.exports = router