
const User = require('../models/user');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


exports.signup = async(req, res) => {
    try {
        const {
            firstname,
            lastname,
            email,
            password,
            confirmPassword,
            phone,
            role,
        } = req.body;

        console.log(firstname, lastname, email, password, confirmPassword, phone, role)

        if (
			!firstname ||
			!lastname ||
			!email ||
			!password ||
			!confirmPassword ||
            !phone ||
            !role
		) {
			return res.status(403).send({
				success: false,
				message: "All Fields are required",
			});
		}
		if (password != confirmPassword) {
			return res.status(400).json({
				success: false,
				message:
					"Password and Confirm Password do not match. Please try again.",
			});
		}

		const existingUser = await User.findOne({ email });
		console.log(existingUser);
		if (existingUser) {
			return res.status(400).json({
				success: false,
				message: "User already exists. Please sign in to continue.",
			});
		}

        const hashedPassword = await bcrypt.hash(password, 10);

		console.log(firstname, lastname, email, hashedPassword, role)

		const newUser = await User.create({
			firstname: firstname,
			lastname: lastname,
			email: email,
			password: hashedPassword,
			phone: phone,
			role: "Admin",
		})

		newUser.save()

		return res.status(200).send({
			status: 'success',
			message: 'user created successfully'
		})


        
    } catch (error) {
        console.log(`Something went wrong`);
    }
}



exports.login = async(req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
			// Return 400 Bad Request status code with error message
			return res.status(400).json({
				success: false,
				message: `Please Fill up All the Required Fields`,
			});
		}

        const user = await User.findOne({ email });

        if (!user) {
			// Return 401 Unauthorized status code with error message
			return res.status(401).json({
				success: false,
				message: `User is not Registered with Us Please SignUp to Continue`,
			});
		}

        if (await bcrypt.compare(password, user.password)) {
			const token = jwt.sign(
				{ email: user.email, id: user._id, role: user.role },
				process.env.JWT_SECRET,
				{
					expiresIn: "24h",
				}
			);

			// Save token to user document in database
			user.token = token;
			user.password = undefined;
			// Set cookie for token and return success response
			const options = {
				expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
				httpOnly: true,
			};
			res.cookie("token", token, options).status(200).json({
				success: true,
				token,
				user,
				message: `User Login Success`,
			});
		} else {
			return res.status(401).json({
				success: false,
				message: `Password is incorrect`,
			});
		}
	} catch (error) {
		console.error(error);
		// Return 500 Internal Server Error status code with error message
		return res.status(500).json({
			success: false,
			message: `Login Failure Please Try Again`,
		});
	}
};

exports.logout = async(req, res) => {
    try {
        res.clearCookie('jwt');
		console.log('in try block');
		res.status(200).json({
			success: true,
			message: `User Logout Success`,
		})
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred during logout' });
    }
}


