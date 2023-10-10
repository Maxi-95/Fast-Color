import React from "react";

//import s from "./Presentacion.module.css";

function TipoPintura() {
  return (
    <div>
      <section class="bg-black opacity-95">
        <div class="container px-6 py-10 mx-auto">
          <div class="grid grid-cols-1 gap-8 mt-10 mb-20 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
            <div class="space-y-3 border-2 border-red-500 dark:border-red-500 ">
              <h1 class="bg-red-500 p-4 pl-5 text-2xl font-semibold text-gray-700 capitalize dark:text-white">
                BICAPA
              </h1>

              <p class="text-gray-500 dark:text-gray-300 p-7">
                La aplicación para lograr este acabado se realiza en dos capas:
                Primero se aplica el color, para que la capa adquiera la
                tonalidad deseada. Y después se aplica una capa de barniz
                transparente para lograr el acabado y la dureza ideal.
              </p>
            </div>

            <div class="space-y-3 border-2 border-red-500 dark:border-red-500 ">
              <h1 class="bg-red-500 p-4 pl-5 text-2xl font-semibold text-gray-700 capitalize dark:text-white">
                TRICAPA
              </h1>

              <p class="text-gray-500 dark:text-gray-300 p-7">
                Los tricapa son colores llamativos y luminosos, y para
                aplicarlos se requiere de tres pasos: Capas de fondo, es decir,
                una base de color. Capa de efecto, otra base de color
                (usualmente del tipo perlado). Barniz, el cual le dará el brillo
                y la dureza.
              </p>
            </div>

            <div class="space-y-3 border-2 border-red-500 dark:border-red-500 ">
              <h1 class="bg-red-500 p-4 pl-5 text-2xl font-semibold text-gray-700 capitalize dark:text-white">
                POLIURETANO
              </h1>

              <p class="text-gray-500 dark:text-gray-300 p-7">
                Se le conoce como pintura de poliuretano a las que están hechas
                a base de resina tipo uretano, y su principal característica es
                que cuenta con excelentes propiedades adhesivas y colorantes.
                Por otro lado, utilizando este tipo de pinturas,
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TipoPintura;
