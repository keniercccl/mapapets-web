import React, { useState } from "react";
import '../App.css'

const GoogleMap = () => {
  const [markerLocation, setMarkerLocation] = useState({
    lat: 4.70102,
    lng: -74.06169,
  });

  return (
    <div className="map-container">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15905.611764506546!2d-74.0617966!3d4.6998534!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9b2e7019678b%3A0x9fe37c2fc2d2fabf!2sMapapets!5e0!3m2!1ses-419!2scl!4v1726068366772!5m2!1ses-419!2scl"
        width="80%"
        height="80%"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Responsive Google Map"
        padding = "1"
      ></iframe>

      {/* <Map
        style={{ borderRadius: "20px" }}
        defaultZoom={13}
        defaultCenter={markerLocation}
        gestureHandling={"greedy"}
        disableDefaultUI
      >
        <Marker position={markerLocation} />
      </Map> */}
    </div>
  );
};

export default GoogleMap;
