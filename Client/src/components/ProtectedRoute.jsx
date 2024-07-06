import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import AuthContext from '../context/Authcontext';

const ProtectedRoute = ({ element: Element, ...rest }) => {
  const isAuthenticated = useContext(AuthContext)
  const location = useLocation();
  
  return isAuthenticated ? <Element {...rest} /> : <Navigate to="/login" state={{ from: location }} />;
};

export default ProtectedRoute;