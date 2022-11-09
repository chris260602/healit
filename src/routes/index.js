import { Navigate, useRoutes } from "react-router-dom";
import Login from "../views/Login/Login"
import Home from "../views/Home/Home";
import SignUp from "../views/SignUp/SignUp";
import Program from "../views/Program/Program";
import ProgramType from "../views/ProgramType/ProgramType";
import Article from "../views/Article/Article";
import Meal from "../views/Meal/Meal";
import Account from "../views/Account/Account";

const MainRoute = () => {
  return useRoutes([
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/Home",
      element: <Home />,
    },
    {
      path: "/register",
      element: <SignUp />,
    },
    {
      path: "/meal",
      element: <Meal />,
    },
    {
      path: "/workout",
      element: <Program />,
    },
    {
      path: "/workout/:type",
      element: <ProgramType />,
    },
    {
      path: "/article",
      element: <Article />,
    },
    {
      path: "/account",
      element: <Account />,
    },
    {
      path: "*",
      element: <Navigate to={"/"} replace />,
    },
  ]);
};
export default MainRoute;
