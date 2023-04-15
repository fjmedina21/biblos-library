import { useMutation, useQueryClient } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/authContext";
import { AuthContextType } from "../../context/types";
import { BookModel } from "../../utils/book.model";
import request from "../../utils/request";
import { Link, useNavigate } from "react-router-dom";
import ConfirmModal from "../confirmModal/ConfirmModal";

interface Props {
  book: BookModel;
}
const Book: React.FC<Props> = ({ book }) => {
  const { currentUser } = useContext(AuthContext) as AuthContextType;
  const [confirm, setConfirm] = useState<boolean>(false);

  const handleDelete = async () => {
    //await requestsetC.delete(`books/${book.uId}`);
    setConfirm(true);
  };
  const handleUpdate = () => {};
  return (
    <div className="flex flex-col bg-gray-100 rounded-tl-xl rounded-br-xl overflow-hidden shadow   group cursor-pointer">
      {/*       {currentUser.isAdmin && (
        <button
          className="absolute -top-2 inset-x-0 mx-auto "
          onClick={() => setEditing(!editing)}
        >
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
              d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
            />
          </svg>
        </button>
      )} */}
      <div className="relative ">
        <Link to={"/home/book/" + book.title}>
          <img
            className="h-[420px] w-full  object-cover    "
            src={book.cover.secure_url}
            alt=""
          />
        </Link>

        <div className="absolute inset-x-0 bottom-2 flex  pl-2 items-center justify-center">
          <span className=" bg-indigo-500 py-1 px-2 rounded-full  text-white font-medium text-sm">
            {book.title}
          </span>
          <div className="flex-2"></div>
          {!currentUser.isAdmin && (
            <div className="flex gap-2 pr-3">
              <button
                className="bg-rose-500 py-1 px-2 rounded-full  text-white font-medium text-sm"
                onClick={handleDelete}
              >
                Eliminar
              </button>
              <button className="bg-blue-500 py-1 px-2 rounded-full  text-white font-medium text-sm">
                Editar
              </button>
            </div>
          )}
        </div>
      </div>
      {confirm && <ConfirmModal bookId={book.uId} setConfirm={setConfirm} />}
    </div>
  );
};

export default Book;
