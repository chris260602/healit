import { Navigate, useRoutes } from "react-router-dom";
import Landing from "../views/Landing/Landing";
import Home from "../views/Home/Home";
import Login from "../views/Login/Login";
import SignUp from "../views/SignUp/SignUp";
import Program from "../views/Program/Program";

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
      path: "/meal",
      element: <Home />,
    },
    {
      path: "/workout",
      element: <Program />,
    },
    {
      path: "/article",
      element: <Home />,
    },
    {
      path: "/account",
      element: <Home />,
    },
    {
      path: "*",
      element: <Navigate to={"/"} replace />,
    },
  ]);
};
export default MainRoute;
