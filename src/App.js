// src/App.jsx

import React, { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

import SearchForm from './components/SearchForm';
import FlightResults from './components/FlightResults'; // optional

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [flightResults, setFlightResults] = useState([]);

  const handleSearch = (searchParams) => {
    setFlightResults(searchParams.results);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const darkTheme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      background: {
        default: darkMode ? '#121212' : '#f5f5f5',
        paper: darkMode ? '#1e1e1e' : '#ffffff',
      },
      primary: {
        main: '#90caf9',
      },
      text: {
        primary: darkMode ? '#ffffff' : '#000000',
        secondary: darkMode ? '#bbbbbb' : '#333333',
      },
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <CssBaseline />
        <Container maxWidth="md">
          <Typography variant="h4" align="center" gutterBottom sx={{ mt: 4 }}>
            ✈️ Flight Search Engine
          </Typography>

          <Button
            variant="contained"
            onClick={toggleDarkMode}
            sx={{ mb: 2, float: 'right' }}
          >
            Toggle {darkMode ? 'Light' : 'Dark'} Mode
          </Button>

          <SearchForm onSearch={handleSearch} />

          {flightResults.length > 0 && (
            <FlightResults results={flightResults} />
          )}
        </Container>
      </LocalizationProvider>
    </ThemeProvider>
  );
}

export default App;
