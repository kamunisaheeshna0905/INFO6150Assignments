import React, { useState } from 'react';
import { Grid, Card, CardContent, CardActions, Typography,Link,Button,Stack } from '@mui/material';
import Pagination from '@mui/material/Pagination';
import Navbar from '../Components/Navbar';

function EmployeeJobListings() {
  const jobPosts = [
            {
                id: 1,
                title: 'Full Stack Developer',
                description: 'Join our dynamic team to work on cutting-edge technologies. Develop and maintain sophisticated web applications for our diverse client base.',
                lastUpdated: 'Last updated 2 days ago',
                applyLink: 'https://example.com/apply/full-stack-developer',
            },
            {
                id: 2,
                title: 'Digital Marketing Specialist',
                description: 'Elevate our digital marketing strategies to promote our innovative products. Proficiency in SEO, SEM, and social media marketing is highly valued.',
                lastUpdated: 'Last updated 1 day ago',
                applyLink: 'https://example.com/apply/digital-marketing-specialist',
            },
            {
                id: 3,
                title: 'UX/UI Designer',
                description: 'Shape engaging user experiences and create visually captivating designs. Work alongside cross-functional teams to turn ideas into reality.',
                lastUpdated: 'Last updated 4 hours ago',
                applyLink: 'https://example.com/apply/ux-ui-designer',
            },
            {
                id: 4,
                title: 'Data Scientist',
                description: 'Leverage advanced analytics and machine learning to uncover insights from vast data sets. Proficiency with Python and R is a must.',
                lastUpdated: 'Last updated 3 days ago',
                applyLink: 'https://example.com/apply/data-scientist',
            },
            {
                id: 5,
                title: 'Customer Support Representative',
                description: 'Deliver unparalleled customer service and support. Exceptional communication skills and a knack for solving problems are key.',
                lastUpdated: 'Last updated 6 hours ago',
                applyLink: 'https://example.com/apply/customer-support-representative',
            },
            {
                id: 6,
                title: 'Project Manager',
                description: 'Guide and coordinate project teams. Ensure projects are completed on time and within budget while meeting client expectations.',
                lastUpdated: 'Last updated 6 hours ago',
                applyLink: 'https://example.com/apply/project-manager',
            },
        ];

  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 3; 

  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = jobPosts.slice(indexOfFirstJob, indexOfLastJob);

  const paginate = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <>
      <Navbar />
      <Typography variant="h4" gutterBottom sx={{ m: 2 }}>
        Job Listings
      </Typography>
      <Grid container spacing={2} sx={{ px: 2 }}>
        {currentJobs.map((job) => (
          <Grid item xs={12} sm={6} md={4} key={job.id}>
            <Card variant="outlined" sx={{ mb: 2 }}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {job.title}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {job.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" variant="contained" sx={{backgroundColor:"black"}}>
                  <Link href={job.applyLink} target="_blank" rel="noopener" color="inherit" underline="none">
                    Apply Now
                  </Link>
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Stack spacing={2} alignItems="center" justifyContent="center" mt={4}>
        <Pagination
          count={Math.ceil(jobPosts.length / jobsPerPage)}
          page={currentPage}
          onChange={paginate}
          color="secondary"
        />
      </Stack>
    </>
  );
}

export default EmployeeJobListings;