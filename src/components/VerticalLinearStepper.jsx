import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';

const steps = [
  {
    label: 'Design Engineer',
    year: '2024',
    description: `DYSON GLOBAL DEVELOPMENT CENTER, JOHOR, MY
                  Cable, harness and electrical integration group for Enviromental Care porduct.`,
  },
  {
    label: 'Senior R&D Engineer',
    year: '2017',
    description: `PANASONIC APPLIANCE R&D, SELANGOR, MALAYSIA
                  Kitchen Appliance Division. Develop Rice Cooker and Water Purifier product.`,
  },
  {
    label: 'Design Engineer',
    year: '2015',
    description: `EZZYTECH ENGINEERING, SELANGOR, MALAYSIA
                  Specialize in sheet metal design. Deisgn of electrical panel and sheet metal cabinet.`,
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
            <Typography variant='body2' sx={{ ml: 4 }}>
              {step.description.split('\n').map((line, i) => (
                <React.Fragment key={i}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
            </Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
}
