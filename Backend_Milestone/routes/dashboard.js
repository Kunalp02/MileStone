
const express = require('express');
const router = express.Router();
const {auth} = require('../middlewares/auth');

router.get('/dashboard', auth, (req, res) => {
    try {
        res.status(200).json({
            success:true,
            message:'Welcome to Dashboard',
        });
    } catch (error) {
        res.status(400).json({
            success:false,
            message:'Something went wrong while accessing the dashboard',
        });
    }
})


module.exports = router;