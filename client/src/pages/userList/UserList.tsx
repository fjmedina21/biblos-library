import { useQuery } from "@tanstack/react-query";
import React from "react";
import request from "../../utils/request";
import User from "../../components/user/User";

const UserList = () => {
  const { data, isLoading } = useQuery(["users"], () => {
    return request.get("users").then((result) => {
      return result.data.result.users;
    });
  });
  return (
    <div className="flex justify-center mt-10">
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-2">
          {isLoading
            ? "Cargando"
            : data.map((user: any) => <User user={user} />)}
        </div>
      </div>
    </div>
  );
};

export default UserList;
