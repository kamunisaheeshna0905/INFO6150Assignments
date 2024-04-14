import React, { useState, useEffect } from 'react';
import { Grid, Card, CardMedia, CardContent, Typography } from '@mui/material';
import Navbar from '../Components/Navbar';
import BackgroundBox from '../Components/BackgroundBox';

function CompanyShowcase() {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const response = await fetch('http://localhost:3002/user/getAll'); 
        const data = await response.json();
        console.log(data); 
        setCompanies(data);
      } catch (error) {
        console.error('Error fetching company data:', error);
      }
    };

    fetchCompanies();
  }, []);

  return (
    <>
    <Navbar/>
    <BackgroundBox>
    <Grid container spacing={2}>
      {companies.map((company) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={company._id}>
          <Card>
            <CardMedia
              component="img"
              height="140"
              image={`http://localhost:3002${company.companyImage}`} 
              alt={company.companyName}
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
