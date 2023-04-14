import { useContext } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Navbar from "./components/navbar/Navbar";
import { AuthContext } from "./context/authContext";
import { AuthContextType } from "./context/types";
import Home from "./pages/home/Home";
import Index from "./pages/index/Index";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import UnLoggedLayout from "./components/unloggedLayout/UnLoggedLayout";
import BookDetails from "./pages/bookDetails/BookDetails";
import Profile from "./pages/profile/Profile";
import UserList from "./pages/userList/UserList";

function App() {
  const queryClient = new QueryClient();
  const { currentUser } = useContext(AuthContext) as AuthContextType;

  const Layout = () => {
    return (
      <QueryClientProvider client={queryClient}>
        <div>
          <Navbar />

          <Outlet />
        </div>
      </QueryClientProvider>
    );
  };
  const NoLoggedLayout = () => {
    return (
      <>
        <UnLoggedLayout />
        <Outlet />
      </>
    );
  };
  const PrivateRoutes = ({ children }: { children: JSX.Element }) => {
    if (!currentUser) return <Navigate to="/" />;

    return children;
  };

  const PrivateListRoutes = ({ children }: { children: JSX.Element }) => {
    if (!currentUser.isAdmin) return <Navigate to="/home" />;

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
          path: "/home/book/:id",
          element: <BookDetails />,
        },
        {
          path: "/home/profile",
          element: <Profile />,
        },
        {
          path: "/home/userList",
          element: (
            <PrivateListRoutes>
              <UserList />
            </PrivateListRoutes>
          ),
        },
        {
          path: "*",
          element: <span>Not found</span>,
        },
      ],
    },
    {
      path: "/",
      element: <NoLoggedLayout />,
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
