import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useLocation } from "react-router-dom";
import request from "../../utils/request";

const BookDetails = () => {
  const { pathname } = useLocation();
  const { isLoading, data } = useQuery(["OneBook"], () => {
    return request.get(`books/${pathname.split('/')[3]}`).then((result) => {
      return result.data.result.book;
    });
  });
  return (
    <div className="flex justify-center items-center mt-10">
      {isLoading ? (
        "Loading"
      ) : (
        <div className="container mx-auto justify-center flex items-center gap-20 ">
          <img
            className="rounded-md h-[600px] w-[500px] object-cover"
            src={data.cover.secure_url}
            alt=""
          />

          <div className="info flex flex-col self-start gap-3 w-[600px]">
            <div className="p-5 rounded-md flex-col  border-[1px] border-gray-100  text-[gray]">
              <h1 className="text-[2rem] font-bold ">
                {data.title}
              </h1>
              <div className="flex items-center gap-2">
                <span className="text-[1.5rem] font-medium">{data.author}</span>
                <div className="star">
                  <img className="h-5 w-5" src="/img/star.png" alt="" />
                </div>
                <div className="star">
                  <img className="h-5 w-5" src="/img/star.png" alt="" />
                </div>
                <div className="star">
                  <img className="h-5 w-5" src="/img/star.png" alt="" />
                </div>
                <div className="star">
                  <img className="h-5 w-5" src="/img/star.png" alt="" />
                </div>
                <div className="star">
                  <img className="h-5 w-5" src="/img/star.png" alt="" />
                </div>
              </div>
              <p className="text-gray-600 my-10">{data.description}</p>
              <div className="flex items-center gap-10">
                <span className="bg-gray-100 rounded-lg p-1 text-gray-600">
                  {data.genre}
                </span>
                <span className="text-black text-2xl">RD${data.price}</span>
              </div>
            </div>

            <div className="p-5 rounded-md   border-[1px] border-gray-100  text-[gray] flex gap-10 text-xl ">
              <span>Cantidad disponibles</span>
              <span>{data.stock}</span>
            </div>
            <button className="bg-indigo-500 p-3 rounded-md text-white">
              Comprar ahora
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookDetails;
