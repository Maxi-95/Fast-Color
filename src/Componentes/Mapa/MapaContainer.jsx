import React from "react";
//import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import s from "./MapContainer.module.css";
import mapa1 from "../../Img/mapa 1.png";
import mapa2 from "../../Img/mapa 2.png";

const MapContainer = () => {
  return (
    <div>
      <section class="bg-black text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap w-full mb-20">
            <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 class="text-white sm:text-5xl text-2xl font-medium title-font mb-2 text-gray-900">
                Sucursales
              </h1>
              <div class="h-1 w-20 bg-red-500 rounded"></div>
            </div>
          </div>
          <div class="flex flex-wrap -m-4">
            <div class=" xl:w-1/2 md:w-1/2 p-4">
              <div class="border border-2em border-gray-600 p-6 rounded-lg">
                <img
                  class="h-200 rounded w-full object-cover object-center mb-6"
                  src={mapa1}
                  alt="content"
                />

                <h2 class="text-white text-lg text-gray-900 font-medium title-font mb-4">
                  Fuerza Aerea 4084, Ruta 20.
                </h2>
                <p class="leading-relaxed text-base text-gray-400">
                  Cordoba, ( Argentina )
                </p>
              </div>
            </div>
            <div class=" xl:w-1/2 md:w-1/2 p-4">
              <div class="border border-2em border-gray-600 p-6 rounded-lg">
                <img
                  class="h-200 rounded w-full object-cover object-center mb-6"
                  src={mapa2}
                  alt="content"
                />

                <h2 class="text-white  text-lg text-gray-900 font-medium title-font mb-4">
                  Dr. Arturo Capdevila 1556
                </h2>
                <p class="leading-relaxed text-base text-gray-400">
                  Cordoba, ( Argentina )
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="bg-black text-gray-400 body-font">
        <div class="container px-1 pb-40 pt-10 mx-auto">
          <div class="flex flex-col text-center w-full mb-20">
            <h1 class="text-white sm:text-5xl text-3xl font-medium title-font text-gray-900">
              Horarios
            </h1>
          </div>
          <div class="lg:w-2/3 w-full mx-auto overflow-auto">
            <table class="table-auto w-full text-left whitespace-no-wrap">
              <thead>
                <tr>
                  <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl"></th>
                  <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-300">
                    Lunes
                  </th>
                  <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                    Martes
                  </th>
                  <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-300">
                    Miercoles
                  </th>
                  <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                    Jueves
                  </th>
                  <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-300">
                    Viernes
                  </th>
                  <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                    Sabado
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="px-4 py-9">Desde</td>
                  <td class="px-4 py-9">9:00 hs</td>
                  <td class="px-4 py-9">9:00 hs</td>
                  <td class="px-4 py-9">9:00 hs</td>
                  <td class="px-4 py-9">9:00 hs</td>
                  <td class="px-4 py-9">9:00 hs</td>
                  <td class="px-4 py-9">9:00 hs</td>
                </tr>
                <tr>
                  <td class="px-4 py-3">Hasta</td>
                  <td class="px-4 py-3">18:00 hs</td>
                  <td class="px-4 py-3">18:00 hs</td>
                  <td class="px-4 py-3">18:00 hs</td>
                  <td class="px-4 py-3">18:00 hs</td>
                  <td class="px-4 py-3">18:00 hs</td>
                  <td class="px-4 py-3">12:30 hs</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MapContainer;
