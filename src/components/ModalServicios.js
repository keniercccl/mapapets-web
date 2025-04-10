import React from "react";
import { Modal, Box, Typography, Button } from "@mui/material";

const ModalServicios = ({ open, handleClose, servicio, imageUrl }) => {
  if (!servicio) return null;

  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: { xs: "90%", md: "60%" },
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
          borderRadius: 3,
          outline: "none",
        }}
      >
        <Button
          onClick={handleClose}
          sx={{
            position: "absolute",
            top: 10,
            right: 10,
            fontSize: "1.2rem",
            fontWeight: "bold",
            color: "gray",
          }}
        >
          X
        </Button>

        <Typography variant="h2" sx={{ fontWeight: "bold", textAlign: "center", color: "purple", mb: 2 }}>
          {servicio.title}
        </Typography>
        <Box
          component="img"
          src={imageUrl}
          alt={servicio.title}
          sx={{
            width: "100%",
            height: "400px",
            objectFit: "contain",
            borderRadius: 2,
            mb: 2,
          }}
        />

        <Box component="ul" sx={{ pl: 3 }}>
          {(Array.isArray(servicio.description) ? servicio.description : [servicio.description]).map((item, index) => (
            <Typography key={index} component="li" variant="h4" sx={{ mb: 1 }}>
              {item}
            </Typography>
          ))}
        </Box>
      </Box>
    </Modal>
  );
};

export default ModalServicios;
