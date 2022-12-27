import React from "react";
import { Navigate, Redirect, Route } from "react-router-dom";

function ProtectedRoute({ component: Component, ...rest }) {
  const authenticatedJWT = localStorage.getItem("jwt");
  console.log("this", authenticatedJWT); 
  return (
    <Route
      {...rest}
      render={(props) =>
        authenticatedJWT ? <Component {...props} /> : <Navigate  to="/login" />
      }
    />
  );
}

export default ProtectedRoute;