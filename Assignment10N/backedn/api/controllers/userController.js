require('dotenv').config();

const User = require('../schemas/User');
const validator = require('validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');



exports.createUser = async (req, res) => {
    const { email, password, fullName, type } = req.body;
      if (!email || !password || !fullName || !type) {
        return res.status(400).json({ message: 'No field should be left empty.' });
      }

    try {
      if (!validator.isEmail(req.body.email) || !req.body.email.endsWith('@northeastern.edu')) {
        return res.status(400).json({ message: 'Email must be a northeastern.edu address.' });
      }

      if (!validator.isStrongPassword(req.body.password)) {
        return res.status(400).json({ message: 'Password does not meet strength requirements.' });
      }
  
      if (!req.body.type || (req.body.type !== 'employee' && req.body.type !== 'admin')) {
        return res.status(400).json({ message: 'Type must be either "employee" or "admin" and cannot be left empty.' });
      }

      const hashedPassword = await bcrypt.hash(req.body.password, 10);
  
      const user = new User({
        fullName: req.body.fullName,
        email: req.body.email,
        password: hashedPassword,
        type: req.body.type, 
      });
  
      await user.save();
      res.status(201).json({ message: 'User created successfully.' });
    } catch (error) {
      res.status(500).json({ message: 'Server error', error: error.message });
    }
};

  

exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find({}, { password: 0 }); 
        res.status(200).json(users);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
};
  
exports.loginUser = async (req, res) =>{
    try {
      
        const user = await User.findOne({ email: req.body.email });
        if (!user) {
            return res.status(404).send('User not found.');
        }
        const isMatch = bcrypt.compare(req.body.password, user.password);
        if (!isMatch) {
            return res.status(400).send('Invalid credentials.');
        }
        
        const type = user.type;
        const token = jwt.sign(
          { id: user._id, type: user.type },
          process.env.JWT_SECRET,
          { expiresIn: '1h' } 
      );

        res.status(200).json({ message: 'Logged in successfully', type: type, token: token  });
    } catch (error) {
        res.status(500).send('Server error: ' + error.message);
    }
  };




