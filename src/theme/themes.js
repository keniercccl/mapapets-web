import { Padding } from "@mui/icons-material";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "'Slackey', cursive", // Fuente de Google
    h1: {
      fontFamily: "'Slackey', cursive",
      fontSize: "3rem",
      color: "#FF5733",
    },
    h2: {
      fontFamily: "'Batangas', sans-serif",
      fontSize: "3rem",
      color: "#FF5733",
    },
    h3: {
      fontFamily: '"Press Start 2P", system-ui',
    },
    h4: {},
    p:{
      Padding:10
    },
    body1: {
      fontSize: "1.2rem",
      color: "#333333",
    },
  },
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#d32f2f",
    },
  },
});

export default theme;
