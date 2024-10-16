import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element }) => {
  const checkTokenExpiration = () => {
    const expirationTime = localStorage.getItem('tokenExpiration');
    if (expirationTime && new Date().getTime() > expirationTime) {
      localStorage.removeItem('token'); // Remove token
      localStorage.removeItem('tokenExpiration'); // Remove expiration
      return false; // Token is expired
    }
    return true; // Token is still valid
  };

  const isAuthenticated = checkTokenExpiration();
  const token = localStorage.getItem('token'); // Check if the user is authenticated

  return isAuthenticated && token ? element : <Navigate to="/login" />; // Redirect to login if not authenticated
};

export default ProtectedRoute;