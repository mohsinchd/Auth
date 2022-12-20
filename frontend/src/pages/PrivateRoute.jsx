import React from "react";
import useAuth from "../hooks/useAuth";
import { Navigate, Outlet } from "react-router-dom";
const PrivateRoute = () => {
  const { checkingStatus, isLoggedIn } = useAuth();
  if (checkingStatus) {
    return <h1>Loading...</h1>;
  }

  return isLoggedIn ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoute;
