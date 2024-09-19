import React, { useState, useEffect } from 'react';
import { TextField, MenuItem } from '@mui/material';
import countries from '../data/countries.json';

const CountrySelector = ({ value, onChange }) => {
  const [options, setOptions] = useState([]);

  useEffect(() => {
    const formattedOptions = countries.map(country => ({
      code: country.code,
      name: `${country.label} (+${country.code})`
    }));
    setOptions(formattedOptions);
  }, []);

  return (
    <TextField
      select
      fullWidth
      label="País"
      value={value || ''}
      onChange={(e) => onChange(e.target.value)}
      required
    >
      {options.map((option) => (
        <MenuItem key={option.code} value={option.code}>
          {option.name}
        </MenuItem>
      ))}
    </TextField>
  );
};

export default CountrySelector;
