import React from "react";
import { Box, Modal, CircularProgress, Typography } from "@mui/material";

const ModalLoading = ({ open, text }) => {
  return (
    <Modal
      open={open}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "white",
          padding: 4,
          borderRadius: 2,
          boxShadow: 24,
        }}
      >
        <CircularProgress />
        <Typography variant="h6" sx={{ marginTop: 2 }}>
          {text}
        </Typography>
      </Box>
    </Modal>
  );
};

export default ModalLoading;
