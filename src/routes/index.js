import { Navigate, useRoutes } from "react-router-dom";
import Landing from "../views/Landing/Landing";
import Home from "../views/Home/Home";

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
      element: <Home />,
    },
    {
      path: "*",
      element: <Navigate to={"/"} replace />,
    },
  ]);
};
export default MainRoute;
