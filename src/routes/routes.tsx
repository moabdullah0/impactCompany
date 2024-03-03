import { createBrowserRouter } from "react-router-dom";
import HomePage from "../components/Front-End/HomePage/HomePage";

import DashboardHome from "../components/Dashboard/DashboardHome/DashboardHome";
import PosTraining from "../components/Dashboard/Trainings/PosTraining";
import PostCenters from "../components/Dashboard/Centers/PostCenters";
import Log from "../components/Auth/Login";
import Reg from "../components/Auth/Register";
import ListCenter from "../components/Dashboard/Centers/ListCenter";
import UpdateCenter from "../components/Dashboard/Centers/UpdateCenter";
import TableTraining from "../components/Dashboard/Trainings/TrainingHome";
import UpdateTraining from "../components/Dashboard/Trainings/UpdateTraining";


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/login",

    element: <Log />,
  },
  {
    path: "/register",

    element: <Reg />,
  },
  {
    path: "/dash",

    element: <DashboardHome />,
  },
  {
    path: "/addtraining",

    element: <PosTraining />,
  },
  {
    path: "/training/Edit/:id",

    element: <UpdateTraining />,
  },
  {
    path: "/ShowTraining",

    element: <TableTraining />,
  },
  {
    path: "/center",

    element: <ListCenter />,
  },
  {
    path: "/center/add",

    element: <PostCenters />,
  },
  {
    path: "/center/edit/:id",

    element: <UpdateCenter />,
  },
 
  
]);
export default router;
