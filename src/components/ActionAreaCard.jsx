import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Button, Box } from '@mui/material';

export default function ActionAreaCard({ image, title, description, link }) {
  return (
    <Card
      sx={{
        height: '100%', // Ensure the card takes the full height
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between', // Distribute space between card content
        bgcolor: 'white',
        border: '1px solid lightgray',
        borderRadius: 5,
        boxShadow: 'none',
      }}
    >
      <CardActionArea>
        <CardMedia component='img' height='200' image={image} alt={title} />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            {title}
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
        <Button
          variant='contained'
          sx={{
            boxShadow: 'none', // Remove button shadow
            borderRadius: '50px', // Full radius
            textTransform: 'none', // Maintain text capitalization
            backgroundColor: 'black', // Set button background to black
            color: 'white', // Set text color to white for contrast
          }}
          href={link}
          target='_blank' // Open the link in a new tab
        >
          View Live
        </Button>
      </Box>
    </Card>
  );
}
