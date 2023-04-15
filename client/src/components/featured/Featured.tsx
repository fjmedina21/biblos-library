// import React from "react";

import { Link } from "react-router-dom";

const Featured = () => {
  return (
    <div className="bg-white   h-[600px] flex justify-center ">
      <div className=" flex container items-center mx-auto  ">
        <div className=" flex flex-col gap-[30px] self-center">
          <h2 className="text-2xl lg:text-5xl font-bold container ">
            Libros para satisfacer tus gustos literarios que esperas
          </h2>
 {/*          <div className="features flex gap-[10px] items-center ">
            <span>Generos:</span>
            <span className="text-black bg-gray-50 border-[1px] border-black py-[5px] px-5 rounded-[20px] text-sm cursor-pointer">
              Terror
            </span>
            <span className="text-black bg-gray-50 border-[1px] border-black py-[5px] px-5 rounded-[20px] text-sm cursor-pointer">
              Dramatico
            </span>
            <span className="text-black bg-gray-50 border-[1px] border-black py-[5px] px-5 rounded-[20px] text-sm cursor-pointer">
              Literario
            </span>
            <span className="text-black bg-gray-50 border-[1px] border-black py-[5px] px-5 rounded-[20px] text-sm cursor-pointer">
              Novelas
            </span>
            <Link to="/login" className="py-[5px] px-5 bg-indigo-600 rounded-2xl text-white">
              Unirme
            </Link>
          </div> */}
              <div className="features flex gap-[10px] items-center justify-center md:justify-start ">
            <span className="text-xl font-medium">Que esperas para formar parte de nuestro equipo</span>

            <Link to="/login" className="py-[5px] px-5 bg-indigo-600 rounded-2xl text-white">
              Unirme
            </Link>
          </div>
        </div>
        <div className=" hidden md:block ">
          <img
            className="h-full object-cover"
            src="/img/pngegg.png"
            alt=""

          />
        </div>
      </div>
    </div>
  );
};

export default Featured;
