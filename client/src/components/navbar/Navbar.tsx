import React from "react";
import { Link } from "react-router-dom";
import Glitter from "../glitter/Glitter";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center relative z-50 px-20 py-6  border-b-[1px]">
      <div className="logo  relative">
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

        <Link to="/" className="text-[2.5rem] font-bold relative z-40 ">
          Biblos
        </Link>
        {/* <Glitter top={0} right={-10} bottom={0} left={0}/>
         */}
      </div>
      <div className="right flex gap-4 ">
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
            className="font-medium border-[1px] p-3 rounded-lg bg-indigo-600 text-white cursor-pointer hover:text-white hover:bg-[gray] transition duration-300"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
