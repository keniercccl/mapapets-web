import React, { useState, useEffect } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import MarcoStaff from './MarcoStaff';
import staffData from '../data/staff.json';

const Staff = () => {
  const [staff, setStaff] = useState([]);

  // Filtrar solo los miembros activos del staff
  useEffect(() => {
    const activeStaff = staffData.filter(member => member.estado === 'activo');
    setStaff(activeStaff);
  }, []);

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant='h4' ><mark>Nuestro Staff</mark></Typography>
      <Grid container spacing={3} justifyContent="center">
        {staff.map((member) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={member.nombre}>
            <MarcoStaff nombre={member.nombre} cargo={member.cargo} foto={member.foto} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Staff;
