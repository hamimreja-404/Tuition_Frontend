// src/components/Common/ProtectedRoute.jsx

import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
  // Check for an auth token in local storage
  const isAuthenticated = localStorage.getItem('adminAuthToken');

  // If authenticated, render the nested component (the dashboard).
  // Otherwise, redirect to the login page.
  return isAuthenticated ? <Outlet /> : <Navigate to="/adminLogin" />;
};

export default ProtectedRoute;