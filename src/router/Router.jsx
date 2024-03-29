import { createBrowserRouter } from "react-router-dom";
import Root from "../loyout/Root";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import SingUp from "../pages/singUp/SingUp";
import Checked from "../pages/checked/Checked";
import Booking from "../pages/Booking/Booking";
import PrivateRoute from "./privateRoute/PrivateRoute";

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
      {
        path: "/checked/:id",
        element: (
          <PrivateRoute>
            <Checked></Checked>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://cars-doctor-server-zeta.vercel.app/service/${params.id}`
          ),
      },
      {
        path: "/booking",
        element: (
          <PrivateRoute>
            <Booking></Booking>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
