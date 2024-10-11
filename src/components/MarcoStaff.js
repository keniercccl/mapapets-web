import React from "react";
import { Box, Typography } from "@mui/material";
import PropTypes from "prop-types";

const MarcoStaff = ({ nombre, cargo, foto }) => {
  return (
    <Box
      sx={{
        bgcolor: "rgba(32, 138, 3, 0.8)",
        borderTopLeftRadius: "80px",
        borderBottomLeftRadius: "120px",
        borderBottomRightRadius: "20px",
        borderTopRightRadius: "200px",
      }}
    >
      <Box
        sx={{
          bgcolor: "rgba(138, 44, 3, 0.7)",
          borderTopLeftRadius: "20px",
          borderBottomLeftRadius: "30px",
          borderBottomRightRadius: "900px",
          borderTopRightRadius: "10px",
        }}
      >
        <Box sx={{ textAlign: "center", margin: 2, padding: 2 }}>
          <Box
            component="img"
            src={foto}
            alt={`${nombre} - ${cargo}`}
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
          <Typography variant="body2" sx={{ fontFamily: "sans-serif" }}>
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
