import { useRef, useEffect, useState } from "react";
const Team = () => {
  const ref = useRef<any>();
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { rootMargin: "-300px" }
    );
    observer.observe(ref.current!);
    return () => observer.disconnect();
  }, [isIntersecting]);

  return (
    <div className=" overflow-hidden bg-white">
      <div className="h-[64px] w-full bg-[url(/img/fl.svg)] bg-repeat "></div>
      <div className="bg-indigo-600 h-full py-10 ">
        <h1 className="w-full flex justify-center mb-10 text-4xl font-semibold text-gray-200 ">
          Equipo
        </h1>
        <div
          className={`container mx-auto  transition duration-700 ${
            isIntersecting
              ? "[&>*:nth-child(odd)]:-translate-x-0 [&>*:nth-child(odd)]:delay-100 opacity-100 [&>*:nth-child(even)]:translate-x-0 [&>*:nth-child(even)]:delay-200"
              : "[&>*:nth-child(odd)]:-translate-x-96 [&>*:nth-child(even)]:translate-x-96 opacity-0"
          } flex flex-col items-center gap-32`}
          ref={ref}
        >
          <div className="teammate  transition duration-500 flex  items-center gap-5 relative">
            <div className="absolute h-40 w-px  -bottom-28 right-[100px] bg-gray-300"></div>

            <img
              className="rounded-full w-[200px] h-[200px] object-cover  "
              src="https://i.ibb.co/XyjgSbS/Whats-App-Image-2023-03-27-at-7-27-42-PM.jpg"
              alt=""
            />
            <div className="info text-white flex flex-col gap-2 ">
              <span className="text-3xl font-medium">Bryan Bocio</span>
              <span className="text-xl ">Scrum master</span>
            </div>
          </div>

          <div className="teammate    transition duration-500  relative flex flex-row-reverse  items-center gap-5">
            <div className="absolute h-40 w-px  -bottom-28 left-[70px] bg-gray-300"></div>

            <img
              className="rounded-full w-[200px] h-[200px] object-cover "
              src="https://i.ibb.co/jM8GF9v/Whats-App-Image-2023-03-27-at-7-55-49-PM.jpg"
              alt=""
            />
            <div className="info text-white flex flex- flex-col gap-2 ">
              <span className="text-3xl font-medium">Felix Ortega</span>
              <span className="text-xl ">Product Owner</span>
            </div>
          </div>
          <div className="teammate  transition duration-500 relative flex  items-center gap-5">
            <div className="absolute h-40 w-px  -bottom-28 right-28 bg-gray-300"></div>
            <img
              className="rounded-full w-[200px] h-[200px] object-cover"
              src="https://i.ibb.co/QrrskYb/Whats-App-Image-2023-03-26-at-11-22-22-PM.jpg"
              alt=""
            />
            <div className="info text-white flex flex-col gap-2 relative">
              <span className="text-3xl font-medium">Francisco Javier</span>
              <span className="text-xl relative left-10">Lider tecnico</span>
            </div>
          </div>

          <div className="teammate  transition duration-500 relative flex flex-row-reverse  items-center gap-5">
            <div className="absolute h-40 w-px  -bottom-28 left-24 bg-gray-300"></div>

            <img
              className="rounded-full w-[200px] h-[200px] object-cover "
              src="https://i.ibb.co/Tq9yvmC/Whats-App-Image-2023-03-27-at-8-05-08-PM.jpg"
              alt=""
            />
            <div className="info text-white flex flex-col gap-2 ">
              <span className="text-3xl font-medium">Lizandro Galan</span>
              <span className="text-xl  self-center relative ">QA</span>
            </div>
          </div>

          <div className="teammate  transition duration-500 relative flex items-center gap-5">
            <div className="absolute h-40 w-px  -bottom-28 right-28 bg-gray-300"></div>

            <img
              className="rounded-full w-[200px] h-[200px] object-cover "
              src="https://i.ibb.co/yBH3vNk/Whats-App-Image-2023-03-27-at-8-42-07-AM.jpg"
              alt=""
            />
            <div className="info text-white flex flex-col gap-2 ">
              <span className="text-3xl font-medium">Abraham Rivera</span>
              <span className="text-xl relative left-20">Dev</span>
            </div>
          </div>

          <div className="teammate  transition duration-500 relative flex flex-row-reverse items-center gap-5">
            <div className="absolute h-40 w-px  -bottom-28 left-[75px] bg-gray-300"></div>

            <img
              className=" rounded-full w-[200px] h-[200px] object-cover "
              src="https://picsum.photos/200"
              alt=""
            />
            <div className="info text-white flex flex-col gap-2 ">
              <span className="text-3xl font-medium">Joan Stiven</span>
              <span className="text-xl  self-center">Dev</span>
            </div>
          </div>

          <div className="teammate   transition duration-500 relative flex  items-center gap-5">
            <img
              className="rounded-full w-[200px] h-[200px] object-cover object-bottom"
              src="https://i.ibb.co/rxDNN3X/20221026-181833.jpg"
              alt=""
            />
            <div className="info text-white flex flex-col gap-2 ">
              <span className="text-3xl font-medium">Albert Agramonte</span>
              <span className="text-xl ">Dev</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
