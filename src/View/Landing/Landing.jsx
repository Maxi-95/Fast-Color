import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import s from "./Landing.module.css";
import Presentacion from "../../Componentes/Landing/Presentacion/Presentacion";
import Servicios from "../../Componentes/Landing/Nuetros servicios/Servicios";
import TipoPintura from "../../Componentes/Landing/Tipo de pintura/TipoPintura";
import TipoProductos from "../../Componentes/Landing/Uso de productos/TipoProductos";
import Footer from "../../Componentes/Footer/Footer";

function Landing() {
  return (
    <div>
      {/* <a
        href="https://web.whatsapp.com/send?phone=351 2521579"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://static.vecteezy.com/system/resources/previews/023/986/589/non_2x/whatsapp-logo-whatsapp-logo-transparent-whatsapp-icon-transparent-free-free-png.png"
          alt="WhatsApp"
          className={s.whatsapp}
        />
      </a> */}
      <div>
        <Presentacion />
        <Servicios />
        <TipoProductos />
        <TipoPintura />
        <Footer />
      </div>
    </div>
  );
}

export default Landing;
