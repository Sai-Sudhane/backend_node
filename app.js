const express = require('express')
const cors = require('cors');
const app = express()
const mongoose = require('mongoose')
const Student = require('./models/Student.js');
const Department = require('./models/department.js');
require('dotenv').config();

app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGODB_URI);

const registerRoutes = require('./routes/studentRoute');
const loginRoutes = require('./routes/loginRoute');

app.use('/register', registerRoutes);
app.use('/login', loginRoutes);


const port = process.env.PORT || 5000;
app.listen(port);