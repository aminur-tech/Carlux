import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "../Layouts/RootLayout/Root";
import Dashboard from "../Pages/Dashboard";
import ProductDetails from "../Components/Products/ProductDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/product/:id",
        element: <ProductDetails />,
      },
    ],
  },
]);