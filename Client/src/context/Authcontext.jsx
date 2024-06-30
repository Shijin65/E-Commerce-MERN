import React, { createContext, useContext } from "react";

const AuthContext = createContext();
export const Authcontextprovider = ({ children }) => {

  //REGISTER USER ........................................................
  const RegisterUser = async (userData) => {
    console.log(userData);
  };

  //LOGIN USER ........................................................
  const LoginUser = async (userData) => {
    console.log(userData);
  };
  return (
    <AuthContext.Provider value={{ RegisterUser,LoginUser }}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
