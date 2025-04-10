import { Padding } from "@mui/icons-material";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: '"Quicksand", serif',
    h1: {
      fontFamily: '"Quicksand", serif',
      fontSize: "48px",
      color: "orange",
      fontWeight: 'bold'
    },
    h2: {
      fontFamily: '"Quicksand", serif',
      fontSize: "24px",
      color: "#333333",
    },
    h3: {
      fontFamily: '"Quicksand", serif',
      fontSize: "18px",
    },
    h4: {
      fontFamily: '"Bricolage Grotesque", sans-serif',
      fontSize: '16px'
    },
    p: {
      Padding: 10,
      fontFamily: '"Bricolage Grotesque", sans-serif',
    },
    body1: {
      fontSize: "1.2rem",
      color: "#333333",
    },
    menuFont: {
      fontFamily: '"Quicksand", serif',
      fontSize: "32px",
      color: "#333333",
    }
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
