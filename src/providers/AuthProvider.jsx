import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import app from "../Firebase/Firebase.config";
import { GoogleAuthProvider } from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth";

const githubProvider = new GithubAuthProvider();

const provider = new GoogleAuthProvider();

export const AuthContext=createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true);

// create user
const createUser=(email,password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
}
// email login
const signIn=(email,password)=>{
    setLoading(true);
    return signInWithEmailAndPassword(auth,email,password);
}

// signin with google
const signInWithGoogle=()=>{
setLoading(true);
return signInWithPopup(auth,provider);
}
// signin with github
const signinWithGithub=()=>{
    setLoading(true);
    return signInWithPopup(auth,githubProvider)
}

useEffect(()=>{
 const unsubscribe=   onAuthStateChanged(auth,curentUser=>{
        setUser(curentUser);
        setLoading(false)
    })
    return ()=>{
        unsubscribe()
    }
},[])

    const allinfo={
        user,
        loading,
        createUser,
        signIn,
        signInWithGoogle,
        signinWithGithub,

    }
    return (
        <AuthContext.Provider value={allinfo}>
            {children}
        </AuthContext.Provider >
    );
};

export default AuthProvider;