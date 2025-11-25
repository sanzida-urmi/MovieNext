'use client'
import { use, useState } from "react";
import { AuthContext } from "./AuthProvider/AuthContext";
import { useRouter } from "next/navigation";

function PrivateRoute({children}) {
    const router = useRouter();
   const {user,loading, setLoading} =use(AuthContext);
  if(loading){
    return (
      <h1>loading</h1>
    )
  }
 
  if(!user){
    return router.push("/login");
  }

  return children;
}

export default PrivateRoute
