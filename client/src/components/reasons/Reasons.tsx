
const Reasons = () => {
  return (
    <div className="flex justify-center bg-white">
      <div className="container flex gap-[30px] py-[100px] items-center md:items-start ">
        <div className="left flex-2">
          <h1 className="text-3xl mb-4 ">
            ¿Porque <strong>Biblos</strong>?
          </h1>
          <div className="flex flex-col gap-[15px]">
            <div className="flex items-center gap-[10px] font-medium text-lg text-[gray]">
              <img src="/img/check.png" className="w-[24px] h-[24px]" alt="" />
              Catalogo amplio de libros
            </div>
            <div className="flex items-center gap-[10px] font-medium text-lg text-[gray]">
              <img src="/img/check.png" className="w-[24px] h-[24px]" alt="" />
              Diseño atractivo y facil
            </div>

            <div className="flex items-center gap-[10px] font-medium text-lg text-[gray]">
              <img src="/img/check.png" className="w-[24px] h-[24px]" alt="" />
              Contenido exclusivo
            </div>
            <div className="flex items-center gap-[10px] font-medium text-lg text-[gray]">
              <img src="/img/check.png" className="w-[24px] h-[24px]" alt="" />
              Acceso a libros de forma gratuita
            </div>
            <div className="flex items-center gap-[10px] font-medium text-lg text-[gray]">
              <img src="/img/check.png" className="w-[24px] h-[24px]" alt="" />
              Acceso gratis a la plataforma
            </div>
          </div>
        </div>
        <div className="right flex-2">
          <video
            src="/video/library.mp4"
            className="w-[720px] rounded-lg"
            controls
          ></video>
        </div>
      </div>
    </div>
  );
};

export default Reasons;
