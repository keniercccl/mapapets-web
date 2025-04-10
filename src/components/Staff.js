import React, { useState, useEffect } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import MarcoStaff from './MarcoStaff';

const FLICKR_API_KEY = process.env.REACT_APP_FLICKR_API_KEY; // Clave de API desde variables de entorno
const FLICKR_TAG = "staff_mapapets"; // Tag para la búsqueda en Flickr

const Staff = () => {
  const [staff, setStaff] = useState([]);

  useEffect(() => {
    const fetchStaffImages = async () => {
      try {
        const response = await fetch(
          `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${FLICKR_API_KEY}&tags=${FLICKR_TAG}&extras=description&format=json&nojsoncallback=1`
        );
        const data = await response.json();
        console.log(data);

        let staffMembers = data.photos.photo.map(photo => ({
          nombre: photo.title || "Sin Nombre",
          cargo: photo.description?._content || "Descripción no disponible",
          foto: `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_m.jpg`
        }));

        // Ordenar alfabéticamente por nombre
        staffMembers.sort((a, b) => a.nombre.localeCompare(b.nombre));

        setStaff(staffMembers);
      } catch (error) {
        console.error("Error fetching staff images from Flickr:", error);
      }
    };

    fetchStaffImages();
  }, []);

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant='h2' sx={{ textDecorationLine: "underline" }}>Nuestro Staff</Typography>
      <Grid container spacing={3} justifyContent="center">
        {staff.map((member, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <MarcoStaff nombre={member.nombre} cargo={member.cargo} foto={member.foto} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Staff;
