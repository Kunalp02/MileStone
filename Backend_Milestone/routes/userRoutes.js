const express = require('express');
const router = express.Router();

const { getAllUsers, getParticipants, getCoordinators } = require("../controllers/UsersCRUD");
const { auth } = require("../middlewares/auth");



router.get('/getAllUsers', auth, getAllUsers);
router.get('/getParticipants', auth, getParticipants);
router.get('/getCoordinators', auth, getCoordinators);


module.exports = router;