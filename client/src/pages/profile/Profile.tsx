import { useContext, useState } from "react";
import { AuthContextType } from "../../context/types";
import { AuthContext } from "../../context/authContext";
import ConfirmModal from "../../components/confirmModal/ConfirmModal";

const Profile = () => {
  const { currentUser } = useContext(AuthContext) as AuthContextType;
  const [confirm, setConfirm] = useState<boolean>(false);

  return (
    <div className="flex justify-center mt-14">
      <div className="container mx-auto flex justify-center ">
        <div className="flex flex-col gap-5 items-center rounded-lg p-5 w-[400px]">
          <div className=" flex flex-col items-center justify-center border-[1px] w-full p-3 rounded-lg border-gray-100">
            <img
              className=" -mt-20 w-36 h-36 border-[1px] border-indigo-500 rounded-full object-cover"
              src="https://picsum.photos/200/300"
              alt=""
            />
            <div className="items flex flex-col items-center gap-2 mt-4 text-[gray]">
              <div className="text-xl font-medium">
                Nombre:{" "}
                <span className="text-lg font-normal">
                  {currentUser.firstName}
                </span>{" "}
              </div>
              <div className="text-xl font-medium">
                Apellido:{" "}
                <span className="text-lg font-normal">
                  {currentUser.lastName}
                </span>{" "}
              </div>
              <div className="text-xl font-medium">
                Correo:{" "}
                <span className="text-lg font-normal">{currentUser.email}</span>{" "}
              </div>
              <div className=" uppercase flex justify-center  bg-gradient-to-r from-yellow-400 via-rose-500 to-sky-500 bg-clip-text text-transparent animate-gradient-xy text-xl font-bold mt-4">
                {currentUser.isAdmin ? "Administrador" : "Usuario"}
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2  w-full p-2 rounded-lg items-center ">
            <button className="w-[60%] bg-gray-100 text-black font-medium p-3 rounded-md">
              Editar cuenta
            </button>
            <button
              className="w-[60%] bg-red-300 text-black font-medium p-3 rounded-md "
              onClick={() => setConfirm(true)}
            >
              Eliminar cuenta
            </button>
          </div>
        </div>
      </div>
      {confirm && <ConfirmModal setConfirm={setConfirm} />}
    </div>
  );
};

export default Profile;
