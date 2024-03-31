import React, { useEffect, useState } from 'react';
import { Grid, Card, CardMedia, Typography, Container } from '@mui/material';

function CompanyShowcase() {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    fetchCompanies();
  }, []);

  const fetchCompanies = () => {
    fetch('http://localhost:3002/companies')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch companies');
        }
        return response.json();
      })
      .then((data) => setCompanies(data))
      .catch((error) => console.error('Error:', error.message));
  };

  return (
    <Container sx={{ py: 8 }}>
      <Typography variant="h4" gutterBottom>
        Company Showcase
      </Typography>
      <Grid container spacing={4}>
        {companies.map((company) => (
          <Grid item key={company._id} xs={12} sm={6} md={4}>
            <CompanyCard company={company} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default CompanyShowcase;
