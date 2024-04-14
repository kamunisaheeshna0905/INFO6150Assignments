import React from 'react';
import { Container, Typography } from '@mui/material';
import Navbar from '../Components/Navbar';
import BackgroundBox from '../Components/BackgroundBox';

function EmployeeAbout() {
  return (
    <>
    <Navbar/>
    <BackgroundBox>
    <Container maxWidth="md">
      <Typography variant="h2" component="h1" sx={{ marginBottom: 2, maxWidth: '50%', color: 'black' }}>
        About Us
      </Typography>
      <Typography variant="body1" sx={{ color: 'black', maxWidth: '50%' }}>
      A paragraph is a series of sentences that are organized and coherent, and are all related to a single topic. Almost every piece of writing you do that is longer than a few sentences should be organized into paragraphs. This is because paragraphs show a reader where the subdivisions of an essay begin and end, and thus help the reader see the organization of the essay and grasp its main points.
      </Typography>
    </Container>
    </BackgroundBox>
    </>
  );
}

export default EmployeeAbout;
