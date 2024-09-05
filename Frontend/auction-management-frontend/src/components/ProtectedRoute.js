import React from "react";
import { Navigate } from "react-router-dom";

// Simulating a function that checks if the user is authenticated and an admin
const isAuthenticated = () => {
  // This is just a placeholder. You need to replace it with real authentication logic.
  const user = JSON.parse(localStorage.getItem("user"));
  return user && user.isAuthenticated;
};

const isAdmin = () => {
  // You can add more logic here to check for the admin role
  const user = JSON.parse(localStorage.getItem("user"));
  return user && user.role === "admin";
};

const ProtectedRoute = ({ element, isAdminRequired }) => {
  if (!isAuthenticated()) {
    // If not authenticated, redirect to login
    return <Navigate to="/login" />;
  }

  if (isAdminRequired && !isAdmin()) {
    // If admin access is required and the user is not an admin, deny access
    return <h1>Access Denied: Admins Only</h1>;
  }

  return element;
};

export default ProtectedRoute;
