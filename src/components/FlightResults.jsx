// src/components/FlightResults.jsx

import React from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';

const FlightResults = ({ results }) => {
  return (
    <Grid container spacing={2} sx={{ mt: 4 }}>
      {results.map((flight, index) => (
        <Grid item xs={12} sm={6} key={index}>
          <Card>
            <CardContent>
              <Typography variant="h6">{flight.airline}</Typography>
              <Typography variant="body2">
                {flight.from} → {flight.to}
              </Typography>
              <Typography variant="body2">
                Departure: {flight.departure}
              </Typography>
              <Typography variant="body2">
                Arrival: {flight.arrival}
              </Typography>
              <Typography variant="body1" sx={{ mt: 1 }}>
                ₹{flight.price} ({flight.travelClass})
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default FlightResults;
