// get all users


exports.getAllUsers = async(req, res) => {
    try {
        // get participant and coordinators
        const users = await User.find({role: "Participant", role: "Coordinator"});
        console.log("users", users);
        return res.status(200).json({
            success: true,
            users:users
        })
    } catch (error) {
        return res.status(500).json({
            succss: false,
            message: 'Internal Server Error'
        })
    }
}

// get all participants
exports.getParticipants = async(req, res) => {
    try {
        const users = await User.find({role: "Participant"});
        
        return res.status(200).json({
            success: true,
            users
        })
    } catch (error) {
        return res.status(500).json({
            succss: false,
            message: 'Internal Server Error'
        })
    }
}    

// get all coordinators
exports.getCoordinators = async(req, res) => {
    try {
        const users = await User.find({role: "Coordinator"});
        
        return res.status(200).json({
            success: true,
            users
        })
    } catch (error) {
        return res.status(500).json({
            succss: false,
            message: 'Internal Server Error'
        })
    }
}    