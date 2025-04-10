import React from "react";
import { Typography, Box, Divider, Grid } from "@mui/material";
import "../App.css";
import InformacionPrincipal from "../components/InformacionPrincipal";
import Staff from "../components/Staff"

const Inicio = () => {
  return (
    <Box
      sx={{
        padding: { xs: 1, md: 10 },
        margin: { xs: 2, md: 10 },
        backgroundColor: "rgba(255, 255, 255)",
        backgroundImage: "../assets/fondo_blanco.png",
        borderRadius: 3,
        boxShadow: 24,
      }}
    >
      <Grid>
        <Box padding="20px">
          <InformacionPrincipal />
        </Box>
        <Box>
          <Divider />
        </Box>
        <Box>
          <Staff />
        </Box>
      </Grid>
    </Box>
  );
};

export default Inicio;
