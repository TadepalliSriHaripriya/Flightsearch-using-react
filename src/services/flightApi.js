export const fetchFlights = async ({ from, to, date }) => {
  await new Promise((r) => setTimeout(r, 1000));
  return [
    {
      airline: 'IndiGo',
      flightNumber: '6E-203',
      from,
      to,
      departureTime: '08:00',
      arrivalTime: '10:30',
      duration: '2h 30m',
      price: 5499,
      nonStop: true,
    },
    {
      airline: 'Air India',
      flightNumber: 'AI-101',
      from,
      to,
      departureTime: '11:00',
      arrivalTime: '13:40',
      duration: '2h 40m',
      price: 6299,
      nonStop: false,
    },
    {
      airline: 'Vistara',
      flightNumber: 'UK-858',
      from,
      to,
      departureTime: '15:00',
      arrivalTime: '17:45',
      duration: '2h 45m',
      price: 7199,
      nonStop: true,
    },
  ];
};