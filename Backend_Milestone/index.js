const express = require('express');
const app = express();

const authRoutes = require('./routes/authRoutes');
const dashboardRoutes = require('./routes/dashboard');
const eventRoutes = require('./routes/eventRouter');
const userRoutes = require('./routes/userRoutes')


const database = require('./config/database');
const dotenv = require('dotenv')
const cookieParser = require("cookie-parser");
const cors = require("cors");

dotenv.config();
const port = process.env.PORT || 5000;


database.connect();
app.use(express.json());
app.use(cookieParser());
app.use(
	cors({
		origin:"http://localhost:5000",
		credentials:true,
	})
)

app.use("/api/v1/", authRoutes);
app.use("/api/v1/", dashboardRoutes);
app.use("/api/v1/dashboard/manageEvents", eventRoutes);
app.use("/api/v1/dashboard/manageUsers", userRoutes);




app.get('/', (req, res) => {
    return res.json({
        success: true,
        message: 'Your server is up and running....'
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});