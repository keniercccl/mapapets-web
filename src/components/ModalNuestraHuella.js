import React from "react";
import { Modal, Box, Typography, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Height } from "@mui/icons-material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4
};

const ModalNuestraHuella = ({
  open,
  handleClose,
  fotoMascota,
  nombreMascota,
  resena,
}) => {
  return (
    <>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <IconButton
            onClick={handleClose}
            sx={{
              position: "absolute",
              top: "10px",
              right: "10px",
              color: "green",
              alignContent: "left"
            }}
          >
            <CloseIcon color="secondary"/>
          </IconButton>
          <img
            src={fotoMascota}
            alt={nombreMascota}
            style={{ width: "90%", margin: "0 0 0 0" }}
          />
          <Typography id="modal-modal-title" variant="h6" align="center">
            {nombreMascota}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {resena}
          </Typography>
        </Box>
      </Modal>
    </>
  );
};

export default ModalNuestraHuella;
