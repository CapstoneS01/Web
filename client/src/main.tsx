import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Login from "./pages/Login";
import Error from "./pages/Error";
import { LiveFootage } from "./pages/LiveFootage";
import { GenerateEncoding } from "./pages/GenerateEncoding";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Welcome />,
  },
  {
    path: "*",
    element: <Error />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/live",
    element: <LiveFootage />,
  },
  {
    path: "/generate-encoding",
    element: <GenerateEncoding />,
  },
]);


ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
