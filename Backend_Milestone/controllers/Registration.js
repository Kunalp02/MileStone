const User = require("../models/user");
const Registration = require("../models/Registration");


exports.registerForEvent = async(req, res) => {
    try {
        const {
            fname1,lname1, phone1, email1, fname2, lname2, phone2, email2, event_id, no_of_participants
        } = req.body;

        console.log(fname1,lname1, phone1, email1, fname2, lname2, phone2, email2, event_id, no_of_participants)

        if(
            !fname1 || !lname1 || !phone1 || !email1 || !fname2 || !lname2 || !phone2 || !email2 || !event_id || !no_of_participants
        ) {
            return res.status(403).send({
                success: false,
                message: "All Fields are required",
            });
        }

        if(no_of_participants == 1 || fname2 != null || lname2 != null || phone2 != null || email2 != null) {
            return res.status(403).send({
                success: false,
                message: "Please enter details of both participants",
            });
        }


        // Make Payment Gateway API call here


        // Add User to Database

        //find user by email
        exuser1 = await User.find({email: email1});
        exuser2 = await User.find({email: email2});


        if(!exuser1) {
            const user1 = await User.create({
                firstname: fname1,
                lastname: lname1,
                email: email1,
                phone: phone1,
                role: "Participant"
            })
            user1.save();
        }

        if(!exuser2) {
        const user2 = await User.create({
            firstname: fname2,
            lastname: lname2,
            email: email2,
            phone: phone2,
            role: "Participant"
        })
            user2.save();


        // add registration to database

        const registration = await Registration.create({
            event_id: event_id,
            participant_id: [user1._id, user2._id],
            registration_date: Date.now(),
            paymentStatus: "Paid"
        })
        registration.save();

        // mail to user
    }


    } catch (error) {
        
        console.log(error);

        return res.status(500).json({
            success: false,
            message: 'Internal Server Error'
        })
    }
}








