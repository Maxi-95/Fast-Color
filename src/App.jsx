//import Landing from "../src/View/Landing/Landing";
//import { Route, Routes } from "react-router-dom";
import Navbar from "./Componentes/Navegador/Navbar";
// import Productos from "./View/Productos/Productos";
// import Nosotros from "./View/Quienes Somos/Nosotros";
// import Sucursales from "./View/Sucursales/Sucursales";
// import Contacto from "./View/Contacto/Contacto";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      {/* <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/sucursales" element={<Sucursales />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes> */}
    </div>
  );
}

export default App;
