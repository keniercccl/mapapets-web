import React, { useState } from "react";
import { Box, Grid, Typography, Modal, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
// import ColombiaMap from "../assets/co.svg";
import { ReactComponent as ColombiaMap } from "../assets/co.svg";

const Ubicaciones = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box
      sx={{
        padding: { xs: 2, md: 5 },
        backgroundColor: "rgba(255, 255, 255)",
        borderRadius: 3,
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography
            variant="h4"
            sx={{ textAlign: "center", marginBottom: 2, fontWeight: "bold" }}
          >
            Llegamos a toda Colombia
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              cursor: "pointer",
            }}
            onClick={handleOpen}
          >
            <ColombiaMap style={{ width: "60%", height: "auto" }} />
          </Box>
        </Grid>

        <Grid item xs={12}>
          <Typography variant="h6" sx={{ textAlign: "center", fontWeight: "bold" }}>
            Ciudades
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <ul>
                <li>Arauca</li>
                <li>Armenia</li>
                <li>Barranquilla</li>
                <li>Bogota</li>
                <li>Boyaca</li>
                <li>Bucaramanga</li>
                <li>Cali</li>
                <li>Cartagena</li>
                <li>Ibague</li>
              </ul>
            </Grid>
            <Grid item xs={12} md={6}>
              <ul>
                <li>Montería</li>
                <li>Huila</li>
                <li>Ocaña</li>
                <li>Pamplona</li>
                <li>Pasto</li>
                <li>Pereira</li>
                <li>Valledupar</li>
                <li>Villavicencio</li>
                <li>yopal</li>
              </ul>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "background.paper",
            boxShadow: 24,
            borderRadius: 2,
            p: 2,
            maxWidth: "90%",
            maxHeight: "90%",
          }}
        >
          <IconButton
            onClick={handleClose}
            sx={{
              position: "absolute",
              top: 8,
              right: 8,
            }}
          >
            <CloseIcon />
          </IconButton>
          <ColombiaMap style={{ width: "100%", height: "auto" }} />
        </Box>
      </Modal>
    </Box>
  );
};

export default Ubicaciones;
