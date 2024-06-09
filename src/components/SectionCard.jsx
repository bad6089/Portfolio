import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Box,
} from '@mui/material';

const SectionCard = ({ title, items, bgColor, icon }) => {
  return (
    <Card
      sx={{
        borderRadius: 5,
        bgcolor: bgColor || '#121212', // Use the passed bgColor prop or default to dark gray
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        boxShadow: 'none', // Remove box shadow
      }}
    >
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          {icon}
          <Typography
            variant='h5'
            component='div'
            sx={{ fontSize: '1.3rem', ml: 1 }} // Adjust this line to increase text size and add margin
          >
            {title}
          </Typography>
        </Box>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: '' }}>
          {items.map((item, index) => (
            <ListItem key={index}>
              <ListItemAvatar>
                <Avatar alt={item.text} src={item.src} />
              </ListItemAvatar>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default SectionCard;
