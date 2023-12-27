const mongoose = require('mongoose');


exports.connect = () => {
    mongoose.connect(process.env.MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log('Connected to database');
    })
    .catch((err) => {
        console.log('Database connection failed. exiting now...');
        console.error(err);
        process.exit(1);
    })
}