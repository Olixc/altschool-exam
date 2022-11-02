import React from "react";
import { Navigate } from "react-router-dom";
import { UserAuth } from "../context/context";

const Protected = ({ children }) => {
  const { user } = UserAuth();

  if (!user) {
    return <Navigate to="/signin" />;
  }

  return children;
};

export default Protected;
