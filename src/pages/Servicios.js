import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import servicio_uno from "../assets/servicio_uno.jpg";
import servicio_dos from "../assets/servicio_dos.jpg";
import MapChart from "../components/MapChart";

const Servicios = () => {
  return (
    <Box
      sx={{
        padding: { xs: 6, md: 10 },
        margin: { xs: 1, md: 10 },
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        borderRadius: 3,
      }}
    >
      <Typography
        variant="h2"
        gutterBottom
        padding={3}
        sx={{ padding: "10px", color: "purple" }}
      >
        Servicios
      </Typography>
      <Grid
        container
        spacing={4}
        sx={{
          padding: { xs: "10px", md: "20px" }, 
        }}
      >
        {/* Primer Servicio */}
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <img
            src={servicio_uno}
            alt="Servicio 1"
            style={{
              width: "60%",
              height: "auto",
              objectFit: "cover",
            }}
          />
          <Typography
            variant="body1"
            sx={{
              textAlign: "center",
              paddingTop: { xs: "16px", sm: "16px", md: "0" },
            }}
          >
            <br />- Descripción del servicio 1.
            <br />- Puntos detallados del servicio 1.
            <br /> - Otra característica del servicio 1.
          </Typography>
        </Grid>

        {/* Segundo Servicio */}
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <img
            src={servicio_dos}
            alt="Servicio 2"
            style={{
              width: "60%",
              height: "auto",
              objectFit: "cover", 
            }}
          />
          <Typography
            variant="body1"
            sx={{
              textAlign: "center",
              paddingTop: { xs: "16px", sm: "16px", md: "0" },
            }}
          >
            <br />- Descripción del servicio 2.
            <br />- Puntos detallados del servicio 2.
            <br />- Otra característica del servicio 2.
          </Typography>
        </Grid>

        {/* Último Servicio */}
        <Grid item xs={12}>
          <Typography
            variant="h4"
            sx={{
              textAlign: "center",
              paddingBottom: "20px",
            }}
          >
            Contamos con médicos veterinarios en ciudades como:
          </Typography>
          <Grid
            container
            spacing={4}
            sx={{
              justifyContent: "space-around",
            }}
          >
            <Grid item xs={6} sm={6} md={3}>
              <Typography
                variant="body1"
                sx={{
                  textAlign: "left",
                }}
              >
                - Bogotá
                <br />- Bucaramanga
                <br />- Cali
                <br />- Barranquilla
              </Typography>
            </Grid>
            <Grid item xs={6} sm={6} md={3}>
              <Typography
                variant="body1"
                sx={{
                  textAlign: "left",
                }}
              >
                - Medellín
                <br />- Neiva
                <br />- Ibagué
                <br />- Sogamoso
              </Typography>
              {/* <MapChart /> */}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Servicios;
