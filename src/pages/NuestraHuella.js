import React, { useState, useEffect } from "react";
import { Grid, Box } from "@mui/material";
import CardNuestraHuella from "../components/CardNuestraHuella";
import ModalNuestraHuella from "../components/ModalNuestraHuella";
import huellasPorElMundo from "../data/huellasPorElMundo.json";

const NuestraHuella = () => {
  const [selectedHuella, setSelectedHuella] = useState(null);
  const [open, setOpen] = useState(false);

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
      margin: { xs: 1, md: 10 },
      backgroundColor: "rgba(255, 255, 255, 0.8)",
      borderRadius: 3,
    }}>
      <Box sx={{ margin: "10px" }}>
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
      </Box>
    </Box>
  );
};

export default NuestraHuella;
