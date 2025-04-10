import React from "react";
import { InstagramEmbed } from "react-social-media-embed";

import { Box, Grid, Typography } from "@mui/material";

const Redes = () => {
  return (
    <Box
      sx={{
        padding: { xs: 6, md: 10 },
        margin: { xs: 2, md: 10 },
        backgroundColor: "rgba(255, 255, 255)",
        borderRadius: 3,
        boxShadow: 24
      }}
    >
      <div>
        <Typography variant="h2"
          gutterBottom
          padding={3}
          sx={{ padding: "10px", color: "purple", fontWeight: "bold" }}>
          Nuestras Redes
        </Typography>

        <div style={{ display: "block", justifyContent: "center" }}>
          <InstagramEmbed
            url="https://www.instagram.com/mapa_pets/"
            

            width="100%"
          />
        </div>
        {/* <div style={{ display: 'flex', justifyContent: 'center' }}>
          <TikTokEmbed url="https://www.tiktok.com/@mapa_pets" width={800} />
        </div> */}
      </div>
    </Box>
  );
};

export default Redes;
