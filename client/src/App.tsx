import { useContext } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import { AuthContext } from "./context/authContext";
import { AuthContextType } from "./context/types";
import Home from "./pages/home/Home";
import Index from "./pages/index/Index";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";

function App() {
  const { currentUser } = useContext(AuthContext) as AuthContextType;

  const Layout = () => {
    return (
      <div>
        <Navbar />

        <Outlet />
      </div>
    );
  };

  const PrivateRoutes = ({ children }: { children: JSX.Element }) => {
    if (!currentUser) return <Navigate to="/" />;

    return children;
  };
  const router = createBrowserRouter([
    {
      path: "/home",
      element: (
        <PrivateRoutes>
          <Layout />
        </PrivateRoutes>
      ),
      children: [
        {
          path: "/home",
          element: <Home />,
        },
        {
          path: "*",
          element: <span>Not found</span>,
        },
      ],
    },
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Index />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
