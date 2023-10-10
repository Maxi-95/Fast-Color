import React, { useState, useEffect } from "react";
//import { useSelector, useDispatch } from "react-redux";
//import Cartas from "../../Componentes/Cartas/Cartas";
import s from "./Landing.module.css";
import Presentacion from "../../Componentes/Landing/Presentacion/Presentacion";
// import Servicios from "../../Componentes/Landing/Nuestros servicios/Servicios";
// import TipoPintura from "../../Componentes/Landing/Tipos de Pinturas/TipoPintura";
// import TipoProductos from "../../Componentes/Landing/Uso de productos/TipoProductos";
// import Footer from "../../Componentes/Footer/Footer";

function Landing() {
  return (
    <div>
      <div>
        <Presentacion />
      </div>
    </div>
  );
}

export default Landing;
