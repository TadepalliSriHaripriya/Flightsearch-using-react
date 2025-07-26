// src/components/SearchForm.jsx

import React, { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Grid,
  Tabs,
  Tab,
  InputAdornment,
  MenuItem,
  FormControlLabel,
  Switch,
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { FlightTakeoff, FlightLand, Group } from '@mui/icons-material';

function SearchForm({ onSearch, darkMode, onToggleDarkMode }) {
  const [tripType, setTripType] = useState('oneway');
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState(null);
  const [passengers, setPassengers] = useState(1);
  const [travelClass, setTravelClass] = useState('Economy');

  const handleSearch = () => {
    if (!origin || !destination || !date) {
      alert('Please fill all fields');
      return;
    }

    // Generate mock flight results
    const mockResults = [
      {
        flightNumber: 'AI101',
        airline: 'Air India',
        from: origin,
        to: destination,
        departure: '08:00 AM',
        arrival: '10:30 AM',
        duration: '2h 30m',
        price: `₹${(4000 + Math.random() * 3000).toFixed(0)}`,
        travelClass,
      },
      {
        flightNumber: '6E203',
        airline: 'IndiGo',
        from: origin,
        to: destination,
        departure: '11:00 AM',
        arrival: '01:20 PM',
        duration: '2h 20m',
        price: `₹${(3500 + Math.random() * 2000).toFixed(0)}`,
        travelClass,
      },
      {
        flightNumber: 'SG303',
        airline: 'SpiceJet',
        from: origin,
        to: destination,
        departure: '05:30 PM',
        arrival: '07:45 PM',
        duration: '2h 15m',
        price: `₹${(3000 + Math.random() * 2500).toFixed(0)}`,
        travelClass,
      },
    ];

    const searchParams = {
      tripType,
      origin,
      destination,
      date: date.toISOString().split('T')[0],
      passengers,
      travelClass,
      results: mockResults,
    };

    onSearch(searchParams);
  };

  return (
    <Box
      sx={{
        p: 3,
        mb: 3,
        borderRadius: 3,
        boxShadow: 4,
        backgroundImage: darkMode
          ? 'linear-gradient(to right, #0f2027, #203a43, #2c5364)'
          : 'linear-gradient(to right, #e0f7fa, #ffffff)',
        backgroundSize: 'cover',
        position: 'sticky',
        top: 0,
        zIndex: 100,
      }}
    >
      <Tabs
        value={tripType}
        onChange={(e, val) => setTripType(val)}
        textColor="primary"
        indicatorColor="primary"
        sx={{ mb: 2 }}
      >
        <Tab label="One-way" value="oneway" />
        <Tab label="Round-trip" value="roundtrip" />
        <Tab label="Multi-city" value="multicity" />
      </Tabs>

      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} sm={3}>
          <TextField
            label="From"
            fullWidth
            value={origin}
            onChange={(e) => setOrigin(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <FlightTakeoff color="action" />
                </InputAdornment>
              ),
            }}
          />
        </Grid>

        <Grid item xs={12} sm={3}>
          <TextField
            label="To"
            fullWidth
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <FlightLand color="action" />
                </InputAdornment>
              ),
            }}
          />
        </Grid>

        <Grid item xs={12} sm={3}>
          <DatePicker
            label="Departure Date"
            value={date}
            onChange={(newValue) => setDate(newValue)}
            slotProps={{ textField: { fullWidth: true } }}
          />
        </Grid>

        <Grid item xs={6} sm={1.5}>
          <TextField
            label="Passengers"
            type="number"
            fullWidth
            value={passengers}
            onChange={(e) => setPassengers(Number(e.target.value))}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Group color="action" />
                </InputAdornment>
              ),
              inputProps: { min: 1 },
            }}
          />
        </Grid>

        <Grid item xs={6} sm={1.5}>
          <TextField
            label="Class"
            select
            fullWidth
            value={travelClass}
            onChange={(e) => setTravelClass(e.target.value)}
          >
            <MenuItem value="Economy">Economy</MenuItem>
            <MenuItem value="Premium Economy">Premium Economy</MenuItem>
            <MenuItem value="Business">Business</MenuItem>
            <MenuItem value="First Class">First Class</MenuItem>
          </TextField>
        </Grid>

        <Grid item xs={12} sm={2}>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            sx={{ height: '100%' }}
            onClick={handleSearch}
          >
            Search Flights
          </Button>
        </Grid>

        <Grid item xs={12} sm={1}>
          <FormControlLabel
            control={<Switch checked={darkMode} onChange={onToggleDarkMode} />}
            label="Dark"
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default SearchForm;
