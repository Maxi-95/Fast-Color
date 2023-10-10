import s from "./Nosotros.module.css";

function Nosotros() {
  return (
    <div>
      <section class="bg-black text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto flex flex-col">
          <div class="lg:w-4/6 mx-auto">
            <div class="flex flex-col sm:flex-row mt-10">
              <div class="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                <div class="flex flex-col items-center text-center justify-center">
                  <h2 class="font-medium title-font mt-4 text-gray-900 text-5xl text-white">
                    ¿Quienes Somos?
                  </h2>
                  <div class="w-12 h-1 bg-red-500 rounded mt-2 mb-4"></div>
                </div>
              </div>
              <div class="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                <p class=" text-gray-400 leading-relaxed text-lg mb-4">
                  En Fast COLOR, nuestra pasión es dar vida al mundo automotriz
                  a través del color y la excelencia en el cuidado de tu
                  vehículo. Somos tu aliado confiable en la preparación de
                  colores automotrices y en la venta de productos de primera
                  calidad para chapa y pintura. Cada día, nos esforzamos por
                  superar las expectativas de nuestros clientes, brindando
                  soluciones personalizadas y asesoramiento experto en el mundo
                  de la pintura automotriz. Ya sea que estés restaurando un
                  clásico, realizando reparaciones o simplemente buscando una
                  actualización de estilo, estamos aquí para convertir tu visión
                  en una realidad. Confía en nosotros para ofrecerte productos y
                  servicios que resalten la belleza y la durabilidad de tu
                  vehículo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="bg-black body-font">
        <div class="container px-5 py-24 mx-auto flex flex-wrap">
          <div class="flex w-full mb-20 flex-wrap">
            <h1 class="sm:text-4xl text-4xl font-medium title-font text-white lg:w-1/3 lg:mb-0 mb-4">
              Galeria
            </h1>
          </div>
          <div class="flex flex-wrap md:-m-2 -m-1">
            <div class="flex flex-wrap w-1/2">
              <div class="md:p-2 p-1 w-1/2">
                <img
                  alt="gallery"
                  class="w-full object-cover h-full object-center block"
                  src="https://dummyimage.com/500x300"
                />
              </div>
              <div class="md:p-2 p-1 w-1/2">
                <img
                  alt="gallery"
                  class="w-full object-cover h-full object-center block"
                  src="https://dummyimage.com/501x301"
                />
              </div>
              <div class="md:p-2 p-1 w-full">
                <img
                  alt="gallery"
                  class="w-full h-full object-cover object-center block"
                  src="https://dummyimage.com/600x360"
                />
              </div>
            </div>
            <div class="flex flex-wrap w-1/2">
              <div class="md:p-2 p-1 w-full">
                <img
                  alt="gallery"
                  class="w-full h-full object-cover object-center block"
                  src="https://dummyimage.com/601x361"
                />
              </div>
              <div class="md:p-2 p-1 w-1/2">
                <img
                  alt="gallery"
                  class="w-full object-cover h-full object-center block"
                  src="https://dummyimage.com/502x302"
                />
              </div>
              <div class="md:p-2 p-1 w-1/2">
                <img
                  alt="gallery"
                  class="w-full object-cover h-full object-center block"
                  src="https://dummyimage.com/503x303"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="bg-black text-gray-600 body-font">
        <div class="bg-black container px-5 pb-40 mx-auto">
          <div class="flex flex-col text-center w-full mb-20">
            <h1 class="text-white sm:text-3xl text-2xl mt-5 font-medium title-font mb-4 text-gray-900">
              Nuestras Fortalezas
            </h1>
          </div>
          <div class="flex flex-wrap -m-4 text-center">
            <div class="flex items-center justify-center p-4 md:w-1/3 sm:w-1/2 w-full">
              <div class="flex-col px-6 py-2 max-w-7xl">
                {" "}
                <div class="flex items-center justify-center md:h-150 h-28 w-28 md:w-150 rounded-full overflow-hidden bg-gray-200">
                  {" "}
                  <svg
                    class="h-50 w-50 text-red-500"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    {" "}
                    <circle cx="12" cy="8" r="7" />{" "}
                    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
                  </svg>
                </div>{" "}
                <div class="m-4  text-lg font-medium text-stone-600 cursor-pointer hover:text-stone-400">
                  Experiencia
                </div>{" "}
                <div class=" italic text-red-500">+25 en el sector</div>{" "}
              </div>{" "}
            </div>
            <div class="flex items-center justify-center p-4 md:w-1/3 sm:w-1/2 w-full">
              <div class="flex-col px-6 py-2 ">
                {" "}
                <div class="flex items-center justify-center md:h-150 h-28 w-28 md:w-150 rounded-full overflow-hidden bg-gray-200">
                  {" "}
                  <svg
                    class="h-50 w-50 text-red-500"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    {" "}
                    <path stroke="none" d="M0 0h24v24H0z" />{" "}
                    <circle cx="12" cy="12" r="9" />{" "}
                    <polyline points="12 7 12 12 15 15" />
                  </svg>
                </div>{" "}
                <div class="m-4 text-lg font-medium text-stone-600 cursor-pointer hover:text-stone-400">
                  Eficacia
                </div>{" "}
                <div class=" italic text-red-500">En los colores</div>{" "}
              </div>{" "}
            </div>
            <div class="flex items-center justify-center p-4 md:w-1/3 sm:w-1/2 w-full">
              <div class="flex-col px-6 py-2 ">
                {" "}
                <div class="flex items-center justify-center md:h-150 h-28 w-28 md:w-150 rounded-full overflow-hidden bg-gray-200">
                  {" "}
                  <svg
                    class="h-50 w-50 text-red-500"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    {" "}
                    <path stroke="none" d="M0 0h24v24H0z" />{" "}
                    <path d="M6 5h12l3 5l-8.5 9.5a.7 .7 0 0 1 -1 0l-8.5 -9.5l3 -5" />{" "}
                    <path d="M10 12l-2 -2.2l.6 -1" />
                  </svg>
                </div>{" "}
                <div class="m-4 text-lg font-medium text-stone-600 cursor-pointer hover:text-stone-400">
                  Valores
                </div>{" "}
                <div class=" italic text-red-500">Nuestros clientes</div>{" "}
              </div>{" "}
            </div>
            <div class="flex items-center justify-center p-4 md:w-1/3 sm:w-1/2 w-full">
              <div class="flex-col px-6 py-2 ">
                {" "}
                <div class=" flex items-center justify-center md:h-150 h-28 w-28 md:w-150 rounded-full overflow-hidden bg-gray-200">
                  {" "}
                  <svg
                    class="h-50 w-50 text-red-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                    />
                  </svg>
                </div>{" "}
                <div class="m-4 text-lg font-medium text-stone-600 cursor-pointer hover:text-stone-400">
                  Productos
                </div>{" "}
                <div class=" italic text-red-500">De muchas Marcas</div>{" "}
              </div>{" "}
            </div>

            <div class="flex items-center justify-center p-4 md:w-1/3 sm:w-1/2 w-full">
              <div class="flex-col px-6 py-2 ">
                {" "}
                <div class=" flex items-center justify-center md:h-150 h-28 w-28 md:w-150 rounded-full overflow-hidden bg-gray-200">
                  {" "}
                  <svg
                    class="h-50 w-50 text-red-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>{" "}
                <div class="m-4 text-lg font-medium text-stone-600 cursor-pointer hover:text-stone-400">
                  Acesoria
                </div>{" "}
                <div class=" italic text-red-500">Sobre productos</div>{" "}
              </div>{" "}
            </div>
            <div class="flex items-center justify-center p-4 md:w-1/3 sm:w-1/2 w-full">
              <div class="flex-col px-6 py-2 ">
                {" "}
                <div class="flex items-center justify-center md:h-150 h-28 w-28 md:w-150 rounded-full overflow-hidden bg-gray-200">
                  {" "}
                  <svg
                    class="h-50 w-50 text-red-500"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    {" "}
                    <path stroke="none" d="M0 0h24v24H0z" />{" "}
                    <circle cx="12" cy="12" r=".5" fill="currentColor" />{" "}
                    <circle cx="12" cy="12" r="7" />{" "}
                    <line x1="12" y1="3" x2="12" y2="5" />{" "}
                    <line x1="3" y1="12" x2="5" y2="12" />{" "}
                    <line x1="12" y1="19" x2="12" y2="21" />{" "}
                    <line x1="19" y1="12" x2="21" y2="12" />
                  </svg>
                </div>{" "}
                <div class="m-4 text-lg font-medium text-stone-600 cursor-pointer hover:text-stone-400">
                  Mision
                </div>{" "}
                <div class=" italic text-red-500">Objetivos, metas</div>{" "}
              </div>{" "}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Nosotros;
