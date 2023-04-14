import React from "react";
import { Link } from "react-router-dom";

const UnLoggedLayout = () => {
  return (
    <nav
      className={`flex sticky transition-all duration-500 bg-white  top-0 justify-between items-center  z-50 px-20 py-5  border-b-[1px]`}
    >
      <div className={`relative transition-all duration-500 delay-100`}>
        <div className="logo  relative ">
          <div className="absolute h-[1.5rem] w-[1.5rem] bg-amber-300 -top-2 right-4">
            <div className="circle absolute top-0 left-0 h-[0.8rem] w-[0.8rem] rounded-br-full bg-white"></div>

            <div className="circle absolute top-0 right-0 h-[0.8rem] w-[0.8rem] rounded-bl-full bg-white"></div>

            <div className="circle absolute bottom-0 right-0 h-[0.8rem] w-[0.8rem] rounded-tl-full bg-white"></div>
            <div className="circle absolute bottom-0 left-0 h-[0.8rem] w-[0.8rem] rounded-tr-full bg-white"></div>
          </div>

          <div className="absolute h-[1.5rem] w-[1.5rem] bg-amber-300 -top-4 left-2">
            <div className="circle absolute top-0 left-0 h-[0.8rem] w-[0.8rem] rounded-br-full bg-white"></div>

            <div className="circle absolute top-0 right-0 h-[0.8rem] w-[0.8rem] rounded-bl-full bg-white"></div>

            <div className="circle absolute bottom-0 right-0 h-[0.8rem] w-[0.8rem] rounded-tl-full bg-white"></div>
            <div className="circle absolute bottom-0 left-0 h-[0.8rem] w-[0.8rem] rounded-tr-full bg-white"></div>
          </div>

          <div className="absolute h-[1.5rem] w-[1.5rem] bg-amber-300  -right-5 top-3">
            <div className="circle absolute top-0 left-0 h-[0.8rem] w-[0.8rem] rounded-br-full bg-white"></div>

            <div className="circle absolute top-0 right-0 h-[0.8rem] w-[0.8rem] rounded-bl-full bg-white"></div>

            <div className="circle absolute bottom-0 right-0 h-[0.8rem] w-[0.8rem] rounded-tl-full bg-white"></div>
            <div className="circle absolute bottom-0 left-0 h-[0.8rem] w-[0.8rem] rounded-tr-full bg-white"></div>
          </div>

          <div className="absolute h-[1.5rem] w-[1.5rem] bg-amber-300  top-2 -left-6">
            <div className="circle absolute top-0 left-0 h-[0.8rem] w-[0.8rem] rounded-br-full bg-white"></div>

            <div className="circle absolute top-0 right-0 h-[0.8rem] w-[0.8rem] rounded-bl-full bg-white"></div>

            <div className="circle absolute bottom-0 right-0 h-[0.8rem] w-[0.8rem] rounded-tl-full bg-white"></div>
            <div className="circle absolute bottom-0 left-0 h-[0.8rem] w-[0.8rem] rounded-tr-full bg-white"></div>
          </div>

          <div className="absolute h-[1.5rem] w-[1.5rem] bg-amber-300 -bottom-4 left-2">
            <div className="circle absolute top-0 left-0 h-[0.8rem] w-[0.8rem] rounded-br-full bg-white"></div>

            <div className="circle absolute top-0 right-0 h-[0.8rem] w-[0.8rem] rounded-bl-full bg-white"></div>

            <div className="circle absolute bottom-0 right-0 h-[0.8rem] w-[0.8rem] rounded-tl-full bg-white"></div>
            <div className="circle absolute bottom-0 left-0 h-[0.8rem] w-[0.8rem] rounded-tr-full bg-white"></div>
          </div>

          <div className="absolute h-[1.5rem] w-[1.5rem] bg-amber-300 -bottom-3 right-6">
            <div className="circle absolute top-0 left-0 h-[0.8rem] w-[0.8rem] rounded-br-full bg-white"></div>

            <div className="circle absolute top-0 right-0 h-[0.8rem] w-[0.8rem] rounded-bl-full bg-white"></div>

            <div className="circle absolute bottom-0 right-0 h-[0.8rem] w-[0.8rem] rounded-tl-full bg-white"></div>
            <div className="circle absolute bottom-0 left-0 h-[0.8rem] w-[0.8rem] rounded-tr-full bg-white"></div>
          </div>

          <Link to="/index" className="text-[2rem] font-bold relative z-40 ">
            Biblos
          </Link>
        </div>
      </div>
      <div className="center hidden  md:block">
        <div className="links">
          <div className="flex gap-3">
            <Link
              to="nosotros"
              className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition duration-300"
            >
              Miembros
            </Link>
            <Link
              to="#contacto"
              className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition duration-300"
            >
              Contacto
            </Link>
          </div>
        </div>
      </div>
      <button className=" md:hidden flex items-center ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>

      <div
        className={`right hidden md:flex gap-4 transform transition-all duration-500 delay-100`}
      >
        <div className="item">
          <Link
            to="/login"
            className="font-medium cursor-pointer hover:text-blue-400 transition duration-300"
          >
            Sign In
          </Link>
        </div>
        <div className="item">
          <Link
            to="/register"
            className="font-medium  p-3 rounded-lg bg-indigo-600 text-white cursor-pointer hover:text-white hover:bg-indigo-700 transition duration-300"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default UnLoggedLayout;
