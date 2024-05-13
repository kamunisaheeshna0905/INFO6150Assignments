import React from 'react';
import { Grid, Card, CardMedia, CardContent, Typography } from '@mui/material';
import Navbar from '../Components/Navbar';
import BackgroundBox from '../Components/BackgroundBox';

function CompanyShowcase() {
  const companies = [
    {
      _id: '1',
      companyName: 'Google',
      image: 'unnamed.webp' 
    },
    {
      _id: '2',
      companyName: 'Amazon',
      image: 'amazon_dkblue_noto_email_v2016_us-main._CB468775337_.png' 
    },
    {
      _id: '3',
      companyName: 'Oracle',
      image: 'o_redbadge_digital_master.jpg' 
    }
    // Add more companies as needed
  ];

  return (
    <>
      <Navbar />
      <BackgroundBox>
        <Grid container spacing={2}>
          {companies.map((company) => (
            <Grid item xs={12} sm={6} md={4} key={company._id}>
              <Card>
                <CardMedia
                  component="img"
                  height="140"
                  image={`${process.env.PUBLIC_URL}/${company.image}`} // Access image from the 'public' directory
                  alt={`${company.companyName}`}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {company.companyName}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </BackgroundBox>
    </>
  );
}

export default CompanyShowcase;
