import React from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ isLoggedIn, children}) {

  if (isLoggedIn === 'loading') return <>LOADING!!!</>


  return (isLoggedIn === 'logged') ? children : <Navigate to="/login" />
};

export default ProtectedRoute;
