import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./AppRoutes";

import { Authcontextprovider } from "./context/Authcontext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Authcontextprovider>
        <AppRoutes />
      </Authcontextprovider>
    </Router>
  </React.StrictMode>
);
