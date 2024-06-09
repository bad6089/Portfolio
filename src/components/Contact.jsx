import React from 'react';
import { Box, Typography, Container, Grid, Divider, Chip } from '@mui/material';

function Content() {
  return (
    <Box sx={{ py: 4 }}>
      <Container maxWidth='lg'>
        <Typography variant='h3' component='h2' sx={{ mb: 2 }}>
          Do not contact me, unless someone is in danger. Alright bye...
        </Typography>
      </Container>
    </Box>
  );
}

export default Content;
