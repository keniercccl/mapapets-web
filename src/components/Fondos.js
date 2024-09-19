import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { useMediaQuery, useTheme } from '@mui/material';
import fondoImage from '../assets/fondo.jpg';

const Fondos = ({ children }) => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <Box
      sx={{
        width: '100vw',
        height: '100vh',
        backgroundImage: `url(${fondoImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'stretch',
      }}
    >
      <Container
        sx={{
          width: isDesktop ? '90%' : '90%',
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          padding: theme.spacing(3),
          borderRadius: '8px',
          boxShadow: 3,
        }}
      >
        {children}
      </Container>
    </Box>
  );
};

export default Fondos;
