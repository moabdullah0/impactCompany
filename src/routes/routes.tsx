import Login from "../components/Front-End/Auth/Login";
import { createBrowserRouter } from "react-router-dom";
import HomePage from "../components/Front-End/HomePage/HomePage";
import Register from "../components/Front-End/Auth/Register";
import DashboardHome from "../components/Dashboard/DashboardHome/DashboardHome";
import TraningAdd from "../components/Front-End/Trainings/TraningAdd";
import CenterAdd from "../components/Dashboard/Centers/CenterAdd";
import PostsList from "../components/Front-End/Poststest/PostsList";
import Log from "../components/Front-End/Auth/log";
import Reg from "../components/Front-End/Auth/reg";

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
