const express = require('express');
const bcrypt = require('bcrypt');
const multer = require('multer');
const validator = require('validator');
const {User, Company} = require('../models/models');
const router = express.Router();
const path = require('path');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // cb(null, './images');
    cb(null, path.join(__dirname, '../images'));
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'image/gif') {
    cb(null, true);
  } else {
    cb(null, false);
  }
};
const upload = multer({
  storage: storage,
  fileFilter: fileFilter
});


router.post('/create', async (req, res) => {
  try {
    if (!validator.isEmail(req.body.email)|| !req.body.email.endsWith('@northeastern.edu')) return res.status(400).json({ message: 'Email must be a northeastern.edu address.' });
    if (!validator.isStrongPassword(req.body.password)) return res.status(400).json({ message: 'Password does not meet strength requirements.' });

    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    const user = new User({
      fullName: req.body.fullName,
      email: req.body.email,
      password: hashedPassword
    });
    await user.save();
    res.status(201).json({ message: 'User created successfully.' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

router.post('/login', async (req, res) => {
  try {
      const user = await User.findOne({ email: req.body.email });
      if (!user) {
          return res.status(404).send('User not found.');
      }
      const isMatch = bcrypt.compare(req.body.password, user.password);
      if (!isMatch) {
          return res.status(400).send('Invalid credentials.');
      }
      res.status(200).json({ message: 'Logged in successfully', user: user });
  } catch (error) {
      res.status(500).send('Server error: ' + error.message);
  }
});


router.delete('/delete', async (req, res) => {
    try {
      const result = await User.deleteOne({ email: req.body.email });
      if (result.deletedCount === 0) return res.status(404).send('User not found.');
  
      res.status(200).json({ message: 'User deleted successfully.' });
    } catch (error) {
      res.status(500).send('Server error: ' + error.message);
    }
  });

router.put('/edit', async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(404).send('User not found.');

    user.fullName = req.body.fullName;
    user.password = await bcrypt.hash(req.body.password, 10); 
    await user.save();

    res.status(200).json({ message: 'User updated successfully.' });
  } catch (error) {
    res.status(500).send('Server error: ' + error.message);
  }
});

router.post('/uploadImage', upload.single('image'), async (req, res) => {
  try {
    const user = await User.findById(req.body.userId);
    if (!user) return res.status(404).send('User not found.');

    user.profileImage = req.file.path;
    await user.save();

    res.status(200).send({ message: 'Image uploaded successfully.', filePath: req.file.path });
  } catch (error) {
    res.status(500).send('Server error: ' + error.message);
  }
});

router.get('/getAll', async (req, res) => {
    try {
      const users = await User.find().select('-password'); 
      res.status(200).json(users);
    } catch (error) {
      res.status(500).send('Server error: ' + error.message);
    }
  });


  router.get('/companies', async (req, res) => {
    try {
      const companies = await Company.find({});
      res.status(200).json(companies);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching companies', error: error.message });
    }
  });


module.exports = router;
