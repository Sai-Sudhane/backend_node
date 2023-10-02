// controllers/registerController.js

const User = require('../models/Student.js');

// Controller function for user registration
const registerUser = async(req, res) => {
    try {
        // Extract user data from the request body
        const { roll_no, name, year, department, email, password } = req.body;

        // Check if the username or email is already registered
        const existingUser = await User.findOne({ $or: [{ roll_no }, { email }] });

        if (existingUser) {
            return res.status(409).json({ message: 'User with the same username or email already exists.' });
        }

        // Create a new user document
        const newUser = new User({
            roll_no,
            name,
            year,
            department,
            email,
            password, // You should hash the password before saving it
        });

        // Save the user to the database
        await newUser.save();

        // Return a success response
        res.status(200).json({ success: true, message: 'Registration successful!' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error });
    }
};

module.exports = { registerUser };