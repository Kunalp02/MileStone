const jwt = require("jsonwebtoken");
require("dotenv").config();
const User = require("../models/user");

//auth
exports.auth = async (req, res, next) => {
        //extract token
        const token = req.cookies.token 
                        || req.body.token 
                        || (req.header("Authorization")?.replace("Bearer ", "") || "");

        if(!token) {
            return res.status(401).json({   
                success:false,
                message:'Token is missing',
            });
        }

        //verify the token
        try{
            const decode =  jwt.verify(token, process.env.JWT_SECRET);
            console.log(decode);
            req.user = decode;
        }
        catch(err) {
            //verification - issue
            return res.status(401).json({
                success:false,
                message:'token is invalid',
            });
        }
        next();
  
}

//isAdmin
exports.isAdmin = async (req, res, next) => {
 try{
        if(req.user.accountType !== "Admin") {
            return res.status(401).json({
                success:false,
                message:'This is a protected route for Students only',
            });
        }
        next();
 }
 catch(error) {
    return res.status(500).json({
        success:false,
        message:'Admin role cannot be verified, please try again'
    })
 }
}


//isInstructor
exports.isCoOrdinator = async (req, res, next) => {
    try{
           if(req.user.accountType !== "Co-Ordinator") {
               return res.status(401).json({
                   success:false,
                   message:'This is a protected route for Instructor only',
               });
           }
           next();
    }
    catch(error) {
       return res.status(500).json({
           success:false,
           message:'Co-Ordinator role cannot be verified, please try again'
       })
    }
   }


