import React from "react";
import { Typography, Box, Divider, Grid } from "@mui/material";
import "../App.css";
import InformacionPrincipal from "../components/InformacionPrincipal";
import Staff from "../components/Staff"

const Inicio = () => {
  return (
    <Box
      sx={{
        padding: { xs: 6, md: 10 },
        margin: { xs: 1, md: 10 },
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        borderRadius: 3,
      }}
    >
      <Grid>
        <Box padding="40px">
          <InformacionPrincipal />
          <p className="slackey-regular">INICIO / inicio</p>
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
