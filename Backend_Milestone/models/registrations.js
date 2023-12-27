const mongoose = require('mongoose');

const registrationsSchema = mongoose.Schema({
    event_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Event',
        required: true
    },
    participant_id: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }],
    registration_date: {
        type: Date,
        required: true
    },
    payment: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Payment',
        required: true
    }

})

module.exports = mongoose.model('Registration', registrationsSchema);


