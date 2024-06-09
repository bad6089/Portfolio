import React, { useState } from 'react';
import { CssBaseline, Box } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import Header from './components/Header';
import Hero from './components/Hero';
import Content from './components/Content';
import Footer from './components/Footer';
import Contact from './components/Contact';

function App() {
  const [selectedPage, setSelectedPage] = useState('Me');

  const renderContent = () => {
    switch (selectedPage) {
      case 'Me':
        return (
          <>
            <Hero />
            <Content />
          </>
        );
      case 'Contact':
        return <Contact />;
      default:
        return <Hero />;
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ backgroundColor: 'background.default', minHeight: '100vh' }}>
        <Box sx={{ maxWidth: '1000px', mx: 'auto' }}>
          <Header selectedPage={selectedPage} onSelectPage={setSelectedPage} />
          {renderContent()}
          <Footer />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
