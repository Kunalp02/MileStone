
const mongoose = require('mongoose');


const eventSchema = mongoose.Schema({
    event_name: {
        type: String,
        trim: true
    },
    event_description: {
        type: String,
        required: true
    },
    event_date: {
        type: Date,
    },
    event_fee: {
        type: Number,
        required: true
    },
    coordinators : [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    ]
    
})

module.exports = mongoose.model('Event', eventSchema)