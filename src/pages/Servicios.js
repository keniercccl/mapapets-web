import React, { useState, useEffect } from "react";
import { Box, Grid, Typography, Card, CardContent, CardMedia, Button } from "@mui/material";
import ModalServicios from "../components/ModalServicios";
import Ubicaciones from "../components/Ubicaciones";

const FLICKR_API_KEY = process.env.REACT_APP_FLICKR_API_KEY;
const FLICKR_TAG = "icono_servicios";

const Servicios = () => {
  const [open, setOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [flickrData, setFlickrData] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch(
          `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${FLICKR_API_KEY}&tags=${FLICKR_TAG}&extras=description&format=json&nojsoncallback=1`
        );
        const data = await response.json();

        const imagesData = await Promise.all(
          data.photos.photo.map(async (photo) => {
            const imageUrl = `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_m.jpg`;

            const commentsResponse = await fetch(
              `https://api.flickr.com/services/rest/?method=flickr.photos.comments.getList&api_key=${FLICKR_API_KEY}&photo_id=${photo.id}&format=json&nojsoncallback=1`
            );
            const commentsData = await commentsResponse.json();
            const comments = commentsData.comments?.comment?.map((c) => c._content) || [];

            return {
              title: photo.title,
              imageUrl,
              description: photo.description._content || "Sin descripción"
            };
          })
        );

        imagesData.sort((a, b) => a.title.localeCompare(b.title));
        setFlickrData(imagesData);
      } catch (error) {
        console.error("Error fetching images from Flickr:", error);
      }
    };

    fetchImages();
  }, []);

  const handleOpen = (service) => {
    setSelectedService(service);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedService(null);
  };

  return (
    <Box
      sx={{
        padding: { xs: 6, md: 10 },
        margin: { xs: 2, md: 10 },
        backgroundColor: "rgba(255, 255, 255)",
        borderRadius: 3,
        boxShadow: 24,
        display: "flex",
                flexDirection: "column",
                alignItems: "center",
      }}
    >
      <Typography
        variant="h3"
        gutterBottom
        padding={3}
        sx={{ padding: "10px", color: "purple", fontWeight: "bold" }}
      >
        Servicios
      </Typography>

      <Grid container spacing={4} sx={{ padding: { xs: "10px", md: "20px" } }}>
        {flickrData.map((service, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                height: 350, // Altura definida para que todos los elementos sean visibles
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-between", // Distribuye los elementos de manera uniforme
                textAlign: "center",
                padding: 2,
                maxWidth: 300,
                boxShadow: 3, // Agrega una sombra ligera para mejorar la apariencia
              }}
            >
              <CardContent sx={{ width: "100%", flexGrow: 1, display: "flex", flexDirection: "column", alignItems: "center" }}>
                <Typography variant="h5" sx={{ fontWeight: "bold", marginBottom: 1 }}>
                  {service.description}
                </Typography>
                <CardMedia
                  component="img"
                  image={service.imageUrl}
                  alt={`Servicio ${index + 1}`}
                  sx={{
                    width: 100,
                    height: 100,
                    objectFit: "contain",
                    marginBottom: 2,
                  }}
                />
                <Button variant="contained" color="primary" sx={{ marginTop: "auto" }} onClick={() => handleOpen(service)}>
                  Leer más
                </Button>
              </CardContent>
            </Card>

          </Grid>
        ))}
      </Grid>
      {selectedService && (
        <ModalServicios
          open={open}
          handleClose={handleClose}
          servicio={selectedService}
          imageUrl={selectedService.imageUrl}
        />
      )}
  <Ubicaciones />
    </Box>
  );
};

export default Servicios;
