import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./AppRoutes";

import { Authcontextprovider } from "./context/Authcontext";
import { CartProvider } from "./context/CartContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <Router>
    <Authcontextprovider>
      <CartProvider>
        <AppRoutes />
      </CartProvider>
    </Authcontextprovider>
  </Router>
  // </React.StrictMode>
);
