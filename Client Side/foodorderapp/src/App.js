import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";

import Meals from "./components/Meals/Meals";
import CartProvider from "./store/CartProvider";
import Items from "./components/Items/Items";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import Layout from "./components/Layout/Layout";

function App() {
  const token = localStorage.getItem("token");
  const isLoggedIn = !!token;
  return (
    <Router>
      <CartProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          {isLoggedIn && (
            <Route
              path="/"
              element={
                <Layout>
                  <Meals />
                </Layout>
              }
            />
          )}
          {isLoggedIn && (
            <Route
              path="/items"
              element={
                <Layout>
                  <Items />
                </Layout>
              }
            />
          )}
        </Routes>
      </CartProvider>
    </Router>
  );
}

export default App;
