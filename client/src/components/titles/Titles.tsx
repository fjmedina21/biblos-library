//import React from "react";

const Titles = () => {
  return (
    <div className="bg-gray-100 flex justify-center py-10 ">
      <div className="w-[1400px] h-[500px] flex items-center gap-[90px] ">
        <div className="w-[300px] relative flex items-center ">
          <div className="absolute bg-[#F2E9E4] -top-8 -left-8 w-full h-full">
            <span className="absolute bottom-4 left-2 leading-none rotate-180 [writing-mode:vertical-lr]  text-black inline-blocks uppercase tracking-widest">
              Cronica de una muerte anunciada
            </span>
          </div>
          <img
            className="object-center  relative rounded-tr-[40px] rounded-bl-[40px] "
            src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/91geyJSGR6L.jpg"
          />
        </div>

        <div className="w-[300px] relative flex items-center ">
          <div className="absolute bg-[#F2E9E4] -top-8 -left-8 w-full h-full">
            <span className="absolute bottom-4 left-2 leading-none rotate-180 [writing-mode:vertical-lr]  text-black inline-blocks uppercase tracking-widest">
              Don quijote de la mancha{" "}
            </span>
          </div>
          <img
            className="object-center h-full w-full  relative rounded-tr-[40px] rounded-bl-[40px] "
            src="https://static.cegal.es/imagenes/marcadas/9788412/978841222296.gif"
          />
        </div>

        <div className="w-[300px] relative flex items-center ">
          <div className="absolute bg-[#F2E9E4] -top-8 -left-8 w-full h-full">
            <span className="absolute bottom-4 left-2 leading-none rotate-180 [writing-mode:vertical-lr]  text-black inline-blocks uppercase tracking-widest">
              Don quijote de la mancha{" "}
            </span>
          </div>
          <img
            className="object-center h-full w-full  relative rounded-tr-[40px] rounded-bl-[40px] "
            src="https://www.anagrama-ed.es/uploads/media/portadas/0001/27/02908100284f5b347ad1349ae4794cf5f5736025.jpeg"
          />
        </div>

        <div className="w-[300px] relative flex items-center ">
          <div className="absolute bg-[#F2E9E4] -top-8 -left-8 w-full h-full">
            <span className="absolute bottom-4 left-2 leading-none rotate-180 [writing-mode:vertical-lr]  text-black inline-blocks uppercase tracking-widest">
              Don quijote de la mancha{" "}
            </span>
          </div>
          <img
            className="object-center h-full w-full  relative rounded-tr-[40px] rounded-bl-[40px] "
            src="https://quelibroleo.com/images/libros/libro_1362370739.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Titles;
