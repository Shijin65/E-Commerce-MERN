import React, { createContext, useContext, useEffect, useState } from "react";
const VITE_API_URL = import.meta.env.VITE_API_URL;

import { useLocation, useNavigate } from "react-router-dom";

// Create Context
const AuthContext = createContext();

export const Authcontextprovider = ({ children }) => {
  const [user, setUser] = useState(null);
  const Navigate = useNavigate();

  const location = useLocation();
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));
    currentUser();
  }, []);

  // CURRENT USER ........................................................

  const currentUser = async () => {
    try {
      const res = await fetch(`${VITE_API_URL}/api/user/current`, {
        method: "GET",
        headers: { Authorization: `Bearer ${localStorage.getItem("auth")}` },
      });
      const userres = await res.json();
      console.log(userres);
      if (!userres.error) {
        if (
          location.pathname === "/login" ||
          location.pathname === "/register"
        ) {
          Navigate("/", { replace: true });
        } else {
          Navigate(location.pathname ? location.pathname : "/");
        }
      } else {
        console.log(userres.error);
        localStorage.clear();
        Navigate("/", { replace: true });
        setUser(null);
      }
    } catch (error) {
      console.log(error);
    }
  };

  //REGISTER USER ........................................................
  const RegisterUser = async (userData) => {
    const res = await fetch(`${VITE_API_URL}/api/user/register`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    const userres = await res.json();
    if (!userres.error) {
      setUser(userres.user);
      const from = location.state?.from?.pathname || "/";
      Navigate(from, { replace: true });
    }
  };

  //LOGIN USER ........................................................
  const LoginUser = async (userData) => {
    try {
      const res = await fetch(`${VITE_API_URL}/api/user/login`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(userData),
      });
      const userres = await res.json();
      if (!userres.error) {
        localStorage.setItem("auth", userres.accesstoken);
        localStorage.setItem("user", JSON.stringify(userres.user));
        setUser(userres.user);
        const from = location.state?.from?.pathname || "/";
        Navigate(from, { replace: true });
      } else {
        alert(userres.error);
        // console.log(error);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthContext.Provider value={{ RegisterUser, LoginUser, user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
