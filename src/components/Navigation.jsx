// components/Navigation.jsx
import React from 'react';
import { Button, Box } from '@mui/material';

function Navigation({ selectedPage, onSelectPage }) {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexGrow: 1,
      }}
    >
      <Box sx={{ position: 'relative', mx: 1 }}>
        <Button
          color='inherit'
          onClick={() => onSelectPage('Me')}
          sx={{
            fontSize: '1.2rem', // Adjust the font size here
            borderRadius: '50px', // Fully rounded corners
          }}
        >
          Me
        </Button>
        {selectedPage === 'Me' && (
          <Box
            sx={{
              position: 'absolute',
              bottom: -10,
              left: '50%',
              transform: 'translateX(-50%)',
              width: 10,
              height: 10,
              bgcolor: 'black',
              borderRadius: '50%',
            }}
          />
        )}
      </Box>
      <Box sx={{ position: 'relative', mx: 2 }}>
        <Button
          color='inherit'
          onClick={() => onSelectPage('Contact')}
          sx={{
            fontSize: '1.2rem', // Adjust the font size here
            borderRadius: '50px', // Fully rounded corners
          }}
        >
          Contact
        </Button>
        {selectedPage === 'Contact' && (
          <Box
            sx={{
              position: 'absolute',
              bottom: -10,
              left: '50%',
              transform: 'translateX(-50%)',
              width: 10,
              height: 10,
              bgcolor: 'black',
              borderRadius: '50%',
            }}
          />
        )}
      </Box>
    </Box>
  );
}

export default Navigation;
