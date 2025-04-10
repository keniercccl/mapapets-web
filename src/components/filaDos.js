import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import fondoTextos from '../assets/fondoTextosUno.png';

const FilaDos = ({ texto, imagen }) => {
  const isMobile = window.innerWidth < 600;

  return (
    <Box sx={{ mb: 3 }}>
      <Grid
        container
        spacing={2}
        direction={isMobile ? 'column' : 'row'}
        alignItems="center"
      >
        <Grid item xs={12} sm={6} order={isMobile ? 2 : 1}>
          <Box>
            <img src={imagen} alt="Imagen" style={{ width: '100%', height: 'auto' }} />
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} order={isMobile ? 1 : 2}>
          <Box
            sx={{
              backgroundImage: `url(${fondoTextos})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 10,
              p: 3,
              border: '2px solid black',
              m: 2,
            }}
          >
            <Typography variant="body1" sx={{ textAlign: 'justify' }}>
              {texto}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default FilaDos;