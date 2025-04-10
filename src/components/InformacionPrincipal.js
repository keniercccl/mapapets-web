// InformacionPrincipal.js
import React from 'react';
import { Box, Typography, useMediaQuery } from '@mui/material';
import FilaUno from '../components/filaUno';
import FilaDos from '../components/filaDos';
import data from '../data/textos.json';
import imagen1 from '../assets/pet_square.svg';
import imagen2 from '../assets/pet_travel.svg';
import fondo_logo from '../assets/fondo_nombre.png';

const InformacionPrincipal = () => {
  const isMobile = useMediaQuery('(max-width:900px)');

  return (
    <Box sx={{ backgroundColor: 'transparent', p: 3 }}>
      {!isMobile && (
        <Box
          sx={{
            textAlign: "center",
            backgroundImage: `url(${fondo_logo})`, // Ajusta la ruta según tu estructura de archivos
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            padding: 2, // Espaciado interno para mejorar la visibilidad del texto
            color: "white", // Asegura contraste con el fondo
            padding: 2,
            margin: 2,
          }}
        >
          <Typography variant="h1" sx={{ mb: 3 ,padding:3 , margin:3   }}>Mapapets</Typography>


        </Box>
      )}
      <Box>
        <FilaUno texto={data.texto1} imagen={imagen1} />
        <FilaDos texto={data.texto2} imagen={imagen2} />
        <Box sx={{ mt: 3 }}> Porque para nosotros, no es solo un viaje, es el bienestar de tu mejor amigo, y esa es nuestra prioridad.  </Box>
      </Box>
    </Box>
  );
};

export default InformacionPrincipal;
