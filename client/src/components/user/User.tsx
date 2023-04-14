import React from "react";

const User = ({ user }: { user: any }) => {

  return (
    <div className="flex flex-col items-start w-[300px] border-[1px] border-gray-200 p-5 rounded-lg ">
      <span>{user.firstName}</span>
      <span>{user.lastName}</span>
      <span>{user.email}</span>
    </div>
  );
};

export default User;
