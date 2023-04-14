import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import { AuthContextType } from "../../context/types";
import Config from "../config/Config";

const Navbar = () => {
  const { currentUser, logout } = useContext(AuthContext) as AuthContextType;

  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", isActive);
    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);
  return (
    <nav
      className={` sticky transition-all w-full duration-500 bg-white ${
        pathname !== "/home" ? "border-b-[1px] border-[ligthgray]" : ""
      } top-0   z-50  py-5`}
    >
      <div className="container mx-auto flex justify-between items-center  ">
        <div className={`relative transition-all duration-500 delay-100 flex`}>
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

            <Link to="/home" className="text-[2rem] font-bold relative z-40 ">
              Biblos
            </Link>
          </div>
          <div className="search hidden  md:flex ml-6 xl:ml-16 rounded-lg border-gray-300 overflow-hidden border-[1px] px-2 w-[400px] hover:border-indigo-500 group transition-all duration-300">
            <input
              type="text"
              className="outline-none w-full p-2 caret-indigo-500  peer"
              placeholder="Busca un titulo"
            />
            <button
              type="submit"
              className="text-gray-400 peer-focus:text-black"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </button>
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
        <div className="relative  hidden md:flex gap-5 group">
          <div
            className={`flex items-center gap-1 cursor-pointer`}
            onClick={() => setOpen(!open)}
          >
            <img
              className="h-10 w-10 rounded-full border-[1px] border-gray-200 "
              src="https://picsum.photos/200/300"
              alt=""
            />
            <span className="text-lg font-medium flex items-center">
              {currentUser.firstName}
            </span>
          </div>
          {open && <Config />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
