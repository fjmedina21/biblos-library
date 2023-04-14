import {
  
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { BookModel } from "../../utils/book.model";
import request from "../../utils/request";

interface Props {
  setAddBook: React.Dispatch<React.SetStateAction<boolean>>;
}
const Share: React.FC<Props> = ({ setAddBook }) => {
  const [file, setFile] = useState<File>();
  const [adding, setAdding] = useState<boolean>(false);
  const [book, setBook] = useState({
    title: "",
    author: "",
    genre: "",
    description: "",
    price: 0,
    stock: 0,
  });
  const queryClient = useQueryClient();
  const { mutateAsync, isLoading, error, failureReason, data } = useMutation(
    (form: unknown) => {
      return request.post("books", form);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["book"]);
      },
    }
  );
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("cover", file!);
    Object.entries(book).map(([key, value]) =>
      formData.append(key, value.toString())
    );
    await mutateAsync(formData);

    setAddBook(false);
  };
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setBook((prev: any) => {
      return { ...book, [e.target.name]: e.target.value };
    });
    console.log(book);
  };
  return (
    <div className="fixed inset-0 bg-black/30 z-50 flex justify-center items-center">
      <div className="bg-white rounded-lg overflow-hidden">
        <div className="bg-indigo-500 h-40 relative">
          <button
            className="absolute right-2 top-4 text-white hover:rotate-180 transition duration-300"
            onClick={() => setAddBook(false)}
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
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <svg
            className="absolute -bottom-1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
          >
            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,85.3C672,75,768,85,864,122.7C960,160,1056,224,1152,245.3C1248,267,1344,245,1392,234.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
        <h1 className="text-center  text-2xl font-semibold text-gray-900">
          Nuevo Libro
        </h1>
        {error! && failureReason?.toString()}
        <form
          action=""
          className="flex w-[400px] flex-col gap-5 items-center p-10"
          onSubmit={handleSubmit}
        >
          <input
            onChange={handleChange}
            name="title"
            className="p-2 border-[1px] border-gray-300 rounded-md
          outline-none caret-pink-500 focus:border-indigo-500 transition duration-300 w-full"
            type="text"
            placeholder="Titulo"
          />
          <input
            onChange={handleChange}
            name="author"
            className="p-2 border-[1px] border-gray-300 rounded-md
          outline-none caret-pink-500 focus:border-indigo-500 transition duration-300 w-full"
            type="text"
            placeholder="Autor"
          />
          <input
            onChange={handleChange}
            name="genre"
            className="p-2 border-[1px] border-gray-300 rounded-md
          outline-none caret-pink-500 focus:border-indigo-500 transition duration-300 w-full"
            type="text"
            placeholder="Genero"
          />
          <label
            htmlFor="img"
            className=" p-2 border-[1px] border-gray-300 rounded-md bg-gray-200 flex gap-2 group text-indigo-500 cursor-pointer hover:bg-indigo-500 hover:text-white transition duration-300 w-full"
          >
            <input
              id="img"
              type="file"
              className="hidden"
              onChange={(e) => {
                const file = e.target.files as FileList;
                setFile(file[0]);
              }}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-cloud-upload h-6 w-6 text-indigo-500 transition duration-300"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M7 18a4.6 4.4 0 0 1 0 -9a5 4.5 0 0 1 11 2h1a3.5 3.5 0 0 1 0 7h-1" />
              <polyline points="9 15 12 12 15 15" />
              <line x1="12" y1="12" x2="12" y2="21" />
            </svg>
            Subir imagen
          </label>
          <input
            onChange={handleChange}
            name="description"
            className="p-2 border-[1px] border-gray-300 rounded-md
          outline-none caret-pink-500 focus:border-indigo-500 transition duration-300 w-full"
            type="text"
            placeholder="Descripcion"
          />
          <input
            onChange={handleChange}
            name="price"
            className="p-2 border-[1px] border-gray-300 rounded-md
          outline-none caret-pink-500 focus:border-indigo-500 transition duration-300 w-full"
            type="number"
            placeholder="Precio"
          />
          <input
            onChange={handleChange}
            name="stock"
            className="p-2 border-[1px] border-gray-300 rounded-md
          outline-none caret-pink-500 focus:border-indigo-500 transition duration-300 w-full"
            type="number"
            placeholder="Unidades"
          />
          <button className=" bg-indigo-500 text-white py-2 px-4 rounded-md">
            {isLoading ? (
              <span className="h-4 w-4 rounded-full border-b-[2px] border-t-[2px] border-white inline-block animate-spin"></span>
            ) : (
              "Crear"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Share;
