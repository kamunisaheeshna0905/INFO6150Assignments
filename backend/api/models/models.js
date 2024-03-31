const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    fullName: String,
    email: { type: String, unique: true },
    password: String,
  });

const companySchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
      unique: true,
    },
    picture: {
      type: String,
      required: false, 
    },

  });
  
const Company = mongoose.model('Company', companySchema);   
const User = mongoose.model('User', userSchema);
module.exports =  {User, Company} ;