import React from "react";
import {
  Box,
  Grid,
  Typography,
  Divider,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import CallIcon from "@mui/icons-material/Call";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import InstagramIcon from "@mui/icons-material/Instagram";
import CopyrightIcon from "@mui/icons-material/Copyright";
import GoogleMap from "../components/GoogleMap";
import logoMapapets from "../assets/mapapets_isotipo.png";

const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box sx={{ backgroundColor: "orange", mt: 4 }}> {/* Contenedor principal con fondo naranja y margen superior */}
      <Grid
        container
        sx={{
          backgroundColor: isMobile
            ? "rgba(255, 255, 255, 0.9)"
            : "rgba(255, 255, 255, 0.9)", // Fondo blanco con diferente opacidad según el tamaño de la pantalla
          padding: "16px",
    
        }}
      >
        {!isMobile && ( // Si no es un dispositivo móvil, muestra el mapa
          <Grid item xs={12} md={6} sx={{ margin: "auto" }}> {/* Sección del mapa */}
            <GoogleMap
              sx={{
                width: "100%",
                height: "100%",
              }}
            />
          </Grid>
        )}

        <Grid item xs={12} md={6}> {/* Sección de contacto */}
          <Box display="flex" justifyContent="center" alignItems="center" margin="auto"> {/* Contenedor del logo */}
            <img
              src={logoMapapets}
              alt="Logo Mapapets"
              style={{ width: "80px", cursor: "pointer" }}
              onClick={() => (window.location.href = "/inicio")} // Redirecciona a la página de inicio al hacer clic
            />
          </Box>
          <Box alignItems="center"
            mt={isMobile ? 2 : 4}
            sx={{ textAlign: isMobile ? "center" : "center" }}
          >
            <Typography variant="h6">Contactanos</Typography> {/* Título de la sección */}
            <Divider sx={{ my: 2 }} /> {/* Línea divisoria */}
            <Box display="flex" alignItems="center" mb={1}> {/* Sección del teléfono */}
              <CallIcon sx={{ mr: 1 }} />
              <Typography>+57 (1) 320 344 6611</Typography>
            </Box>
            <Box
              display="flex"
              alignItems="center"
              mb={1}
              onClick={() => window.open("https://wa.me/573213251713")} // Abre WhatsApp al hacer clic
            >
              <WhatsAppIcon sx={{ mr: 1 }} />
              <Typography>+57 (1) 321 325 1713</Typography>
            </Box>
            <Box
              display="flex"
              alignItems="center"
              mb={1}
              onClick={() => (window.location.href = "/contactanos")} // Redirecciona a la página de contacto
            >
              <EmailIcon sx={{ mr: 1 }} />
              <Typography>mapapets@hotmail.com</Typography>
            </Box>
            <Box
              display="flex"
              alignItems="center"
              mb={1}
              onClick={() =>
                window.open("https://maps.app.goo.gl/UdMnuv7GACM7qLES7") // Abre Google Maps con la ubicación
              }
            >
              <LocationOnIcon sx={{ mr: 1 }} />
              <Typography>Calle 115 #52-43 / Bogotá DC</Typography>
            </Box>
            <Box
              display="flex"
              alignItems="center"
              onClick={() => window.open("instagram://user?username=mapa_pets")} // Abre el perfil de Instagram
            >
              <InstagramIcon sx={{ mr: 1 }} />
              <Typography>@mapa_pets</Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>

      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{ height: "24px", backgroundColor: "#75b7a9" }} // Sección de copyright
      >
        <CopyrightIcon sx={{ mr: 1 }} />
        <Typography>2025 Mapapets</Typography>
      </Box>
    </Box>
  );
};

export default Footer; // Exporta el componente Footer
