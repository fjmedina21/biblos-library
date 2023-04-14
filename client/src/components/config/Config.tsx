import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import { AuthContextType } from "../../context/types";
import Share from "../share/Share";

const Config = () => {
  const { currentUser, logout } = useContext(AuthContext) as AuthContextType;
  const [addBook, setAddBook] = useState<boolean>(false);
  const navigate = useNavigate();
  return (
    <>
      <div
        className={`fixed  transform top-[89px] md:w-[20%] 2xl:w-[15%] right-10  py-2  flex  flex-col gap-5 rounded-b-lg  bg-white border-[1px] border-t-0 `}
      >
        <div className="flex p-2 gap-3 items-center shadow mx-2 rounded-md cursor-pointer" onClick={()=>navigate(`/home/profile`)}>
          <img className="h-10 w-10 rounded-full object-cover" src="https://picsum.photos/200/300" alt="" />
          <span>{currentUser.firstName +" "+currentUser.lastName}</span>
        </div>
        {currentUser.isAdmin && (
          <>
          <Link to="/home/userList" className="flex gap-2 items-center p-3  hover:bg-gray-200 transition duration-300">
            
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
</svg>

            Administrar usuarios</Link>
            <button className="flex gap-2 items-center p-3   hover:bg-gray-200 transition duration-300" onClick={()=>setAddBook(true)}>
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
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
              Agregar Libro
            </button>
          <button className="flex gap-2 items-center p-3   hover:bg-gray-200 transition duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
</svg>

            Editar libros
          </button>
          </>
        )}
        <button
          className="flex gap-2 items-center p-3   hover:bg-gray-200 transition duration-300"
          onClick={() => {
            logout();
            navigate("/");
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
</svg>

        Cerrar sesion
        </button>
      </div>
      {addBook && <Share setAddBook={setAddBook} />}
    </>
  );
};

export default Config;
