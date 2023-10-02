const mongoose = require('mongoose');

const departmentSchema = new mongoose.Schema({
    id: Number,
    department_name: String,
    subjects: [String],
});

const Department = mongoose.model('Department', departmentSchema);

module.exports = Department;