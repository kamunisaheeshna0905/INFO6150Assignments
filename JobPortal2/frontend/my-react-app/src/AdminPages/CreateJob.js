import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Typography, Container } from '@mui/material';

const AddJobForm = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    jobTitle: '',
    description: '',
    salary: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3002/user/create/job', formData);
      alert('Job Created Successfully');
      setFormData({ companyName: '', jobTitle: '', description: '', salary: '' });
    } catch (error) {
      alert('Failed to create job');
      console.error('Error:', error);
    }
  };

  return (
    <Container>
      <Typography variant="h4" style={{ margin: '20px 0' }}>Add New Job</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Company Name"
          variant="outlined"
          fullWidth
          margin="normal"
          name="companyName"
          value={formData.companyName}
          onChange={handleChange}
        />
        <TextField
          label="Job Title"
          variant="outlined"
          fullWidth
          margin="normal"
          name="jobTitle"
          value={formData.jobTitle}
          onChange={handleChange}
        />
        <TextField
          label="Description"
          variant="outlined"
          fullWidth
          margin="normal"
          name="description"
          multiline
          rows={4}
          value={formData.description}
          onChange={handleChange}
        />
        <TextField
          label="Salary"
          variant="outlined"
          fullWidth
          margin="normal"
          name="salary"
          type="number"
          value={formData.salary}
          onChange={handleChange}
        />
        <Button type="submit" variant="contained" color="primary">
          Create Job
        </Button>
      </form>
    </Container>
  );
};

export default AddJobForm;
