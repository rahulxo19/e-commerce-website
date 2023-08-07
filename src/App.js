import React from "react";
import CartProvider from "./Store/CartProvider";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import AboutPage from "./components/AboutPage";
import ProductList from "./components/ProductList";
import Home from "./components/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavigationBar />,
    children: [
      { path: "about", element: <AboutPage /> },
      { path: "/", element: <ProductList /> },
      { path: "/home", element: <Home /> },
    ],
  },
]);

function App() {
  return (
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  );
}

export default App;
