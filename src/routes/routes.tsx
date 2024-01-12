import Login from "../components/Front-End/HomePage/Auth/Login";

import { createBrowserRouter } from "react-router-dom";
import HomePage from "../components/Front-End/HomePage/HomePage";
import Register from "../components/Front-End/HomePage/Auth/Register";



const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage setMode={() => {}} mode="light"  />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);
export default router;
