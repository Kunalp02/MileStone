const mongoose = require('mongoose');

const paymentSchema = mongoose.Schema({
    eventreg_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'registration'
    },
    paymentid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Event',
        required: true
    },
    paymentStatus: {
        type: 'String',
        enum : ['paid', 'unpaid'],
        default: 'unpaid'
    },
    amount: {
        type: 'integer',
    }

})

module.exports = mongoose.model('Payment', paymentSchema);


