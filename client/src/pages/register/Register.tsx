import { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContextType, User } from "../../context/types";
import { AuthContext } from "../../context/authContext";
const Register = () => {
  const { signUp, okSignUp } = useContext(AuthContext) as AuthContextType;
  const navigate = useNavigate();
  const [error, setError] = useState({
    firstName: false,
    lastName: false,
    email: false,
    password: false,
    confirmPassword: false,
    notMatch: false,
  });
  const [registrando, setRegistrando] = useState<boolean>(false);
  const [user, setUser] = useState<User>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser((prev: User) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!Object.values(user).every((v) => v !== "")) {
      setError({
        firstName: user.firstName === "" ? true : false,
        lastName: user.lastName === "" ? true : false,
        email: user.email === "" ? true : false,
        password: user.password === "" ? true : false,
        confirmPassword: user.confirmPassword === "" ? true : false,
        notMatch: false,
      });
      return;
    }
    if (user.password !== user.confirmPassword) {
      setError({
        firstName: false,
        lastName: false,
        email: false,
        password: false,
        confirmPassword: false,
        notMatch: true,
      });
      return;
    }

    setError({
      firstName: false,
      lastName: false,
      email: false,
      password: false,
      confirmPassword: false,
      notMatch: false,
    });
    signUp(user);
    setRegistrando(true);
  };
  useEffect(() => {
    if (okSignUp) navigate("/login");
  }, [okSignUp]);
  return (
    <div className="flex min-h-screen justify-center selection:bg-rose-400 selection:text-white">
      <div className="right px- hidden flex-1 items-center justify-center bg-[url('https://images.pexels.com/photos/13159182/pexels-photo-13159182.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover md:flex">
        <div className="p-5">
          <div className="flex flex-col gap-3 rounded-xl px-3 py-14 leading-10 text-white backdrop-blur-lg">
            <h1 className="mb-5 text-[3rem] font-bold">Sign Up</h1>
            <span className="text-[1.7rem] font-medium tracking-tight">
              Conviértete en un miembro de nuestra biblioteca virtual y descubre
              un universo de conocimiento y entretenimiento. registrándote hoy
              mismo y disfruta de la lectura sin límites
            </span>
          </div>
        </div>
      </div>

      <div className="left flex flex-1 items-center my-auto w-full flex-col ">
        <div className="logo  relative mb-7">
          <div className="absolute h-[1.5rem] w-[1.5rem] bg-amber-300 -top-2 right-4">
            <div className="circle absolute top-0 left-0 h-[0.8rem] w-[0.8rem] rounded-br-full bg-white"></div>

            <div className="circle absolute top-0 right-0 h-[0.8rem] w-[0.8rem] rounded-bl-full bg-white"></div>

            <div className="circle absolute bottom-0 right-0 h-[0.8rem] w-[0.8rem] rounded-tl-full bg-white"></div>
            <div className="circle absolute bottom-0 left-0 h-[0.8rem] w-[0.8rem] rounded-tr-full bg-white"></div>
          </div>

          <div className="absolute h-[1.5rem] w-[1.5rem] bg-amber-300 -top-4 left-2">
            <div className="circle absolute top-0 left-0 h-[0.8rem] w-[0.8rem] rounded-br-full bg-white"></div>

            <div className="circle absolute top-0 right-0 h-[0.8rem] w-[0.8rem] rounded-bl-full bg-white"></div>

            <div className="circle absolute bottom-0 right-0 h-[0.8rem] w-[0.8rem] rounded-tl-full bg-white"></div>
            <div className="circle absolute bottom-0 left-0 h-[0.8rem] w-[0.8rem] rounded-tr-full bg-white"></div>
          </div>

          <div className="absolute h-[1.5rem] w-[1.5rem] bg-amber-300  -right-5 top-3">
            <div className="circle absolute top-0 left-0 h-[0.8rem] w-[0.8rem] rounded-br-full bg-white"></div>

            <div className="circle absolute top-0 right-0 h-[0.8rem] w-[0.8rem] rounded-bl-full bg-white"></div>

            <div className="circle absolute bottom-0 right-0 h-[0.8rem] w-[0.8rem] rounded-tl-full bg-white"></div>
            <div className="circle absolute bottom-0 left-0 h-[0.8rem] w-[0.8rem] rounded-tr-full bg-white"></div>
          </div>

          <div className="absolute h-[1.5rem] w-[1.5rem] bg-amber-300  top-2 -left-6">
            <div className="circle absolute top-0 left-0 h-[0.8rem] w-[0.8rem] rounded-br-full bg-white"></div>

            <div className="circle absolute top-0 right-0 h-[0.8rem] w-[0.8rem] rounded-bl-full bg-white"></div>

            <div className="circle absolute bottom-0 right-0 h-[0.8rem] w-[0.8rem] rounded-tl-full bg-white"></div>
            <div className="circle absolute bottom-0 left-0 h-[0.8rem] w-[0.8rem] rounded-tr-full bg-white"></div>
          </div>

          <div className="absolute h-[1.5rem] w-[1.5rem] bg-amber-300 -bottom-4 left-2">
            <div className="circle absolute top-0 left-0 h-[0.8rem] w-[0.8rem] rounded-br-full bg-white"></div>

            <div className="circle absolute top-0 right-0 h-[0.8rem] w-[0.8rem] rounded-bl-full bg-white"></div>

            <div className="circle absolute bottom-0 right-0 h-[0.8rem] w-[0.8rem] rounded-tl-full bg-white"></div>
            <div className="circle absolute bottom-0 left-0 h-[0.8rem] w-[0.8rem] rounded-tr-full bg-white"></div>
          </div>

          <div className="absolute h-[1.5rem] w-[1.5rem] bg-amber-300 -bottom-3 right-6">
            <div className="circle absolute top-0 left-0 h-[0.8rem] w-[0.8rem] rounded-br-full bg-white"></div>

            <div className="circle absolute top-0 right-0 h-[0.8rem] w-[0.8rem] rounded-bl-full bg-white"></div>

            <div className="circle absolute bottom-0 right-0 h-[0.8rem] w-[0.8rem] rounded-tl-full bg-white"></div>
            <div className="circle absolute bottom-0 left-0 h-[0.8rem] w-[0.8rem] rounded-tr-full bg-white"></div>
          </div>

          <span className="text-[2.5rem] font-bold relative z-40  ">
            Biblos
          </span>
        </div>
        <form
          action=""
          className="flex w-3/4 xl:w-1/2 relative flex-col items-center gap-6 px-10 md:px-0"
          onSubmit={handleSubmit}
        >
          <h1 className="text-[1.5rem] font-bold md:text-[2rem]">
            Create an account
          </h1>

          <input
            className={`w-full rounded-lg border-[1px]  ${
              error.firstName ? "border-rose-500" : "border-gray-300"
            } caret-pink-400 focus:border-indigo-600 transition duration-500 p-3 outline-none invalid:border-red-500 `}
            type="text"
            name="firstName"
            onChange={handleOnChange}
            placeholder="Firstname"
          />
          <input
            className={`w-full rounded-lg border-[1px]  ${
              error.lastName ? "border-rose-500" : "border-gray-300"
            } caret-pink-400 focus:border-indigo-600 transition duration-500 p-3 outline-none invalid:border-red-500 `}
            type="text"
            name="lastName"
            onChange={handleOnChange}
            placeholder="Lastname"
          />
          <input
            className={`w-full rounded-lg border-[1px]  ${
              error.email ? "border-rose-500" : "border-gray-300"
            } caret-pink-400 focus:border-indigo-600 transition duration-500 p-3 outline-none invalid:border-red-500 `}
            type="text"
            name="email"
            onChange={handleOnChange}
            placeholder="Email"
          />
          <input
            className={`w-full rounded-lg border-[1px]  ${
              error.password ? "border-rose-500" : "border-gray-300"
            } caret-pink-400 focus:border-indigo-600 transition duration-500 p-3 outline-none invalid:border-red-500 `}
            type="password"
            name="password"
            onChange={handleOnChange}
            placeholder="Password"
          />
          <input
            className={`w-full rounded-lg border-[1px]  ${
              error.confirmPassword
                ? "border-rose-500"
                : error.notMatch
                ? "border-amber-500"
                : "border-gray-300"
            } caret-pink-400 focus:border-indigo-600 transition duration-500 p-3 outline-none invalid:border-red-500 `}
            type="password"
            name="confirmPassword"
            onChange={handleOnChange}
            placeholder="Confirm password"
          />
          {error.notMatch && (
            <span className="self-start text-amber-500 text-sm">
              Passwords doesn't match
            </span>
          )}

          <button className="w-full rounded-lg bg-indigo-600 p-3 font-medium text-white">
            {registrando ? (
              <span className="h-5 w-5 rounded-full border-b-[2px] border-t-[2px] border-white inline-block animate-spin"></span>
            ) : (
              "Sign Up"
            )}
          </button>
          <span>
            Do you have an account?{" "}
            <Link to="/login" className="text-blue-500 underline">
              Sign In
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Register;
