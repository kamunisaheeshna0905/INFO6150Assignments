require('dotenv').config();

const express = require('express');
const router = express.Router();
const cors = require('cors');
const jobController = require('../controllers/jobController');
const userController = require('../controllers/userController');
const app = express();
app.use(cors());



router.post('/create', userController.createUser);
router.get('/all', userController.getAllUsers);
router.post('/login',userController.loginUser);
router.post('/create/job', jobController.createJob);
router.get('/get/jobs', jobController.getJobs);


module.exports = router;
