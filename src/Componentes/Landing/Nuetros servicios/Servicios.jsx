import React from "react";

//import s from "./Presentacion.module.css";

function Servicios() {
  //const allProducts = useSelector((state) => state.productos);

  return (
    <div>
      <section class="bg-black opacity-95 text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <h1 class="text-4xl mb-10 text-white">Nuestros Servicios</h1>
          <div class="flex flex-wrap -m-4">
            <div class="p-4 md:w-1/3">
              <div class="h-full rounded-xl shadow-cla-violate bg-red-500 from-pink-50 to-red-50 overflow-hidden">
                <img
                  class="lg:h-48 md:h-36 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100"
                  src="https://i.ytimg.com/vi/EkabvYpMW1Y/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDmI3hF8Ma-zD7DGGzXx9Gv4Aj_Yw"
                  alt="blog"
                />
                <div class="p-6 mt-4">
                  <h3 class="mb-2 mt-0 text-3xl font-medium leading-tight text-primary text-white">
                    Preparacion de Colores
                  </h3>
                  <p class="leading-relaxed mb-3 mt-4 text-white">
                    Preparamos colores como Bicapa, Tricapa y Poliuretano
                  </p>
                  <div class="flex items-center flex-wrap "></div>
                </div>
              </div>
            </div>
            <div class="p-4 md:w-1/3">
              <div class="h-full rounded-xl shadow-cla-violate bg-red-500 from-pink-50 to-red-50 overflow-hidden">
                <img
                  class="lg:h-48 md:h-36 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100"
                  src="https://blog.reparacion-vehiculos.es/hs-fs/hubfs/F2_Herramientas%20taller.jpg?width=600&name=F2_Herramientas%20taller.jpg"
                  alt="blog"
                />
                <div class="p-6 mt-4">
                  <h3 class="mb-2 mt-0 text-3xl font-medium leading-tight text-primary text-white">
                    Material para la chapa
                  </h3>
                  <p class="leading-relaxed mb-3 mt-4 text-white">
                    Todo lo que neecsitas para preparar el vehiculo para la
                    restauracion
                  </p>
                  <div class="flex items-center flex-wrap "></div>
                </div>
              </div>
            </div>
            <div class="p-4 md:w-1/3">
              <div class="h-full rounded-xl shadow-cla-pink bg-red-500 from-fuchsia-50 to-pink-50 overflow-hidden">
                <img
                  class="lg:h-48 md:h-36 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100"
                  src="https://www.latercera.com/resizer/TTbuwJOQQwnJIkZlEE50cnKTzHo=/900x600/smart/cloudfront-us-east-1.images.arcpublishing.com/copesa/ZHOUAWK5MBDFZJQKAIFW46N3WI.jpg"
                  alt="blog"
                />
                <div class="p-6 mt-4">
                  <h3 class="mb-2 mt-0 text-3xl font-medium leading-tight text-primary text-white">
                    Pintura para el hogar
                  </h3>
                  <p class="leading-relaxed mb-3 mt-4 text-white">
                    Materiales para pintar las paredes de la casa, madera,
                    chapa, etc...
                  </p>
                  <div class="flex items-center flex-wrap "></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Servicios;
