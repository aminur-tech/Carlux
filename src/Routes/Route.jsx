import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "../Layouts/RootLayout/Root";
import Dashboard from "../Pages/Dashboard/Dashboard";
import ProductDetails from "../Components/Products/ProductDetails";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";

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
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      }
    ],
  },
]);