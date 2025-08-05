// src/Router/router.jsx

import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import ProductList from "../Pages/ProductList";
import ProductDetail from "../Pages/ProductDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />, 
    children: [
      {
        index: true,
        element: <ProductList />,
      },
      {
        path: "productdetails/:id",
        element: <ProductDetail />,
      },
    ],
  },
]);

export default router;
