import React from 'react';
import CustomNavbar from '../Components/Navbar';
import { Outlet } from 'react-router-dom';
import { Paper, Typography, Container } from '@mui/material';
import BackgroundBox from '../Components/BackgroundBox';

function EmployeeHome() {
  return (
    <>
      <CustomNavbar/>
      <BackgroundBox>
    <Container component="main" maxWidth="xs">
      <h1>Welcome to the Home Page</h1>
        <Paper
          sx={{
            padding: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
          }}
          elevation={6}
        >
          <Typography component="h1" variant="h5">
            Find Your Next Great Hire
          </Typography>
     
      </Paper>
      </Container>
    </BackgroundBox>
      <Outlet/>
    </>
  );
}

export default EmployeeHome;
