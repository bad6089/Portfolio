import React from 'react';
import { Box, Typography } from '@mui/material';

function InfoSection() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' }, // Column layout on small screens, row on medium and larger
        gap: 2,
        py: 4,
      }}
    >
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          bgcolor: 'transparent',
        }}
      >
        <Typography
          variant='h2'
          sx={{ fontWeight: 'bold', textAlign: 'center', color: 'black' }}
        >
          Stable Diffusion AI Art Gallery
        </Typography>
      </Box>
      <Box
        sx={{
          flex: 1,
          bgcolor: '#121212',
          color: 'white',
          p: 4,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 5,
        }}
      >
        <Typography variant='body1' sx={{ textAlign: 'center' }}>
          I have always had a passion for arts but never felt skilled enough or
          had enough time to venture deeply into it. Until Stable Diffusion AI
          art came through, allowing me to explore AI generation with Control
          Net extension to create wonderful images. It has opened new doors for
          creativity and experimentation, providing a platform to bring my
          artistic visions to life with ease and precision.
        </Typography>
      </Box>
    </Box>
  );
}

export default InfoSection;
