import { useQuery } from "@tanstack/react-query";
import request from "../../utils/request";
import Book from "../book/Book";
import { BookModel } from "../../utils/book.model";
import { useState } from "react";

const Books = () => {
  const { data, isLoading, error, refetch } = useQuery(["book"], () => {
    /*     const res = await request.get("books");
    return res.data.result.books; */
    return request.get("books").then((result) => {
      return result.data.result.books;
    });
  });
  const [title, setTitle] = useState<string>("");
  const {
    data: datos,
    refetch: refer,
    isLoading: cargando,
  } = useQuery(["oneBook"], () => {
    /*     const res = await request.get("books");
    return res.data.result.books; */
    return request.get("books/" + title).then((result) => {
      return result.data.result.book;
    });
  });
  return (
    <div className=" container mx-auto ">
      <div className="flex justify-center ">
        <div className="border-[1px] border-gray-200 -mt-8 bg-white flex gap-5  p-5 rounded-lg">
          <div className="rigt flex gap-2 items-center">
            <span
              className="cursor-pointer"
              onClick={() => {
                title === "" ? refetch() : refer();
              }}
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
            </span>
            <input
              type="text"
              className="outline-none px-2 caret-indigo-500"
              placeholder="Buscas algo?"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className=" h-full w-[2px] rounded-full bg-gray-300"></div>
          <div className="left">
            <select name="Gender" className="p-1 bg-transparent">
              <option value="Gender">Generos</option>
              <option value="Gender">Novela</option>
              <option value="Gender">Drama</option>
            </select>
          </div>
        </div>
      </div>
      <div className="my-10 px-10 md:px-0">
        {isLoading ? (
          <div>Loading...</div>
        ) : datos ? (
          cargando ? (
            "cargando..."
          ) : (
            <Book book={datos} key={datos.uId} />
          )
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  2xl:grid-cols-4 gap-5">
            {data.map((e: BookModel) => (
              <Book book={e} key={e.uId} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Books;
