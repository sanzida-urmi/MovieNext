// "use client"
// import React from 'react'
// import { SessionProvider } from "next-auth/react"


// export default function AuthProvider({children}) {
//   return (
//     <div>
//       <SessionProvider>
//         {children}
//       </SessionProvider>
//     </div>
//   )
// }

"use client"

import React, { useEffect, useState } from 'react'
import {createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth';
import { AuthContext } from './AuthContext';
import { auth } from '@/firebase/Firebase.config';
// import { auth } from '../firebase/Firebase.config';

const googleProvider = new GoogleAuthProvider();


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [refetch, setRefecth] = useState(false)
    const [cinema, setCinema] = useState(false)

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
        // setLoading(false)
        
    }

    const signInWithGoogle = () =>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

     const updateProfileFunction =(displayName, photoURL) =>{
      return updateProfile(auth.currentUser, {
        displayName, photoURL,
      })
    }

    const signOutUser = () =>{
        setLoading(true);
        return signOut(auth);
    }

    useEffect(()=>{
  const unsubscribe = onAuthStateChanged(auth, (cuser)=>{
    console.log(cuser);
    setUser(cuser);
    setLoading(false);
  });

  return ()=>{
    unsubscribe();
  };
}, []);


    const authInfo = {
        createUser,
        signInUser,
        setRefecth,
        refetch,
        signInWithGoogle,
        signOutUser,
        user,
        updateProfileFunction,
        setUser,
        loading,
        setLoading,
        setCinema,
        cinema
    }

   


    return (
        <AuthContext.Provider value={authInfo}>
          {
         children
          }
            
        </AuthContext.Provider>
       
    );
};

export default AuthProvider
