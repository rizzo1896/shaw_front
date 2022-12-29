import { createBrowserRouter } from "react-router-dom";
import { Dashboard } from "../core/Dashboard";
import Home from "../pages/home";
import UserDetails from "../pages/userDetails";

export const routers = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/user/:id",
        element: <UserDetails />,
      },
    ],
  },
]);
