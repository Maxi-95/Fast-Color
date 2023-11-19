import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

function Contacto() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_sseotwq",
        "template_427rn7h",
        form.current,
        "aExGl1B7OrVuY94LU"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form class="bg-black" ref={form} onSubmit={sendEmail}>
      <div class="flex justify-center pt-40 pb-40">
        {" "}
        <div class="w-4/5 my-5 mx-auto flex flex-col items-center md:flex-row ">
          {" "}
          <div
            class="border w-[70%] h-full bg-cyan-400 text-white p-10"
            style={{
              backgroundImage: 'url("https://fondosmil.com/fondo/23112.jpg")',
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            {" "}
            <span>
              {" "}
              <h1 class="text-3xl font-semibold text-center mb-9 text-red-500">
                Contactenos
              </h1>{" "}
              <p class="text-xs font-normal mt-2 text-center">
                Contáctenos llenando este formulario de contacto.{" "}
              </p>{" "}
            </span>{" "}
            <div class="mt-6 leading-7 text-center">
              {" "}
              <input
                type="text"
                name="user_name"
                placeholder="Full Name"
                id=""
                class="opacity- border-b-2 w-[80%] mb-4 p-1 border-b-white placeholder:text-white placeholder:opacity-80 text-sm bg-gray-400 focus:outline-none bg-opacity-25"
              />{" "}
              <input
                type="email"
                name="user_email"
                placeholder="Email Address"
                id=""
                class="border-b-2 w-[80%] mb-4 p-1 border-b-white placeholder:text-white placeholder:opacity-80 text-sm bg-gray-400 focus:outline-none bg-opacity-25"
              />{" "}
              <textarea
                id="message"
                name="message"
                placeholder="Write us a message"
                class="w-[80%] bg-gray-400 border-2 border-white h-44 text-sm outline-none placeholder:text-white placeholder:opacity-80 py-1 px-2 mt-6 resize-none leading-6 duration-200 ease-in-out rounded-lg bg-opacity-25"
              ></textarea>{" "}
              <input
                class="block m-auto w-[60%] md:w-[50%] text-center border bg-red-500 rounded-full py-1 mt-6 text-lg font-bold tracking-wide uppercase text-white brightness-105 hover:bg-red-600"
                type="submit"
                value="Enviar"
              />
            </div>{" "}
          </div>{" "}
          <div class="border w-[70%] md:w-[40%] bg-gray-100 items-center flex flex-col justify-center leading-7 space-y-8 p-8 h-full">
            {" "}
            <img
              src="https://www.paraautos.website/wp-content/uploads/2019/11/pinturas-para-automovil.jpg"
              alt=""
              class="w-400 h-200 mb-10"
            />{" "}
            Siguenos en nuestras redes sociales:
            <p class="text-black flex w-250 space-x-12">
              <a href="https://www.facebook.com/fast.color.549">
                <img
                  src="https://icones.pro/wp-content/uploads/2021/02/facebook-icone-rouge.png"
                  alt=""
                  class="w-50 h-50"
                />{" "}
              </a>
              <a href="https://www.instagram.com/fastcolorpintureria/">
                <img
                  src="https://icones.pro/wp-content/uploads/2021/02/instagram-icone-rouge.png"
                  alt=""
                  class="w-50 h-50"
                />{" "}
              </a>
              <a href="https://www.tiktok.com/@fastcolorpintureria_ok">
                <img
                  src="https://assets.stickpng.com/images/615868b0258f1e0004154904.png"
                  alt=""
                  class="w-50 h-50"
                />{" "}
                {/* cscjknas */}
              </a>
            </p>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
      <script src="https://cdn.tailwindcss.com"></script>
    </form>
  );
}

export default Contacto;
