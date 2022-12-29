import { createBrowserRouter } from "react-router-dom";
import { Dashboard } from "../core/Dashboard";

export const routers = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    children: [],
  },
]);
