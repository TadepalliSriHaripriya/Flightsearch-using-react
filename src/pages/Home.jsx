import React, { useState } from 'react';
import SearchForm from '../components/SearchForm';
import { Box, Typography, Paper } from '@mui/material';

const sampleFlights = [
  {
    airline: 'Air India',
    flightNumber: 'AI-202',
    from: 'Delhi',
    to: 'Mumbai',
    departure: '08:00 AM',
    arrival: '10:00 AM',
    price: '₹4500',
  },
  {
    airline: 'IndiGo',
    flightNumber: '6E-345',
    from: 'Hyderabad',
    to: 'Chennai',
    departure: '09:30 AM',
    arrival: '11:00 AM',
    price: '₹3200',
  },
  {
    airline: 'SpiceJet',
    flightNumber: 'SG-101',
    from: 'Delhi',
    to: 'Bangalore',
    departure: '06:00 AM',
    arrival: '08:30 AM',
    price: '₹5000',
  },
];

function Home() {
  const [results, setResults] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  const handleSearch = (searchParams) => {
    const filtered = sampleFlights.filter(
      (f) =>
        f.from.toLowerCase().includes(searchParams.origin.toLowerCase()) &&
        f.to.toLowerCase().includes(searchParams.destination.toLowerCase())
    );

    setResults(filtered.length ? filtered : [{ noMatch: true }]);
  };

  return (
    <Box sx={{ p: 3 }}>
      <SearchForm
        onSearch={handleSearch}
        darkMode={darkMode}
        onToggleDarkMode={() => setDarkMode(!darkMode)}
      />

      <Box>
        {results.length > 0 ? (
          results.map((flight, index) =>
            flight.noMatch ? (
              <Paper key={index} sx={{ p: 2, mt: 2, textAlign: 'center' }}>
                <Typography variant="h6">No flights found for this route.</Typography>
              </Paper>
            ) : (
              <Paper key={index} sx={{ p: 2, mt: 2 }}>
                <Typography variant="h6">{flight.airline} - {flight.flightNumber}</Typography>
                <Typography>
                  {flight.from} → {flight.to}
                </Typography>
                <Typography>
                  Departure: {flight.departure} | Arrival: {flight.arrival}
                </Typography>
                <Typography>Price: {flight.price}</Typography>
              </Paper>
            )
          )
        ) : (
          <Typography variant="body1" sx={{ mt: 4, textAlign: 'center' }}>
            Search for flights to see results.
          </Typography>
        )}
      </Box>
    </Box>
  );
}

export default Home;
