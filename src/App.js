import React from "react";
import CartProvider from "./Store/CartProvider";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import AboutPage from "./components/NavPages/AboutPage";
import ProductList from "./components/ProductList";
import Home from "./components/NavPages/Home";
import ContactUs from "./components/NavPages/ContactUs";
import ProductDetail from "./components/ProductDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavigationBar />,
    children: [
      { path: "about", element: <AboutPage /> },
      { path: "/", element: <ProductList /> },
      { path: "/home", element: <Home /> },
      { path: "/contactus", element: <ContactUs /> },
      { path: "/products/:productTitle", element: <ProductDetail /> },
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
