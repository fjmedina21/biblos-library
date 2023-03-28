import { createContext, useEffect, useState } from "react";
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
  const [error, setError] = useState<boolean>(false);
  const [ok, setOk] = useState<boolean>(false);
  const [okSignUp, setOkSignUp] = useState<boolean>(false);
  const [logging, setLogging] = useState<boolean>(false);
  const [logged, setLogged] = useState<boolean>(
    JSON.parse(localStorage.getItem("logeado")!) || false
  );

  const signUp = async (user: User) => {
    const res = await axios.post("http://localhost:3000/auth/signup", user);
    setOkSignUp(true);
    console.log(res.data);
  };
  const login = async (user: { email: string; password: string }) => {
    setOkSignUp(false);
    setLogging(true);
    axios
      .post("http://localhost:3000/auth/login", user)
      .then((res) => {
        setLogged(true);
        setOk(true);
        setLogging(false);
        setCurrentUser(res.data.result.info);
      })
      .catch((err) => {
        setLogging(false);
        console.log(
          err.response.data.result.message || "Password or email are invalid"
        );
      });
  };

  const logout = () => {
    setLogged(false);
    setOk(false);
    setOkSignUp(false);
    setCurrentUser(null!);
  };
  useEffect(() => {
    if (logged) {
      localStorage.setItem("user", JSON.stringify(currentUser));
      localStorage.setItem("logeado", "true");
    } else {
      localStorage.setItem("logeado", "false");
      localStorage.removeItem("user");
    }
  }, [currentUser]);

  return (
    <AuthContext.Provider
      value={{
        signUp,
        logged,
        login,
        currentUser,
        logout,
        ok,
        okSignUp,
        logging,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
