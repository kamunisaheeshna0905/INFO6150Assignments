import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';
import Navbar from '../Components/Navbar';
const EmployeeDetails = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get('http://localhost:3002/user/get/jobs');
        setJobs(response.data);
      } catch (error) {
        console.error('Error fetching jobs:', error);
      }
    };

    fetchJobs();
  }, []);

  return (
    <>
    <Navbar/>
    <TableContainer component={Paper}>
      <Typography variant="h4" style={{ padding: 16 }}>Available Jobs</Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Company Name</TableCell>
            <TableCell>Job Title</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Salary</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {jobs.map((job) => (
            <TableRow key={job._id}>
              <TableCell>{job.companyName}</TableCell>
              <TableCell>{job.jobTitle}</TableCell>
              <TableCell>{job.description}</TableCell>
              <TableCell>{`$${job.salary.toLocaleString()}`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
};

export default EmployeeDetails;


