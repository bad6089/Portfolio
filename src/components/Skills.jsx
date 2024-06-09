import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import CategoryIcon from '@mui/icons-material/Category';
import DevicesFoldIcon from '@mui/icons-material/DevicesFold';
import WebAssetIcon from '@mui/icons-material/WebAsset';
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
import ElectricalServicesIcon from '@mui/icons-material/ElectricalServices';
import BugReportIcon from '@mui/icons-material/BugReport';
import EngineeringIcon from '@mui/icons-material/Engineering';
import HandymanIcon from '@mui/icons-material/Handyman';
import StraightenIcon from '@mui/icons-material/Straighten';
import SecurityIcon from '@mui/icons-material/Security';

export default function Skills() {
  const skills = [
    {
      label: 'Plastic Design',
      bgcolor: '#80ffdb',
      icon: <CategoryIcon sx={{ mr: 1, fontSize: '1.2rem' }} />,
    },
    {
      label: 'Metal Design',
      bgcolor: '#72efdd',
      icon: <DevicesFoldIcon sx={{ mr: 1, fontSize: '1.2rem' }} />,
    },
    {
      label: 'UI Design',
      bgcolor: '#64dfdf',
      icon: <WebAssetIcon sx={{ mr: 1, fontSize: '1.2rem' }} />,
    },
    {
      label: 'Video Editing',
      bgcolor: '#56cfe1',
      icon: <SmartDisplayIcon sx={{ mr: 1, fontSize: '1.2rem' }} />,
    },
    {
      label: 'IEC Standard',
      bgcolor: '#48bfe3',
      icon: <ElectricalServicesIcon sx={{ mr: 1, fontSize: '1.2rem' }} />,
    },
    {
      label: 'DFMEA',
      bgcolor: '#4ea8de',
      icon: <BugReportIcon sx={{ mr: 1, fontSize: '1.2rem' }} />,
    },
    {
      label: 'Injection Mould',
      bgcolor: '#5390d9',
      icon: <EngineeringIcon sx={{ mr: 1, fontSize: '1.2rem' }} />,
    },
    {
      label: 'Product Develop',
      bgcolor: '#00b4d8',
      icon: <HandymanIcon sx={{ mr: 1, fontSize: '1.2rem' }} />,
    },
    {
      label: 'Tollerance Stack',
      bgcolor: '#90e0ef',
      icon: <StraightenIcon sx={{ mr: 1, fontSize: '1.2rem' }} />,
    },
    {
      label: 'Product Testing',
      bgcolor: '#caf0f8',
      icon: <SecurityIcon sx={{ mr: 1, fontSize: '1.2rem' }} />,
    },
  ];

  // Split skills into pairs
  const skillPairs = [];
  for (let i = 0; i < skills.length; i += 2) {
    skillPairs.push(skills.slice(i, i + 2));
  }

  return (
    <Box
      sx={{
        p: 2,
        borderRadius: 5,
        bgcolor: 'white',
        border: '1px solid #e0e0e0',
        minHeight: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start', // Align items to the top
        alignItems: 'flex-start', // Align items to the left
        paddingTop: '16px', // Add padding at the top
        paddingBottom: '16px', // Add padding at the bottom
      }}
    >
      <Typography
        variant='h4'
        component='h1'
        sx={{ fontWeight: 'bold', textAlign: 'center', mt: 1, width: '100%' }} // Add margin to the top for spacing and full width
      >
        Skilled at
      </Typography>
      <Stack
        direction='column'
        spacing={2} // Increase spacing between rows
        sx={{
          mt: 2,
          width: '100%', // Ensure full width
        }}
      >
        {skillPairs.map((pair, index) => (
          <Stack
            key={index}
            direction='row'
            spacing={2} // Increase spacing between boxes
            sx={{
              width: '100%', // Ensure full width
            }}
          >
            {pair.map((skill, idx) => (
              <Box
                key={idx}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  bgcolor: skill.bgcolor,
                  color: 'black',
                  fontSize: '0.7rem', // Make text a little bit bigger
                  px: 2,
                  py: 1,
                  borderRadius: 10,
                  margin: '8px', // Add margin around the box directly
                  boxShadow: 1, // Optional: add a shadow for better appearance
                  flex: 1, // Ensure boxes take equal width
                }}
              >
                {skill.icon}
                {skill.label}
              </Box>
            ))}
          </Stack>
        ))}
      </Stack>
    </Box>
  );
}
