import React from 'react';
import { Box, Switch, Typography } from '@mui/material';

const ThemeToggle = ({ darkMode, setDarkMode }) => (
  <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 2 }}>
    <Typography sx={{ mr: 1 }}>Dark Mode</Typography>
    <Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
  </Box>
);

export default ThemeToggle;