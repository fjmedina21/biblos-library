import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import { AuthContextType } from "../../context/types";

const Config = () => {
  const { currentUser, logout } = useContext(AuthContext) as AuthContextType;
  const navigate = useNavigate();
  return (
    <div
      className={`fixed  transform top-[89px] w-[15%] right-2 p-5 flex  flex-col gap-5 rounded-b-lg h-[calc(30%_-_89px)] bg-gray-100  `}
    >
      <div className="flex items-center gap-2 bg-white p-5 rounded-lg cursor-pointer">
        <img
          className="h-10 w-10 rounded-full object-cover border-[1px] outline-8 "
          src="/img/no-avatar.png"
          alt=""
        />
        <span className="font-medium text-lg">
          {currentUser.firstName} {currentUser.lastName}
        </span>
      </div>

      <button
        className="flex gap-3 font-medium text-gray-700 hover:bg-gray-400 rounded-lg hover:text-white transition duration-300 w-full p-5"
        onClick={() => {
          logout();
          navigate("/");
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 "
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
          />
        </svg>

        <span>Logout</span>
      </button>
    </div>
  );
};

export default Config;
