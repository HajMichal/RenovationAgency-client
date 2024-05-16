import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ErrorPage } from "../components/";
import Advertisements from "./Advertisements";
import SingleAd from "./Advertisements/SingleAd";
import Register from "./Auth/Register";
import SignIn from "./Auth/Signin";
import "./main.sass";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { CreateAd } from "./Advertisements/CreateAd";
import Profile from "./Profile";
import ContractorProfile from "./Profile/ContractorProfile";
import UserAds from "./Profile/UserAds";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/profile/contractor",
    element: <ContractorProfile />,
  },
  {
    path: "/yourAds",
    element: <UserAds />,
  },
  {
    path: "/createAd",
    element: <CreateAd />,
  },
  {
    path: "/advertisements",
    element: <Advertisements />,
  },
  {
    path: "/advertisements/:id",
    element: <SingleAd />,
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

export const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MantineProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </MantineProvider>
  </React.StrictMode>
);
