import React, { useState } from "react";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Redes from "./pages/Redes";
import Inicio from "./pages/Inicio";
import NuestraHuella from "./pages/NuestraHuella";
import Servicios from "./pages/Servicios";
import Contactanos from "./pages/Contactanos";
import Navbar from "./components/Navbar";
import Fondos from "./components/Fondos";
import SplashScreen from "./components/SplashScreen";
import Footer from "./components/Footer";
import WhatsappButton from "./components/WhatsappButton";
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import theme from "./theme/themes";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Inicio />
      </>
    ),
  },
  {
    path: "/servicios",
    element: (
      <>
        <Servicios />
      </>
    ),
  },
  {
    path: "/nuestra-huella",
    element: (
      <>
        <NuestraHuella />
      </>
    ),
  },
  {
    path: "/redes",
    element: (
      <>
        <Redes />
      </>
    ),
  },
  {
    path: "/contactanos",
    element: (
      <>
        <Contactanos />
      </>
    ),
  },
  // {
  //   path: "/tips-mascoteros",
  //   element : (
  //     <>
  //     // Me falta crear este componente
  //     </>
  //   ),
  // }
]);

function App() {
  const [showSplash, setShowSplash] = useState(true);

  const handleCloseSplash = () => {
    setShowSplash(false);
  };

  return (
    <div className="App">
      {showSplash && <SplashScreen onClose={handleCloseSplash} />}
      {!showSplash && (
        <>
          <ThemeProvider theme={theme}>
            <Navbar />
            <RouterProvider router={router} />
            <Footer />
            <WhatsappButton />
          </ThemeProvider>
        </>
      )}
    </div>
  );
}

export default App;
