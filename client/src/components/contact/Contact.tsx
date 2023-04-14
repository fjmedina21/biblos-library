import React from "react";

const Contact = () => {
  return (
    <div id="contacto" className=" flex flex-col items-center bg-white">
      <div className=" h-[64px] w-full bg-[url(/img/fl.svg)] bg-repeat rotate-180"></div>
      <div className="container flex gap-5 py-[150px] ">
        <span className="flex-2 text-3xl font-medium mt-8">
          ¿Tienes alguna duda o sugerencia con respecto a nuestra pagina
          web?&nbsp;
          <span>No dudes en contactarnos</span>
        </span>
        <form action="" className="flex  flex-col flex-2 items-center  gap-5 ">
          <h1 className="text-2xl font-bold">Contacto</h1>
          <input
            className=" w-1/2 outline-none bg-gray-100 p-2 rounded-lg caret-rose-500 focus:border-rose-500 border-[1px] border-transparent"
            type="text"
            placeholder="Nombre"
          />
          <input
            type="email"
            className=" w-1/2 outline-none bg-gray-100 p-2 rounded-lg caret-rose-500 focus:border-rose-500 border-[1px] border-transparent"
            placeholder="Correo"
          />
          <textarea
            className=" w-1/2 outline-none bg-gray-100 p-2 rounded-lg caret-rose-500 focus:border-rose-500 border-[1px] border-transparent"
            placeholder="Mensaje"
          />
          <button className="bg-rose-600 relative overflow-hidden p-2 w-1/2 group rounded-lg text-white">
            <span className="absolute inset-0 bottom-1/2  bg-slate-900 rounded-t-lg transform group-hover:-translate-y-5   transition duration-300"></span>
            <span className="absolute inset-0 top-1/2  bg-slate-900 rounded-b-lg  group-hover:translate-y-5   transition duration-300"></span>
            <span className="relative">Enviar</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
