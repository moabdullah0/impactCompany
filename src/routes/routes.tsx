import { createBrowserRouter } from "react-router-dom";
import HomePage from "../components/Front-End/HomePage/HomePage";

import DashboardHome from "../components/Dashboard/DashboardHome/DashboardHome";
import TraningAdd from "../components/Front-End/Trainings/TraningAdd";
import CenterAdd from "../components/Dashboard/Centers/CenterAdd";
import PostsList from "../components/Front-End/Poststest/PostsList";
import Log from "../components/Auth/Login";
import Reg from "../components/Auth/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/login",
    // element: <Login />,
    element: <Log />,
  },
  {
    path: "/register",
    // element: <Register />,
    element: <Reg />,
  },
  {
    path: "/dash",

    element: <DashboardHome />,
  },
  {
    path: "/addtraining",

    element: <TraningAdd />,
  },
  {
    path: "/addcenter",

    element: <CenterAdd />,
  },
  {
    path: "/post",

    element: <PostsList />,
  },
]);
export default router;
