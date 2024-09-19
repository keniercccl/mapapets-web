import React from "react";
import Navbar from "../components/Navbar";
import { InstagramEmbed } from 'react-social-media-embed';

const Redes = () => {
  return ( 
    <div>
      <h1>nuestras redes</h1>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <InstagramEmbed
          url="https://www.instagram.com/mapa_pets/"
          width={328}
        />
      </div>
    </div>
  );
};

export default Redes;
