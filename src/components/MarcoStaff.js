import React, { useEffect, useState, useRef } from "react";
import { Box, Typography } from "@mui/material";
import PropTypes from "prop-types";

const MarcoStaff = ({ nombre, cargo, foto }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.9 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <Box
      ref={ref}
      className={`marco_staff_uno ${isVisible ? "visible" : ""}`}
      sx={{
        bgcolor: "rgba(90,24,154,0.8)",
        borderTopLeftRadius: "80px",
        borderBottomLeftRadius: "120px",
        borderBottomRightRadius: "90px",
        borderTopRightRadius: "200px",
      }}
    >
      <Box
        className="marco_staff_dos"
        sx={{
          bgcolor: "rgba(186,223,58,0.8)",
          borderTopLeftRadius: "70px",
          borderBottomLeftRadius: "70px",
          borderBottomRightRadius: "900px",
          borderTopRightRadius: "40px",
        }}
      >
        <Box className="foto_staff" sx={{ textAlign: "center", margin: 1, padding: 1 }}>
          <Box
            component="img"
            src={foto}
            alt={nombre}
            sx={{
              width: { xs: "100px", md: "150px" },
              height: { xs: "100px", md: "150px" },
              borderRadius: "50%",
              objectFit: "cover",
            }}
          />
          <Typography variant="body1" sx={{ fontWeight: "bold", marginTop: 1 }}>
            {nombre}
          </Typography>
          <Typography variant="body2" sx={{ fontFamily: "sans-serif", color: "white", fontWeight: "bold" }}>
            {cargo}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

MarcoStaff.propTypes = {
  nombre: PropTypes.string.isRequired,
  cargo: PropTypes.string.isRequired,
  foto: PropTypes.string.isRequired,
};

export default MarcoStaff;
