import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = /* logic to check if user is authenticated */;

  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;