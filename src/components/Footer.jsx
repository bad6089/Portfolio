import React from 'react';
import { Box, Typography, Container } from '@mui/material';

function Footer() {
  return (
    <Box
      sx={{
        py: 2,
        bgcolor: '',
        color: 'black',
        borderTop: '1px solid #ddd',
      }}
    >
      <Container maxWidth='md'>
        <Typography variant='body2' sx={{ textAlign: 'center' }}>
          © 2024 Badrul Portfolio. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;
