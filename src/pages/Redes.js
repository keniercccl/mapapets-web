import React from "react";
import Navbar from "../components/Navbar";
import { InstagramEmbed } from "react-social-media-embed";

import { Box, Grid, Typography } from "@mui/material";

const Redes = () => {
  return (
    <Box
      sx={{
        padding: { xs: 6, md: 10 },
        margin: { xs: 1, md: 10 },
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        borderRadius: 3,
      }}
    >
      <div>
        <Typography variant= 'h1'>
        Nuestras Redes
        </Typography>
        <Typography variant= 'h2'>
        Nuestras Redes
        </Typography>
        <Typography variant= 'h3'>
        Nuestras Redes
        </Typography>
        <Typography variant= 'h4'>
        Nuestras Redes
        </Typography>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <InstagramEmbed
            url="https://www.instagram.com/mapa_pets/"
            width={328}
          />
        </div>
      </div>
    </Box>
  );
};

export default Redes;
