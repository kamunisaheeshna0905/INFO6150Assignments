import React from 'react';
import { Box } from '@mui/material';

const BackgroundBox = ({ children }) => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundImage: `url(${process.env.PUBLIC_URL + '/marten-bjork-6dW3xyQvcYE-unsplash.jpg'})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {children}
    </Box>
  );
};

export default BackgroundBox;
