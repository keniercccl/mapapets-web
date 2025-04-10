import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import fondoTextos from '../assets/fondoTextosUno.png';

const FilaUno = ({ texto, imagen }) => {
  const isMobile = window.innerWidth < 600;

  return (
    <Box sx={{ mb: 3 }}>
      <Grid container spacing={2} direction={isMobile ? 'column' : 'row'}>
        <Grid item xs={12} sm={6} order={isMobile ? 2 : 1}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100%',
              borderRadius: 2,
              backgroundImage: `url(${fondoTextos})`,
              backgroundSize: 'cover',
              margin: 2,
            }}
          >
            <Box
              sx={{
                textAlign: 'justify',
                p: 2,
                border: '1px solid rgba(0, 0, 0, 0.1)',
                margin: 2,
                backgroundColor: 'rgba(0, 0, 0, 0.1)',
                borderRadius: 2,
                color: '#fff',
              }}
            >
              <Typography variant="body1">{texto}</Typography>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} order={isMobile ? 1 : 2}>
          <Box sx>
            <img src={imagen} alt="Imagen" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default FilaUno;