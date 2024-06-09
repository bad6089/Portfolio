import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Box,
  Container,
  Typography,
  Slide,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
import AdjustIcon from '@mui/icons-material/Adjust';
import CloseIcon from '@mui/icons-material/Close';
import Navigation from './Navigation';

function Header({ selectedPage, onSelectPage }) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleLinkedInClick = () => {
    window.location.href =
      'https://www.linkedin.com/in/badrul-fakharudin-527648159/';
  };

  const handleGitHubClick = () => {
    window.location.href = 'https://github.com/bad6089';
  };

  const handleYouTubeClick = () => {
    window.location.href = 'https://www.youtube.com/watch?v=xvFZjo5PgG0';
  };

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleSelectPage = (page) => {
    onSelectPage(page);
    setDrawerOpen(false);
  };

  // Close the drawer when the selected page changes
  useEffect(() => {
    setDrawerOpen(false);
  }, [selectedPage]);

  return (
    <>
      <AppBar position='static' color='transparent' elevation={0}>
        <Container maxWidth=''>
          <Toolbar disableGutters>
            <Typography
              variant='h6'
              component='div'
              sx={{ fontWeight: 'bold', fontSize: '1.5rem' }}
            >
              Portfolio
            </Typography>
            <IconButton
              color='inherit'
              edge='start'
              onClick={toggleDrawer}
              sx={{ display: { xs: 'block', md: 'none' }, ml: 1, mt: 0.5 }} // Adjusted position
            >
              {drawerOpen ? <CloseIcon /> : <AdjustIcon />}
            </IconButton>
            <Box sx={{ display: { xs: 'none', md: 'flex' }, flexGrow: 1 }}>
              <Navigation
                selectedPage={selectedPage}
                onSelectPage={handleSelectPage}
              />
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', ml: 'auto' }}>
              <IconButton onClick={handleLinkedInClick}>
                <LinkedInIcon />
              </IconButton>
              <IconButton onClick={handleGitHubClick}>
                <GitHubIcon />
              </IconButton>
              <IconButton onClick={handleYouTubeClick}>
                <YouTubeIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Slide direction='up' in={drawerOpen} mountOnEnter unmountOnExit>
        <Box
          sx={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            width: '100%',
            bgcolor: 'background.paper',
            zIndex: 1200,
          }}
        >
          <List>
            <ListItem button onClick={() => handleSelectPage('Me')}>
              <ListItemText primary='Me' />
            </ListItem>
            <ListItem button onClick={() => handleSelectPage('Contact')}>
              <ListItemText primary='Contact' />
            </ListItem>
          </List>
        </Box>
      </Slide>
    </>
  );
}

export default Header;
