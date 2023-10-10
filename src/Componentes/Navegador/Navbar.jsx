import React from "react";
//import s from "./Navbar.module.css";
import logo from "../../Img/logo color.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      {/* {" "}
      <div className={s.logo}>
        <h1>
          Fast<h2>COLOR</h2>
        </h1>
      </div>
      <div className={s.botones}>
        <button>Sucursales</button>|<button>Productos</button>|
        <button>Contacto</button>
      </div> */}
      <header class="bg-black bg-opacity-95 text-gray-600 body-font">
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link to={"/"} style={{ textDecoration: "none" }}>
            <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
              <img className="w-50 h-50" src={logo} alt="" />
              <span class="ml-3 text-white text-4xl ml-5 flex">
                Fast <h1 class="ml-3 text-red-500">COLOR</h1>
              </span>
            </a>
          </Link>
          <nav class="md:ml-auto flex flex-wrap items-center text-2xl text-base text-white justify-center">
            <Link
              to={"/nosotros"}
              style={{ textDecoration: "none" }}
              class="mr-5  hover:bg-red-500 p-4"
            >
              ¿Quienes Somos?
            </Link>
            <Link
              to={"/sucursales"}
              style={{ textDecoration: "none" }}
              class="mr-5  hover:bg-red-500 p-4"
            >
              Sucursales
            </Link>
            <Link
              to={"/productos"}
              style={{ textDecoration: "none" }}
              class="mr-5  hover:bg-red-500 p-4"
            >
              Productos
            </Link>
            <Link
              to={"/contacto"}
              style={{ textDecoration: "none" }}
              class="mr-5  hover:bg-red-500 p-4"
            >
              Contacto
            </Link>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
