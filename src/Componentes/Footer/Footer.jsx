import React from "react";

//import s from "./Presentacion.module.css";

function Footer() {
  return (
    <div>
      <div class="bg-black flex justify-center items-center">
        <div class=" items-center w-full md:max-w-7xl">
          <div class=" flex flex-col justify-center items-center mt-3 space-y-2 md:mx-[50px] md:flex-row md:justify-between">
            <p class="text-md font-semibold text-gray-800 md:text-lg md:text-gray-500/90">
              {" "}
              Pintureria Fast COLOR{" "}
            </p>

            <div class="text-center text-lg md:space-x-5">
              {" "}
              <a
                class="rounded-full bg-white m-2 inline-block border-2 text-white "
                href="https://www.facebook.com/fast.color.549"
              >
                <img
                  src="https://icones.pro/wp-content/uploads/2021/02/facebook-icone-rouge.png"
                  alt=""
                  class="w-50 h-50"
                />{" "}
              </a>{" "}
              <a
                class="rounded-full bg-white m-2 inline-block border-2 text-white "
                href="https://www.instagram.com/fastcolorpintureria/"
              >
                <img
                  src="https://icones.pro/wp-content/uploads/2021/02/instagram-icone-rouge.png"
                  alt=""
                  class="w-50 h-50"
                />{" "}
              </a>{" "}
              <a
                class="rounded-full bg-white m-2 inline-block border-2  text-white "
                href="https://www.tiktok.com/@fastcolorpintureria_ok"
              >
                <img
                  src="https://assets.stickpng.com/images/615868b0258f1e0004154904.png"
                  alt=""
                  class="w-50 h-50"
                />{" "}
              </a>{" "}
            </div>
          </div>
          <hr class="mt-2 md:overflow-hidden" />
          <div class=" grid grid-cols-2 my-3 text-center md:grid-cols-4 my-10">
            <div class="flex flex-col leading-7 ml-20">
              <h1 class="text-red-500 text-lg font-semibold">Sucursales</h1>
              <p class="text-gray-500/80 ">Av. Fuerza Aerea 4084</p>
              <p class="text-gray-500/80 ">Dr. Arturo Capdevila 1556 </p>
            </div>
            <div class="flex flex-col leading-7">
              <h1 class="text-red-500 text-lg font-semibold">Contacto</h1>
              <p class="text-gray-500/80">+54 9 351 739-1631</p>
              <p class="text-gray-500/80 ">+54 9 351 642-5550</p>
              <p class="text-gray-500/80 ">fast.color.pintureria@gmail.com</p>
            </div>
            <div class="flex flex-col my-6 leading-7 md:my-0">
              <h1 class="text-red-500 text-lg font-semibold">Horarios</h1>

              <p class="text-gray-500/80 "> lun. a vie. 9hs a 17:45hs</p>

              <p class="text-gray-500/80 "> sab. 9hs a 12:30hs</p>
            </div>
            <div class="flex flex-col my-6 leading-7 md:my-0">
              <h1 class="text-red-500 text-lg font-semibold">Medios de Pago</h1>
              <p class="text-gray-500/80 ">
                {" "}
                Crédito, transferencia o efectivo.
              </p>
              <p class="flex justify-center m-3">
                {" "}
                <img
                  class="w-40 h-30 mx-3"
                  src="https://tramitarjeta.com/wp-content/uploads/2020/11/Tarjeta-Naranja-resumen.png"
                  alt=""
                />
                <img
                  class="w-50 h-30 mx-3"
                  src="https://logos-marcas.com/wp-content/uploads/2020/09/MasterCard-Logotipo-1979-1990.jpg"
                  alt=""
                />
                <img
                  class="w-40 h-30 mx-3"
                  src="https://logodownload.org/wp-content/uploads/2016/10/visa-logo-14.png"
                  alt=""
                />
              </p>
              <p class="flex justify-center">
                {" "}
                <img
                  class="w-50 h-30 mx-3"
                  src="https://1000logos.net/wp-content/uploads/2017/02/Colors-HSBC-Logo.jpg"
                  alt=""
                />
                <img
                  class="w-50 h-30 mx-3"
                  src="https://http2.mlstatic.com/frontend-assets/home-landing/logo-mercadopago.jpg"
                  alt=""
                />
              </p>
            </div>
          </div>
          <hr class="mt-2 md:invisible" />
        </div>
      </div>
      <script src="https://cdn.tailwindcss.com"></script>
      <script src="https://use.fontawesome.com/03f8a0ebd4.js"></script>
    </div>
  );
}

export default Footer;
