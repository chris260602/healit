import { Navigate, useRoutes } from "react-router-dom";
import Login from "../views/Login/Login"
import Home from "../views/Home/Home";
import Register from "../views/Register/Register";

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
      element: <Register />,
    },
    {
      path: "*",
      element: <Navigate to={"/"} replace />,
    },
  ]);
};
export default MainRoute;
