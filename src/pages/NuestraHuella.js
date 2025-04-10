import React, { useState } from "react";
import { Grid, Box, Typography, Divider, useTheme, useMediaQuery } from "@mui/material";
import CardNuestraHuella from "../components/CardNuestraHuella";
import ModalNuestraHuella from "../components/ModalNuestraHuella";
import huellasPorElMundo from "../data/huellasPorElMundo.json";
import CarruselHuellas from "../components/CarruselHuellas";

const NuestraHuella = () => {
  const [selectedHuella, setSelectedHuella] = useState(null);
  const [open, setOpen] = useState(false);
  
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  const handleOpen = (huella) => {
    setSelectedHuella(huella);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedHuella(null);
  };

  return (
    <Box sx={{
      padding: { xs: 6, md: 10 },
      margin: { xs: 2, md: 10 },
      backgroundColor: "rgba(255, 255, 255)",
      borderRadius: 3,
      boxShadow: 24,
    }}>
      <Typography variant="h2"
        gutterBottom
        padding={3}
        sx={{ padding: "10px", color: "purple", fontWeight: "bold" }}>
        Nuestra Huella
      </Typography>


      {/* <Box sx={{ margin: "10px" }}>
        <Grid container spacing={2}>
          {huellasPorElMundo
            .filter((huella) => huella.estado === "activo")
            .map((huella) => (
              <Grid item xs={12} sm={6} md={4} key={huella.nombreMascota}>
                <CardNuestraHuella
                  HuellaImagen={huella.fotoMascota}
                  tituloImagen={huella.nombreMascota}
                  resenaImagen={huella.resena}
                  onCardClick={() => handleOpen(huella)}
                />
              </Grid>
            ))}
        </Grid>
        {selectedHuella && (
          <ModalNuestraHuella
            open={open}
            handleClose={handleClose}
            fotoMascota={selectedHuella.fotoMascota}
            nombreMascota={selectedHuella.nombreMascota}
            resena={selectedHuella.resena}
          />
        )}
      </Box> */}




      <Divider />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: isDesktop ? "100%" : "100%",
          height: isDesktop ? "100%" : "100%",
          margin: "2px",
          marginTop: 1,
        }}
      >
        <CarruselHuellas />
      </Box>
    </Box>
  );
};

export default NuestraHuella;
