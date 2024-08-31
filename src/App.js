import logo from './logo.svg';
import './App.css';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Redes from "./pages/Redes";
import Inicio from './pages/Inicio';
import NuestraHuella from './pages/NuestraHuella';
import Servicios from './pages/Servicios';
import Contactanos from './pages/Contactanos';

const router = createBrowserRouter([
  {
    path: "/",
    element : <Inicio />
  },
  {
    path: "/servicios",
    element : <Servicios />
  },
  {
    path: "/nuestra-huella",
    element : <NuestraHuella />
  },
  {
    path: "/redes",
    element : <Redes />
  },
  {
    path: "/contactanos",
    element : <Contactanos />
  }
]);

function App() {
  return (
    <div className="App">
      
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
