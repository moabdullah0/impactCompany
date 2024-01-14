import Login from "../components/Front-End/HomePage/Auth/Login";

import { createBrowserRouter } from "react-router-dom";
import HomePage from "../components/Front-End/HomePage/HomePage";
import Register from "../components/Front-End/HomePage/Auth/Register";

import DashboardHome from "../components/Dashboard/DashboardHome/DashboardHome";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/dash",

    element: <DashboardHome />,
  },
]);
export default router;
