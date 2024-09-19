import React from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import '../App.css'

const CardNuestraHuella = ({ HuellaImagen, tituloImagen, resenaImagen, onCardClick }) => {
  return (
    <Card className='CardType' onClick={onCardClick} sx={{ maxWidth: 345 ,backgroundColor: 'rgba(255, 255, 255, 0.4)', borderRadius: 3 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={HuellaImagen}
          alt={tituloImagen}
        />
        <CardContent
          sx={{
            backgroundColor: 'rgba(255, 255, 255, 0.4)', 
            borderRadius : 3
          }}
        >
          <Typography gutterBottom variant="h5" component="div">
            {tituloImagen}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              display: '-webkit-box',
              WebkitLineClamp: 3,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
            }}
          >
            {resenaImagen}...
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CardNuestraHuella;