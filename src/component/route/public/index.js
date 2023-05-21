import React from "react";
import { Navigate } from "react-router-dom";

const PublicRoute = ({ component: Component, restricted, ...rest }) => {
  const isAuthenticated = JSON.parse(localStorage.getItem("login"));
  return isAuthenticated && restricted ? (
    <Navigate to="/dashboard" replace={true} />
  ) : (
    <Component {...rest} />
  );
};

export default PublicRoute;
