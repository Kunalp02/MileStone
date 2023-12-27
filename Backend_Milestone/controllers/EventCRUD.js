const User = require('../models/user');
const Registration = require('../models/registrations');
const Event = require('../models/event');



// create event

const createEvent = async(req, res) => {
    try {
        const {event_name, event_coordinator, event_descp, max_participants, fees} = req.body;
        console.log(event_name, event_coordinator,event_descp, max_participants, fees)
        if(!event_name || !event_coordinator || !event_descp || !max_participants || !fees) {
            return res.status(403).send({
                success: false,
                message: "All Fields are required",
            });
        }

        try {
            const event = await Event.create({
                event_name: event_name,
                event_description: event_descp,
                event_date: Date.now(),
                event_fee: fees,
                coordinators: event_coordinator
            });
    
            event.save();

            return res.json({
                status: true,
                message: 'Event Created'
            })

        } catch (error) {
            return res.json({
                status: false,
                message: 'Internal Server Error'
            })
        }

    } catch (error) {
        return res.status(500).send({
            success: false,
            message: "Internal Server Error",
        });
    }
}



// update event

const updateEvent = async(req, res) => {
    try {
        const {event_name, event_coordinator, event_descp, max_participants, fees} = req.body;

        if(!event_name || !event_coordinator || !event_descp || !max_participants || !fees) {
            return res.status(403).send({
                success: false,
                message: "All Fields are required",
            });
        }

        const event = await Event.updateOne({
            event_name,
            event_coordinator,
            event_descp,
            max_participants,
            fees
        });

        event.save();

        return res.json({
            status: true,
            message: 'Event Updated'
        })
    }

    catch(error){
        return res.josn({
            status: false,
            message: 'Internal Server Error'
        })
    }
}



// delete event

const deleteEvent = async(req, res) => {
    try {
        const {event_id} = req.body;

        if(!event_id) {
            return res.status(403).send({
                success: false,
                message: "All Fields are required",
            });
        }

        const event = await Event.deleteOne({
            event_id
        });

        event.save();      
        
        return res.json({
            status: true,
            message: 'Event Deleted'
        })

    } catch (error) {
        return res.json({
            status: false,
            message: 'Internal Server Error'
        })
    }

}


// get all events

const getAllEvents = async(req, res) => {
    try {
        const events = await Event.find({});

        return res.json({
            status: true,
            events: events
        })
    } catch (error) {
        return res.json({
            status: false,
            message: 'Error while getting the events data'
        })
    }
}



module.exports = {
    createEvent,
    updateEvent,
    deleteEvent,
    getAllEvents
} 