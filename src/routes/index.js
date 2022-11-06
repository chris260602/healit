import { Navigate, useRoutes } from "react-router-dom";
import Landing from "../views/Landing/Landing";
import Home from "../views/Home/Home";
import Login from "../views/Login/Login";
import SignUp from "../views/SignUp/SignUp";

const MainRoute = () => {
  return useRoutes([
    {
      path: "/",
      element: <Landing />,
    },
    {
      path: "/home",
      element: <Home />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <SignUp />,
    },
    {
      path: "*",
      element: <Navigate to={"/"} replace />,
    },
  ]);
};
export default MainRoute;
