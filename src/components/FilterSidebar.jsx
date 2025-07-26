import React from 'react';
import { Box, FormControlLabel, Checkbox, Slider, Typography } from '@mui/material';

const FilterSidebar = ({ filters, setFilters }) => {
  const handleCheckboxChange = (e) => {
    setFilters({ ...filters, nonStop: e.target.checked });
  };

  const handleSliderChange = (_, newValue) => {
    setFilters({ ...filters, priceRange: newValue });
  };

  return (
    <Box sx={{ mb: 3 }}>
      <FormControlLabel
        control={<Checkbox checked={filters.nonStop} onChange={handleCheckboxChange} />}
        label="Non-stop only"
      />
      <Typography gutterBottom>Max Price: ₹{filters.priceRange}</Typography>
      <Slider
        value={filters.priceRange}
        onChange={handleSliderChange}
        step={500}
        min={1000}
        max={20000}
        valueLabelDisplay="auto"
      />
    </Box>
  );
};

export default FilterSidebar;