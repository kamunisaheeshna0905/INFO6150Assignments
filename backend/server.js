require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRoutes = require('./api/routes/userRoutes'); 

const app = express();

app.use(bodyParser.json()); 
app.use('/user', userRoutes); 

mongoURI='mongodb://localhost:27017/Assignment8';
mongoose.connect(mongoURI)
  .then(() => console.log('Successfully connected to MongoDB'))
  .catch(err => console.error('Connection error', err));


const PORT = process.env.PORT || 3002;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
