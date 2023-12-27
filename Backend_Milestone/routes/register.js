
const express = require('express');
const router = express.Router();

const {registerForEvent} = require('../controllers/Registration');

router.post('/register', registerForEvent);


module.exports = router;