import React, { useEffect, useState } from "react";
import { Box, useTheme, useMediaQuery } from "@mui/material";
import { BrokenImage } from "@mui/icons-material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";

const CarruselHuellas = () => {
  // Estado para almacenar las imágenes obtenidas de Flickr
  const [images, setImages] = useState([]);

  // Clave de API almacenada en variables de entorno
  const apiKey = process.env.REACT_APP_FLICKR_API_KEY;

  // Etiqueta para buscar imágenes en Flick
  const tag = "mapapetsprueba1";

  // Obtiene el tema de Material UI para detectar el modo responsive
  const theme = useTheme();
  // Determina si el dispositivo es de escritorio o móvil
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  // Efecto para obtener imágenes de Flickr cuando el componente se monta
  useEffect(() => {
    const fetchImages = async () => {
      try {
        // Llamado a la API de Flickr para obtener imágenes con la etiqueta definida
        const response = await axios.get(
          `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${tag}&per_page=15&format=json&nojsoncallback=1`
        );

        // Muestra la respuesta de la API en la consola para depuración
        console.log("Flickr Response:", response.data);

        // Extrae las URLs de las imágenes de la respuesta de la API
        const fetchedImages = response.data.photos?.photo?.map((photo) => (
          `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_w.jpg`
        )) || [];

        // Almacena las imágenes en el estado
        setImages(fetchedImages);
        console.log("Fetched Images:", fetchedImages);
      } catch (error) {
        console.error("Error fetching images from Flickr:", error);
      }
    };

    fetchImages();
  }, [apiKey]);

  // Efecto para disparar un evento resize al cargar imágenes y evitar problemas de tamaño en el carrusel
  useEffect(() => {
    if (images.length > 0) {
      setTimeout(() => {
        window.dispatchEvent(new Event("resize"));
      }, 500);
    }
  }, [images]);

  // Configuración del carrusel (Slider)
  const settings = {
    dots: true, // Muestra los indicadores de navegación
    infinite: true, // Permite desplazamiento infinito
    speed: 500, // Velocidad de transición
    slidesToShow: 1, // Número de imágenes visibles a la vez
    slidesToScroll: 1, // Número de imágenes a desplazar por transición
    autoplay: true, // Habilita la reproducción automática
    autoplaySpeed: 3000, // Tiempo entre transiciones automáticas (ms)
    lazyLoad: "ondemand", // Carga diferida de imágenes
    arrows: true, // Muestra los botones de navegación
    swipe: true, // Permite deslizar en dispositivos móviles
  };

  return (
    <Box
      sx={{
        width: isDesktop ? "100%" : "100%", // Ancho adaptativo para escritorio y móvil
        maxWidth: "900px", // Evita que el carrusel se expanda demasiado
        height: isDesktop ? "100%" : "100%", // Altura diferente según el dispositivo
        margin: "auto", // Centra el carrusel
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden", // Evita desbordes
      }}
    >
      <Box sx={{ width: "100%" }}>
        <Slider {...settings}>
          {images.length > 0 ? (
            images.map((src, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  alignItems: "center", // Centra verticalmente
                  justifyContent: "center", // Centra horizontalmente
                  height: isDesktop ? "100%" : "100%", // Ocupa todo el alto del contenedor
                  width: isDesktop ? "100%" : "100%", // Asegura que no desborde
                  overflow: "hidden", // Evita que la imagen se desborde
                }}
              >
                <Box
                  component="img"
                  src={src}
                  alt={`Imagen ${index + 1}`}
                  sx={{
                    margin: "auto", // Centra la imagen
                    maxHeight: "100%", // Evita que la imagen sobrepase la altura del contenedor
                    maxWidth: "100%", // Evita que la imagen sobrepase el ancho del contenedor
                    width: "auto", // Mantiene la proporción ajustando el ancho
                    height: "auto", // Mantiene la proporción ajustando la altura
                    objectFit: "contain", // Asegura que la imagen se mantenga dentro del espacio sin recortarse
                  }}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "";
                    e.target.replaceWith(<BrokenImage fontSize="large" />);
                  }}
                />
              </Box>


            ))
          ) : (
            <BrokenImage fontSize="large" /> // Ícono de error si no hay imágenes
          )}
        </Slider>
      </Box>
    </Box>
  );
};

export default CarruselHuellas;
