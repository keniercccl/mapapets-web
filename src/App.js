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
import Footer from './components/Footer'

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
          <Navbar />
          <RouterProvider router={router} />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
