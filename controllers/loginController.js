// controllers/loginController.js
const User = require('../models/Student.js');
const Department = require('../models/department.js');
const jwt = require('jsonwebtoken');

const loginUser = async(req, res) => {
    try {
        const { roll_no, password } = req.body;

        // Validate user data (add your own validation logic here)

        // Find the user by username
        const user = await User.findOne({ roll_no, password });

        if (!user) {
            return res.status(401).json({ message: 'Invalid User.' });
        }


        // Generate a JWT token
        const token = jwt.sign({ id: user.id, roll_no: user.roll_no }, 'your-secret-key', {
            expiresIn: '1h', // Token expires in 1 hour (adjust as needed)
        });

        // Fetch the department information
        const dep = user.department;
        const dept = await Department.findOne({ id: dep });

        // Return a success response with the JWT token and department data
        res.status(200).json({ success: true, message: 'Login successful!', token, user, dept });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Login failed.' });
    }
};

module.exports = { loginUser };