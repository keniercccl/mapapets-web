import React from "react";
import {
  Box,
  Grid,
  Typography,
  Divider,
  SvgIcon,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import CallIcon from "@mui/icons-material/Call";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import InstagramIcon from "@mui/icons-material/Instagram";
import CopyrightIcon from "@mui/icons-material/Copyright";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import GoogleMap from "../components/GoogleMap"; 
import logoMapapets from "../assets/logo_dos.png";

const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box sx={{ backgroundColor: "rgba(225, 114, 133,0.8)", mt: 4 }}>
      {/* Condicional para saber si es Desktop o Mobile */}
      <Grid
        container
        sx={{
          backgroundColor: isMobile
            ? "rgba(255, 255, 255, 0.9)"
            : "rgba(255, 255, 255, 0.5)",
          padding: "16px",
        }}
      >
        {/* Primera columna: Google Maps en Desktop / Se oculta en Mobile */}
        {!isMobile && (
          <Grid item xs={12} md={5} sx={{ margin: 2 }}>
            <GoogleMap
              sx={{
                width: "100%", // Abarca todo el ancho del GRid
                height: "100%", // Abarca todo el alto del grid
              }}
            />
          </Grid>
        )}

        {/* Segunda columna: Logo y contacto */}
        <Grid item xs={12} md={4}>
          {/* Logo en la parte superior */}
          <Box display="flex" justifyContent="center">
            <img
              src={logoMapapets}
              alt="Logo Mapapets"
              style={{ width: "80px", cursor: "pointer" }}
              onClick={() => (window.location.href = "/inicio")}
            />
          </Box>

          {/* Información de contacto */}
          <Box
            mt={isMobile ? 2 : 4}
            sx={{ textAlign: isMobile ? "left" : "center" }}
          >
            <Typography variant="h6">Contactanos</Typography>
            <Divider sx={{ my: 2 }} />
            <Box display="flex" alignItems="center" mb={1}>
              <CallIcon sx={{ mr: 1 }} />
              <Typography>+57 (1) 320 344 6611</Typography>
            </Box>
            <Box
              display="flex"
              alignItems="center"
              mb={1}
              onClick={() => window.open("https://wa.me/573213251713")}
            >
              <WhatsAppIcon sx={{ mr: 1 }} />
              <Typography>+57 (1) 321 325 1713</Typography>
            </Box>
            <Box
              display="flex"
              alignItems="center"
              mb={1}
              onClick={() => (window.location.href = "/contactanos")}
            >
              <EmailIcon sx={{ mr: 1 }} />
              <Typography>mapapets@hotmail.com</Typography>
            </Box>
            <Box
              display="flex"
              alignItems="center"
              mb={1}
              onClick={() =>
                window.open("https://maps.app.goo.gl/UdMnuv7GACM7qLES7")
              }
            >
              <LocationOnIcon sx={{ mr: 1 }} />
              <Typography>Calle 115 #52-43 / Bogotá DC</Typography>
            </Box>
            <Box
              display="flex"
              alignItems="center"
              onClick={() => window.open("instagram://user?username=mapa_pets")}
            >
              <InstagramIcon sx={{ mr: 1 }} />
              <Typography>@mapa_pets</Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>

      {/* Footer final con Copyright */}
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{ height: "24px", backgroundColor: "#E17285" }}
      >
        <CopyrightIcon sx={{ mr: 1 }} />
        {/* Aqui falta modificar los derechos reservados */}
        <Typography>Muchas gracias Opita</Typography>
      </Box>
    </Box>
  );
};

export default Footer;
