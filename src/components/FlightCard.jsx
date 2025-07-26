import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const FlightCard = ({ flight }) => (
  <Card sx={{ mb: 2, transition: '0.3s', '&:hover': { boxShadow: 6 } }}>
    <CardContent>
      <Typography variant="h6">{flight.airline} - {flight.flightNumber}</Typography>
      <Typography>{flight.from} ✈ {flight.to}</Typography>
      <Typography>Departure: {flight.departureTime} | Arrival: {flight.arrivalTime}</Typography>
      <Typography>Duration: {flight.duration}</Typography>
      <Typography variant="h6" color="primary">₹ {flight.price}</Typography>
      <Typography variant="body2" color="text.secondary">{flight.nonStop ? 'Non-stop' : '1+ stops'}</Typography>
    </CardContent>
  </Card>
);

export default FlightCard;