import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  FormControlLabel,
  Checkbox,
  Grid,
  Typography,
} from "@mui/material";
import emailjs from '@emailjs/browser';
import CountrySelector from "../components/CountrySelector";
import '../App.css'

const Contactanos = () => {
  const [form, setForm] = useState({
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    pais: null,
    mensaje: "",
    acepto: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      console.log("Formulario enviado:", form);

      emailjs.send("service_token","template_ndku4po",{
        name: form.nombre,
        message: form.mensaje,
        last_name: form.apellido,
        country: form.pais,
        phoneNumber: form.telefono,
        emailAddress: form.email,
        reply_to: "mapapets@hotmail.com"
        },{publicKey: "_XX"});
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleCountryChange = (newValue) => {
    setForm((prevForm) => ({
      ...prevForm,
      pais: newValue,
    }));
  };

  const isFormValid = () => {
    return (
      form.nombre &&
      form.apellido &&
      form.email &&
      form.telefono &&
      form.pais &&
      form.mensaje &&
      form.acepto
    );
  };

  return (
    <Box
      sx={{
        padding: { xs: 6, md: 10 },
        margin: { xs: 1, md: 10 },
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        borderRadius: 3,
      }}
    >
      <h2 className="slackey-regular" color='green' > Contáctanos</h2>
      <Typography className="slackey-regular"
        variant="h2"
        gutterBottom
        sx={{ fontFamily: "cursive", padding: "10px", color: "purple", fontSize: '32px' }}
      >
        Contáctanos
      </Typography>
      <Box component="form" noValidate autoComplete="off">
        <Grid container spacing={2}>
          {/* Nombre y Apellido */}
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Nombre"
              name="nombre"
              value={form.nombre}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Apellido"
              name="apellido"
              value={form.apellido}
              onChange={handleChange}
              required
            />
          </Grid>

          {/* Email */}
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Email"
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </Grid>

          {/* País y Teléfono */}
          <Grid item xs={12} sm={6}>
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={12} sm={4}>
                <CountrySelector
                  value={form.pais}
                  onChange={handleCountryChange}
                />
              </Grid>
              <Grid item xs={12} sm={8}>
                <TextField
                  fullWidth
                  label="Teléfono"
                  name="telefono"
                  value={form.telefono}
                  onChange={handleChange}
                  required
                />
              </Grid>
            </Grid>
          </Grid>

          {/* Mensaje */}
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Mensaje"
              name="mensaje"
              value={form.mensaje}
              onChange={handleChange}
              multiline
              rows={4}
              required
            />
          </Grid>

          {/* Checkbox y Botón Enviar */}
          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Checkbox
                  name="acepto"
                  checked={form.acepto}
                  onChange={handleChange}
                />
              }
              label={
                <Typography variant="body2" sx={{ fontFamily: "Quicksand" }}>
                  De conformidad con lo previsto en la Ley 1581 de 2012 “,
                  Decreto 1377 de 2013 autorizo a MAPAPETS de manera expresa e
                  inequívoca para mantener y manejar la información
                  suministrada, solo para aquellas finalidades para las que se
                  encuentra facultado y respetando en todo caso, la normatividad
                  vigente sobre protección de datos personales.
                </Typography>
              }
            />
          </Grid>
          <Grid item xs={12}>
            <Button
            onClick={handleSubmit}
              variant="contained"
              color="primary"
              sx={{
                backgroundColor: "#BADF3A",
                color: "#E17285",
                fontWeight: "bold", 
                "&:hover": {
                  backgroundColor: "#E17285",
                  color: "#BADF3A",
                },
              }}
              disabled={!isFormValid()}
            >
              Enviar
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Contactanos;
