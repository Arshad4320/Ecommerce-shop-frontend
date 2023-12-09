import { createBrowserRouter } from "react-router-dom";
import About from "../pages/About";
import Home from "../pages/Home";
import App from "../App";
import Login from "../pages/Login";
import Register from "../pages/Register";
import NotFound from "../pages/NotFound";
import Products from "../pages/Products";
import Carts from "../pages/Carts";
import ProductView from "../pages/ProductView";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },

      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/product/get-product-category/:id",
        element: <Products />,
      },
      {
        path: "/product/get-product",
        element: <ProductView />,
      },
      {
        path: "/cart/get-cart",
        element: <Carts />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
