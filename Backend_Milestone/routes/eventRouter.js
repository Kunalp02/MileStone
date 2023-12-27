const express = require('express');
const eventController = require('../controllers/EventCRUD'); 
const {auth} = require('../middlewares/auth');


const router = express.Router();

router.post('/create-event', auth, eventController.createEvent);
router.post('/update-event', auth, eventController.updateEvent);
router.post('/delete-event', auth, eventController.deleteEvent);
router.get('/all-events', auth, eventController.getAllEvents);

module.exports = router;
