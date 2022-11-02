import React, { createContext, useContext, useEffect, useState } from "react";
import useLocalStorage from "use-local-storage";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase-config";

const Context = createContext();

export default function ContextProvider({ children }) {
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "light" : "dark"
  );

  const [user, setUser] = useState({});

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
    // signInWithRedirect(auth, provider);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log("User", currentUser);
    });

    return () => unsubscribe();
  }, []);

  const logout = () => {
    signOut(auth);
  };

  const value = {
    theme,
    setTheme,
    googleSignIn,
    user,
    logout,
  };
  return <Context.Provider value={value}>{children}</Context.Provider>;
}

export { Context };

export const UserAuth = () => {
  return useContext(Context);
};
