import React, { createContext, useContext, useEffect, useState } from "react";
const VITE_API_URL = import.meta.env.VITE_API_URL;
const AuthContext = createContext();
import { useLocation, useNavigate } from "react-router-dom";

export const Authcontextprovider = ({ children }) => {
  const [user, setuser] = useState(null);
  const Navigate = useNavigate();

  useEffect(() => {
    setuser(JSON.parse(localStorage.getItem("user")));
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
          Navigate("/home", { replace: true });
        } else {
          Navigate(location.pathname ? location.pathname : "/");
        }
      } else {
        console.log(userres.error);
        localStorage.clear();
        Navigate("/", { replace: true });
        setuser(null);
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
      setuser(userres.user);
    }
  };

  //LOGIN USER ........................................................
  const LoginUser = async (userData) => {
    const res = await fetch(`${VITE_API_URL}/api/user/login`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    const userres = await res.json();
    if (!userres.error) {
      console.log();
      localStorage.setItem("auth", userres.accesstoken);
      localStorage.setItem("user", JSON.stringify(userres.user));
      setuser(userres.user);
      Navigate("/home", { replace: true });
    }
  };

  return (
    <AuthContext.Provider value={{ RegisterUser, LoginUser, user }}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
