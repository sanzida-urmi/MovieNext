'use client'
import { use, useState } from "react";
// import { Navigate, useLocation } from "react-router";
import { AuthContext } from "./AuthProvider/AuthContext";
import { useRouter } from "next/navigation";
// import { AuthContext } from "../context/AuthContext";

function PrivateRoute({children}) {
    const router = useRouter();
//   const location = useLocation();
   const {user,loading, setLoading} =use(AuthContext);
  if(loading){
    return (
      <h1>loading</h1>
    )
  }
 
  if(!user){
    // return <Navigate to="/login" state={{ from: location }} replace />
    return router.push("/login");
  }

  return children;
}

export default PrivateRoute
