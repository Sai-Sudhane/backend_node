const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    roll_no: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true,
    },
    year: {
        type: Number,
        required: true
    },
    department: {
        type: mongoose.Schema.Types.Number,
        ref: 'Department',
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
});



module.exports = mongoose.model('Student', studentSchema);