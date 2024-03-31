import React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Link from '@mui/material/Link';
import Divider from '@mui/material/Divider';

function JobListings() {
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

    return (
        <div>
          <CustomTypography variant="h4" gutterBottom>
            Job Listings
          </CustomTypography>
          <List>
            {jobPosts.map((job, index) => (
              <React.Fragment key={job.id}>
                {index > 0 && <Divider variant="inset" component="li" />}
                <ListItem alignItems="flex-start">
                  <ListItemText
                    primary={<CustomTypography variant="h5">{job.title}</CustomTypography>}
                    secondary={
                      <>
                        <CustomTypography component="span" variant="body2" color="text.primary">
                          {job.description}
                        </CustomTypography>
                        <CustomTypography component="span" variant="body2">
                          {job.lastUpdated}
                        </CustomTypography>
                        <Link href={job.applyLink} target="_blank" rel="noopener">
                          Apply Now
                        </Link>
                      </>
                    }
                  />
                </ListItem>
              </React.Fragment>
            ))}
          </List>
        </div>
      );
    }

    export default JobListings;