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
import emailjs from "@emailjs/browser";
import CountrySelector from "../components/CountrySelector";
import ModalLoading from "../components/modalLoading";
import ModalMailEnviado from "../components/modalMailEnviado";

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

  const [errors, setErrors] = useState({
    email: "",
    telefono: "",
  });

  const [loading, setLoading] = useState(false);
  const [emailSent, setEmailSent] = useState(false);

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const validateTelefono = (telefono) => {
    const telefonoRegex = /^\d{1,20}$/;
    return telefonoRegex.test(telefono);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setForm((prevForm) => ({
      ...prevForm,
      [name]: type === "checkbox" ? checked : value,
    }));

    if (name === "email") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: validateEmail(value) ? "" : "Correo inválido",
      }));
    }

    if (name === "telefono") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        telefono: validateTelefono(value)
          ? ""
          : "Solo números, máximo 20 dígitos",
      }));
    }
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
      validateEmail(form.email) &&
      validateTelefono(form.telefono) &&
      form.pais &&
      form.mensaje &&
      form.acepto
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isFormValid()) {
      setLoading(true);

      try {
        console.log(process.env.REACT_APP_EMAILJS_SERVICE_ID)
        console.log(process.env.REACT_APP_EMAILJS_TEMPLATE_ID)
        console.log(process.env.REACT_APP_EMAILJS_PUBLIC_KEY)
        console.log(process.env.REACT_APP_EMAILJS_PUBLIC_KEY)
        await emailjs.send(
          process.env.REACT_APP_EMAILJS_SERVICE_ID,
          process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
          {
            name: form.nombre,
            message: form.mensaje,
            last_name: form.apellido,
            country: form.pais,
            phoneNumber: form.telefono,
            emailAddress: form.email,
            reply_to: process.env.REACT_APP_EMAILJS_REPLY_TO,
          },
          { publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY }
        );

        setLoading(false);
        setEmailSent(true);
      } catch (error) {
        setLoading(false);
        console.error("Error al enviar el correo:", error);
      }
    }
  };

  const handleCloseModal = () => {
    setEmailSent(false);
    window.location.reload(); // Recargar la página
  };

  return (
    <Box
      sx={{
        padding: { xs: 6, md: 10 },
        margin: { xs: 2, md: 10 },
        backgroundColor: "rgba(255, 255, 255)",
        borderRadius: 3,
        boxShadow: 24
      }}
    >
      <Typography
        variant="h2"
        gutterBottom
        padding={3}
        sx={{ padding: "10px", color: "purple", fontWeight: "bold" }}
      >
        Contáctanos
      </Typography>
      <Box component="form" noValidate autoComplete="off">
        <Grid container spacing={2}>
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
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Email"
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              error={!!errors.email}
              helperText={errors.email}
              required
            />
          </Grid>
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
                  error={!!errors.telefono}
                  helperText={errors.telefono}
                  required
                />
              </Grid>
            </Grid>
          </Grid>
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
          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Checkbox
                  name="acepto"
                  checked={form.acepto}
                  onChange={handleChange}
                />
              }
              label="De conformidad con lo previsto en la Ley 1581 de 2012 “, Decreto 1377 de 2013 autorizo a MAPAPETS de manera expresa e inequívoca para mantener y manejar la información suministrada, solo para aquellas finalidades para las que se encuentra facultado y respetando en todo caso, la normatividad vigente sobre protección de datos personales."
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

      {/* Modales */}
      <ModalLoading open={loading} text="Enviando..." />
      <ModalMailEnviado
        open={emailSent}
        text="Correo Enviado"
        onClose={handleCloseModal}
      />
    </Box>
  );
};

export default Contactanos;
