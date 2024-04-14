import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Box } from '@mui/material';
import Navbar from '../Components/Navbar';
import BackgroundBox from '../Components/BackgroundBox';
function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
    <Navbar/>
    <BackgroundBox>
    <Container maxWidth="sm">
      <Typography variant="h2" component="h1" gutterBottom>
        Contact Us
      </Typography>
      <form onSubmit={handleSubmit}>
        <Box mb={2}>
          <TextField
            fullWidth
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            margin="normal"
          />
        </Box>
        <Box mb={2}>
          <TextField
            fullWidth
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            margin="normal"
          />
        </Box>
        <Box mb={2}>
          <TextField
            fullWidth
            label="Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            margin="normal"
            multiline
            rows={4}
          />
        </Box>
        <Button
          variant="contained"
          sx={{ backgroundColor: 'black', color: 'white', '&:hover': { backgroundColor: 'darkgrey' } }}
          type="submit"
        >
  Send Message
</Button>
      </form>
    </Container>
    </BackgroundBox>
    </>
  );
}

export default Contact;
