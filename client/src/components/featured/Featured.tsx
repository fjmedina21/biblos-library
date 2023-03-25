import React from "react";
import { Link } from "react-router-dom";

const Featured = () => {
  return (
    <div className="bg-white h-[600px] flex justify-center ">
      <div className="w-[1400px] flex items-center ">
        <div className="left flex flex-col gap-[30px]">
          <h2 className="text-5xl font-bold w-[1000px] ">
            Libros para satisfacer tus gustos literarios que esperas
          </h2>
          <div className="features flex gap-[10px] items-center ">
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
          </div>
        </div>
        <div className="left ">
          <img
            className="h-[500px] object-cover"
            src="/img/pngegg.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Featured;
