import React from "react";
import PropTypes from "prop-types";
import { Box, Grid, Typography } from "@mui/material";
import { AlignHorizontalRightRounded } from "@mui/icons-material";
import "../App.css";
import garra from '../assets/garrapata.png'

import useMediaQuery from '@mui/material/useMediaQuery';
import imagenInicial from '../assets/garrapata.png'; 

// Aqui detect si estamos en dispositivos móviles
const InformacionPrincipal = () => {
  const isMobile = useMediaQuery('(max-width:600px)');

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h1" sx={{ textAlign: 'center', marginBottom: 3 }}>
        Mapapets
      </Typography>
      
      <Grid container spacing={2} direction={isMobile ? 'column' : 'row'}>
        <Grid item xs={12} md={6}>
          <Box>
            <Typography variant={isMobile ? 'body1' : 'h5'}>
            En Mapapets, creemos que cada mascota es más que un compañero; es
              un miembro de la familia. Nuestro equipo, con más de 5 años de
              experiencia, ha dejado huellas en todo el mundo, asegurándose que
              cada trámite sanitario y cada viaje de tu mascota sea una
              experiencia cómoda y segura. Ofrecemos asesoría personalizada para
              ayudarte a comprender los requisitos de cada destino y garantizar
              que tu mascota esté lista para su aventura. Somos un equipo humano
              y profesional que te ofrece una gama completa de servicios, que
              incluye asistencia veterinaria, trámites sanitarios, transporte a
              nivel nacional e internacional, guardería, entre otros. Nuestro
              enfoque se centra en priorizar la seguridad y el confort de las
              mascotas y sus dueños, Nos dedicamos a brindar amor, cuidado y
              atención a cada peludito y acompañándote en cada paso del proceso,
              nuestro compromiso es asegurar que cada mascota llegue feliz y
              segura a su nuevo hogar, sin importar la distancia.
            </Typography>
          </Box>
        </Grid>
        
        <Grid item xs={12} md={6}>
          <Box>
            <img src={imagenInicial} alt="Descripción de la imagen" style={{ width: '100%' }} />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default InformacionPrincipal;


// const InformacionPrincipal = (props) => {
//   return (
//     <div>
//       <Box>
//         <h1 sx={{ AlignHorizontalRightRounded }} className="slackey-regular">
//           <mark>MAPAPETS</mark>
//         </h1>
//       </Box>

//       <Box>
//         <Grid container spacing={2}>
//           <Grid
//             sx={{
//               padding: { xs: 1, md: 6 },
//               borderTopLeftRadius: "200px",
//               borderBottomLeftRadius: "200px",
//               borderBottomRightRadius: "-24px",
//               margin: { xs: 1, md: 0 },
//               backgroundColor: "rgba(255, 109, 0, 0.8)",
//             }}
//           >
//             <Typography variant="p" sx={{ padding: 10 }}>
//               En Mapapets, creemos que cada mascota es más que un compañero; es
//               un miembro de la familia. Nuestro equipo, con más de 5 años de
//               experiencia, ha dejado huellas en todo el mundo, asegurándose que
//               cada trámite sanitario y cada viaje de tu mascota sea una
//               experiencia cómoda y segura. Ofrecemos asesoría personalizada para
//               ayudarte a comprender los requisitos de cada destino y garantizar
//               que tu mascota esté lista para su aventura. Somos un equipo humano
//               y profesional que te ofrece una gama completa de servicios, que
//               incluye asistencia veterinaria, trámites sanitarios, transporte a
//               nivel nacional e internacional, guardería, entre otros. Nuestro
//               enfoque se centra en priorizar la seguridad y el confort de las
//               mascotas y sus dueños, Nos dedicamos a brindar amor, cuidado y
//               atención a cada peludito y acompañándote en cada paso del proceso,
//               nuestro compromiso es asegurar que cada mascota llegue feliz y
//               segura a su nuevo hogar, sin importar la distancia.
//             </Typography>
//           </Grid>

//           <Grid
//             sx={{
//               padding: { xs: 1, md: 6 },
//               borderTopLeftRadius: "200px",
//               borderBottomLeftRadius: "200px",
//               borderBottomRightRadius: "-24px",
//               margin: { xs: 1, md: 0 },
//               backgroundColor: "rgba(255, 109, 0, 0.8)",
//             }}
//           >
//             <img src={garra}/>
//           </Grid>
//         </Grid>
//       </Box>
//     </div>
//   );
// };

// InformacionPrincipal.propTypes = {};

// export default InformacionPrincipal;
