const express = require('express');
const router = express.Router();

router.post('/register', (req, res) => {
    res.send('Register the User');
}
);

router.post('/login', (req, res) => {
    res.send('Login User');
}
);

router.get('/current', (req, res) => {
    res.send('Current User Information');
}
);

module.exports = router