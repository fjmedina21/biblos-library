import { useState, useContext, FormEvent } from "react";
import { AuthContextType } from "../../context/types";
import { AuthContext } from "../../context/authContext";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [empty, setEmpty] = useState({ email: false, password: false });
  const navigate = useNavigate();
  const [logging, setLogging] = useState<boolean>(false);
  const [password, setPassword] = useState<string>("");
  const { login } = useContext(AuthContext) as AuthContextType;
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) {
      setEmpty({ email: true, password: false });
      return;
    }
    if (!password) {
      setEmpty({ email: false, password: true });
      return;
    }
    setEmpty({ email: false, password: false });

    login({ email, password });
    setLogging(true);
    setTimeout(() => {
      navigate("/");
    }, 1500);
  };
  return (
    <div className="flex min-h-screen justify-center selection:bg-rose-400 selection:text-white">
      <div className="left flex flex-1 items-center my-auto flex-col">
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

          <span className="text-[2.5rem] font-bold relative z-40 ">Biblos</span>
        </div>
        <form
          action=""
          className="flex w-3/4 xl:w-1/2  flex-col items-center gap-6 px-10 md:px-0"
          onSubmit={handleSubmit}
        >
          <h1 className="text-[1.5rem] font-bold md:text-[2rem]">
            Login in to your account
          </h1>
          <input
            className={`w-full rounded-lg border-[1px] ${
              empty.email ? "border-rose-500" : "border-gray-300"
            } caret-pink-400 focus:border-indigo-600 transition duration-500 p-3 outline-none`}
            type="text"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className={`w-full rounded-lg border-[1px] ${
              empty.password ? "border-rose-500" : "border-gray-300"
            } caret-pink-400 focus:border-indigo-600 transition duration-500 p-3 outline-none`}
            type="text"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="w-full rounded-lg bg-indigo-600 p-3 font-medium text-white">
            {logging ? (
              <span className="h-5 w-5 rounded-full border-b-[2px] border-t-[2px] border-white inline-block animate-spin"></span>
            ) : (
              "  Sign In"
            )}
          </button>
          <span>
            Don't have an account?{" "}
            <Link to="/register" className="text-blue-500 underline">
              Sign Up
            </Link>
          </span>
        </form>
      </div>
      <div className="right px- hidden flex-1 items-center justify-center bg-[url('https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover md:flex">
        <div className="p-5">
          <div className="flex flex-col gap-3 rounded-xl px-3 py-14 leading-10 text-white backdrop-blur-lg">
            <h1 className="mb-5 text-[3rem] font-bold">Login</h1>
            <span className="text-[1.7rem] font-medium tracking-tight">
              Un buen libro es como un buen amigo, ¡accede a tu cuenta para
              encontrar a ambos! Sumérgete en un mundo de aventuras literarias
              con nuestro inicio de sesión
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
