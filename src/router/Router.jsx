import { createBrowserRouter } from "react-router-dom";
import Root from "../loyout/Root";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import SingUp from "../pages/singUp/SingUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/singUp",
        element: <SingUp></SingUp>,
      },
    ],
  },
]);

export default router;
