// components/Hero.jsx
import React from 'react';
import {
  Box,
  Typography,
  Container,
  Card,
  CardContent,
  CardMedia,
} from '@mui/material';
import lines from '../assets/hello.gif'; // Make sure the path to your image is correct

const SquigglyLine = () => (
  <svg
    width='100%'
    height='20'
    viewBox='0 0 1000 20'
    xmlns='http://www.w3.org/2000/svg'
    preserveAspectRatio='none'
  >
    <path
      d='M0 10 Q 12.5 0, 25 10 T 50 10 T 75 10 T 100 10 T 125 10 T 150 10 T 175 10 T 200 10 T 225 10 T 250 10 T 275 10 T 300 10 T 325 10 T 350 10 T 375 10 T 400 10 T 425 10 T 450 10 T 475 10 T 500 10 T 525 10 T 550 10 T 575 10 T 600 10 T 625 10 T 650 10 T 675 10 T 700 10 T 725 10 T 750 10 T 775 10 T 800 10 T 825 10 T 850 10 T 875 10 T 900 10 T 925 10 T 950 10 T 975 10 T 1000 10'
      stroke='black'
      strokeWidth='3'
      fill='transparent'
    />
  </svg>
);

function Hero() {
  return (
    <Container maxWidth='lg'>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' }, // Column on xs, row on md
          py: 8,
          gap: 2, // Gap between the boxes
        }}
      >
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'left', // Left-align text on all screen sizes
            px: { xs: 2, md: 0 }, // Padding x on mobile to align with container padding
          }}
        >
          <Box>
            <Typography variant='h2' component='h1' sx={{ fontWeight: 'bold' }}>
              I am Badrul
            </Typography>
            <Typography variant='h4' component='h1' sx={{ fontWeight: 'bold' }}>
              I design things in real life and on the web
            </Typography>
            <Typography variant='h5'>Mechanial Engineer that design stuff</Typography>
          </Box>
        </Box>
        <Card
          sx={{
            flex: 1,
            bgcolor: 'black', // Adding a background color to make the border visible
            color: 'white',
            boxShadow: 'none',
            borderRadius: 5, // Rounded corners
            border: '2px solid #121212', // Black border
            position: 'relative', // Make the container position relative
            overflow: 'hidden', // Ensure the image doesn't overflow the container
            aspectRatio: '2 / 1', // Maintain 3:2 aspect ratio (width to height)
            mt: { xs: 2, md: 0 }, // Margin top on xs to place the card below text
          }}
        >
          <CardMedia
            component='img'
            image={lines}
            alt='Lines'
            sx={{
              width: '150%', // Change width to 150%
              height: '150%', // Change height to 150%
              objectFit: 'cover', // Ensure the image covers the box
              position: 'absolute', // Absolute positioning to fill the container
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)', // Center the image
              zIndex: 1, // Ensure the image is behind the text
              backgroundColor: '', // Set background color to black
            }}
          />
          <CardContent
            sx={{
              position: 'relative', // Position relative to place text on top of the image
              zIndex: 2, // Ensure the text is above the image
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '100%', // Make the container take up the full height
            }}
          >
            {/* <Typography
              variant='h4'
              component='p'
              sx={{
                textAlign: 'center',
                color: 'white', // Change text color to white for contrast
                fontWeight: 'bold',
              }}
            >
              Mechanical Engineer that specialize in design
            </Typography> */}
          </CardContent>
        </Card>
      </Box>
      <Box sx={{ width: '100%', maxWidth: '1000px', mx: 'auto', my: -1 }}>
        <SquigglyLine />
      </Box>
    </Container>
  );
}

export default Hero;
