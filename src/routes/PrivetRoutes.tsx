import React, { useContext, useEffect } from "react";
import { AuthContext } from "../contex/AuthProvider";
import { AuthContextType } from "../helper/type";
import { Navigate, useLocation } from "react-router-dom";

const PribetRoutes = ({ children }: { children: React.ReactNode }) => {
  const { loading, user } = useContext(
    AuthContext as React.Context<AuthContextType>
  );
  const location = useLocation();
  useEffect(() => {
    localStorage.setItem("location", location.pathname);
  }, [location.pathname]);

  if (loading) {
    return <h1 className="text-5xl">Loading</h1>;
  }
  if (!user) {
    return <Navigate to="/login" />;
  }
  return <>{children}</>;
};

export default PribetRoutes;
