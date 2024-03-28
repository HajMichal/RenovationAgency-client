import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ErrorPage } from "../components/";
import "./main.css";
import Advertisements from "./Advertisements";
import SingleAd from "./Advertisements/[SingleAd]";
import Register from "./Auth/Register";
import SignIn from "./Auth/Signin";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/advertisements",
    element: <Advertisements />,
    children: [
      {
        path: ":adid",
        element: <SingleAd />,
      },
    ],
  },
  {
    path: "/auth",
    children: [
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "signin",
        element: <SignIn />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
