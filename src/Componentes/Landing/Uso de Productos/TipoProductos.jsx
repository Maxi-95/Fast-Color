import React from "react";

//import s from "./Presentacion.module.css";

function TipoProductos() {
  return (
    <div
      style={{
        backgroundImage:
          "url('https://media.istockphoto.com/id/1363717602/es/foto/abstracto-rojo-y-negro-son-patrones-de-luz-con-el-degradado-es-el-con-la-pared-de-suelo.jpg?b=1&s=612x612&w=0&k=20&c=TbEUfs7_a_KRB5S4kWnStq-C6c-s_llLkRpicDQJ3Sg=')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h1 class="text-4xl mb-10 text-white ml-40 pt-20">Tipos de Productos</h1>
      <section class="text-gray-200 body-font border-b border-gray-700">
        <div class="container mx-auto flex px-5 pb-24 md:flex-row flex-col items-center">
          <div
            class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0
            h-80"
            style={{
              backgroundImage:
                "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmyLLAiugV8tadoo6DV5t7hZzrzC5560CsSOp8vZArlMLQ7XIpcMMSogmr5yjPvexU9mA&usqp=CAU')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 class="title-font sm:text-6xl mb-4 font-medium text-red-600 mb-10">
              Masillas
            </h1>
            <p class="mb-8 leading-relaxed text-2xl">
              definida como un producto de relleno destinado a igualar la
              superficie tras haber sido reparada. Es un producto de dos
              componentes que se han de mezclar con un catalizador específico
              que favorezca una reacción química que haga que la masilla seque.
            </p>
            <h1 class="mb-8 leading-relaxed text-2xl">
              Ofrecemos Masillas: 4:1 | 2:1
            </h1>
            <div class="flex justify-center"></div>
          </div>
        </div>
      </section>

      <section class="text-gray-200 body-font border-b border-gray-700">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 class="title-font sm:text-6xl text-3xl mb-4 font-medium text-red-500">
              Primer
            </h1>
            <p class="mb-8 leading-relaxed text-2xl">
              Se utilizan para el repintado de carrocerías. Su propósito es
              construir y nivelar áreas o superficies rugosas y proporcionar una
              superficie lisa para pintar.
            </p>
            <h1 class="mb-8 leading-relaxed text-2xl">
              Ofrecemos primers: 5:1 | 4:1 | 2:1
            </h1>

            <div class="flex justify-center"></div>
          </div>
          <div
            class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 h-80"
            style={{
              backgroundImage:
                "url('https://www.revistaautocrash.com/wp-content/uploads/2016/05/Edicion36/Pintura/Pintura-36.3.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        </div>
      </section>
      <section class="text-gray-200 body-font">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div
            class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 h-80"
            style={{
              backgroundImage:
                "url('https://i.ytimg.com/vi/KpDZPljlkow/maxresdefault.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 class="title-font sm:text-6xl mb-4 font-medium text-red-600 mb-10">
              Laca, Barnices
            </h1>
            <p class="mb-8 leading-relaxed text-2xl">
              Las funciones de un barniz son: Embellecer la superficie a través
              de un acabado concreto: brillante, mate o satinado. Potenciar los
              efectos de la pintura y sellar y proteger la superficie.
            </p>
            <h1 class="mb-8 leading-relaxed text-2xl">
              Ofrecemos barniz: 5:1 | 3:1 | 2:1
            </h1>
            <div class="flex justify-center"></div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TipoProductos;
