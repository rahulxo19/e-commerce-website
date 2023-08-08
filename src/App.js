import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import NavigationBar from "./components/NavigationBar";
import AboutPage from "./components/NavPages/AboutPage";
import ProductList from "./components/ProductList";
import Home from "./components/NavPages/Home";
import ContactUs from "./components/NavPages/ContactUs";
import ProductDetail from "./components/ProductDetail";
import AuthForm from "./components/Auth/AuthForm";
import AuthContext from "./Store/auth-context";

function App() {
  const authCtx = useContext(AuthContext);
  return (
    <Router>
      <NavigationBar />
      <Routes>
        {authCtx.isLoggedIn ? (
          <Route path="/" element={<ProductList />} />
        ) : (
          <Route path="/" element={<Navigate to="/login" />} />
        )}
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/products/:productTitle" element={<ProductDetail />} />
        <Route path="/login" element={<AuthForm />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
