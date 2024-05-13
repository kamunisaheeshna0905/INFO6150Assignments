const Job = require('../schemas/Job');

exports.createJob = async (req, res) => {
  const { companyName, jobTitle, description, salary } = req.body;
  try {
    const newJob = new Job({ companyName, jobTitle, description, salary });
    await newJob.save();
    res.status(201).send('Job created successfully');
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

exports.getJobs = async (req, res) => {
    try {
        const jobs = await Job.find();
        res.status(200).json(jobs);
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error });
    }
};
