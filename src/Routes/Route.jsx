import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "../Layouts/RootLayout/Root";
import Dashboard from "../Pages/Dashboard/Dashboard";
import ProductDetails from "../Components/Products/ProductDetails";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import Error from "../Components/Error/Error";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error/>,
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