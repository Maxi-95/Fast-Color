import React from "react";
import video from "../../../Img/presentacion.mp4";
import s from "./Presentacion.module.css";

function Presentacion() {
  //const allProducts = useSelector((state) => state.productos);

  return (
    <div>
      <div></div>
      <div className={s.hero}>
        <video className={s.video} autoPlay loop muted>
          <source src={video} type="" />
        </video>
        <div className={s.content}>
          <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
            <div class="text-center lg:w-2/3 w-full">
              <h1 class="flex aling-center justify-center title-font sm:text-8xl text-7xl mb-4 font-medium text-white">
                Fast<h1 class="ml-3 mr-3 text-red-700">COLOR</h1>
              </h1>
              <h2 class="text-3xl text-red-500 tracking-widest font-medium title-font mb-1">
                Pintureria Automotriz
              </h2>
              <p class="mb-9 mt-9 text-xl leading-relaxed">
                Somos tu destino confiable y experto en el mundo de la
                automoción, dedicados a brindarte la más alta calidad en
                preparación de colores automotrices y una amplia gama de
                productos especializados.
              </p>
              <div class="flex justify-center">
                <button class="inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg">
                  Productos
                </button>
                <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                  Contactos
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Presentacion;
