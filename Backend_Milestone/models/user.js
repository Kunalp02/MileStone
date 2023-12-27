
const mongoose = require('mongoose');


const userSchema = mongoose.Schema({
    firstname: {
        type: String,
        trim: true,
        required: true,
        
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        trim: true,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['Admin','Co-Ordinator', 'Participant'],   
        required: true     
    },
    token : {
        type: String,
    }

})

module.exports = mongoose.model('User', userSchema)