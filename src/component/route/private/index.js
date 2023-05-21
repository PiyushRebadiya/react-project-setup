import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = JSON.parse(localStorage.getItem("login"));
  return isAuthenticated ? (
    <Component {...rest} />
  ) : (
    <Navigate to="/" replace={true} />
  );
};

export default PrivateRoute;
