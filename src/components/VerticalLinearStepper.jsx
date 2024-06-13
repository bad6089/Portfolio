import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';

const steps = [
  {
    label: 'Design Engineer',
    year: '2024',
    description: [
      'A leading UK-based manufacturer of household appliances.',
      'Cable, harness and electrical integration group for Environmental Care product.',
    ],
  },
  {
    label: 'Senior R&D Engineer',
    year: '2017',
    description: [
      'A major Japanese manufacturer of kitchen appliances.',
      'Kitchen Appliance Division. Develop Rice Cooker and Water Purifier product.',
    ],
  },
  {
    label: 'Design Engineer',
    year: '2015',
    description: [
      'A small local sheet metal manufacturing company.',
      'Specialize in sheet metal design. Design of electrical panel and sheet metal cabinet.',
    ],
  },
];

export default function CustomTimeline() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
      }}
    >
      {steps.map((step, index) => (
        <Box key={index} sx={{ display: 'flex', mb: 2 }}>
          <Chip
            label={step.year}
            sx={{
              mr: 2,
              backgroundColor: '#343a40',
              color: 'white',
            }}
          />
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Box
                sx={{
                  width: 10,
                  height: 10,
                  borderRadius: '50%',
                  backgroundColor: 'white',
                  mr: 2,
                }}
              />
              <Typography variant='h6' sx={{ fontWeight: 'bold' }}>
                {step.label}
              </Typography>
            </Box>
            <Box sx={{ ml: 4 }}>
              <Typography variant='body2' sx={{ fontStyle: 'italic' }}>
                {step.description[0]}
              </Typography>
              <Typography variant='body2' sx={{ mt: 0.5 }}>
                {step.description[1]}
              </Typography>
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  );
}
