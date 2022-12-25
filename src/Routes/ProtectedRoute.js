import React from "react";
import { Redirect, Route } from "react-router-dom";

function ProtectedRoute({ component: Component, ...rest }) {
  const authenticatedJWT = localStorage.getItem("jwt");
  console.log("this", authenticatedJWT); 
  return (
    <Route
      {...rest}
      render={(props) =>
        authenticatedJWT ? <Component {...props} /> : <Redirect to="/signin" />
      }
    />
  );
}

export default ProtectedRoute;