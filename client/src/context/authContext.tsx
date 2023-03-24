import { createContext, useState } from "react";
import { User } from "./types";
import axios from "axios";
export const AuthContext = createContext({});
interface Props {
  children: React.ReactNode;
}
export const AuthContextProvider: React.FC<Props> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User>(
    JSON.parse(localStorage.getItem("user")!) || null
  );

  const signUp = async (user: User) => {
    const res = await axios.post("http://localhost:3000/auth/signup", user);
    console.log(res.data);
  };
  const login = async (user: { emial: string; password: string }) => {
    const res = await axios.post("http://localhost:3000/auth/login", user);
    localStorage.setItem("user", JSON.stringify(res.data.results.user));
  };

  return (
    <AuthContext.Provider value={{ signUp, login }}>
      {children}
    </AuthContext.Provider>
  );
};
