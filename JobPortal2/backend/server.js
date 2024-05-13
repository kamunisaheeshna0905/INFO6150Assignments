require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const adminRoute = require('./api/routes/adminRoute'); 
const app = express();

app.use(cors());
app.use(bodyParser.json()); 
app.use('/user', adminRoute);


mongoURI='mongodb://localhost:27017/Assignment10';
mongoose.connect(mongoURI)
  .then(() => console.log('Successfully connected to MongoDB'))
  .catch(err => console.error('Connection error', err));


const PORT = process.env.PORT || 3002;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
