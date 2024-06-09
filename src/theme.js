// theme.js
import createTheme from '@mui/material/styles/createTheme';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // Blue
    },
    secondary: {
      main: '#dc004e', // Red
    },
    background: {
      default: '#f9f9f9', // Light gray (warm white)
    },
  },
  typography: {
    fontFamily: 'Sen, sans-serif',
    h1: {
      fontSize: '2rem',
    },
  },
});

export default theme;
