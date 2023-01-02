import React, { createContext, useContext, useEffect, useState } from "react";
import useLocalStorage from "use-local-storage";
import {
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase-config";

const useErrorHandler = ({ error }) => {
  if (error) {
    return <div role="alert">Something went wrong: {error.message}</div>;
  }
};

const ErrorFallback = ({ error, resetErrorBoundary }) => {
  return (
    <div role="alert">
      There was an error:{" "}
      <pre style={{ whiteSpace: "normal" }}>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
};

const Context = createContext();

export default function ContextProvider({ children }) {
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "light" : "dark"
  );

  const [user, setUser] = useState({});
  const [userLoading, setUserLoading] = useState(true);

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUserLoading(false);
      setUser(currentUser);
      // save user to local storage
      localStorage.setItem("user", JSON.stringify(currentUser));
    });

    return () => unsubscribe();
  }, []);

  const logout = () => {
    signOut(auth);
    setUser({});
  };

  // const [userInfo, setUserInfo] = useState([]);
  // const [loading, setLoading] = useState(false);

  // const [page, setPage] = useState(1);
  // const USERS_PER_PAGE = 6;

  // useEffect(() => {
  //   setLoading(true);
  //   const fetchUsers = async () => {
  //     try {
  //       const response = await fetch(
  //         `https://randomuser.me/api/?page=${page}&results=${USERS_PER_PAGE}`
  //       );
  //       const data = await response.json();
  //       setUserInfo(data.results);
  //       setLoading(false);
  //     } catch (error) {
  //       console.log(error);
  //       // if the error is not handled, it will be thrown to the ErrorBoundary
  //     }
  //   };
  //   fetchUsers();
  // }, [page]);

  const [userInfo, setUserInfo] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pageNumber, setPageNumber] = useState(0);

  const USERS_PER_PAGE = 6;
  const pageVisited = pageNumber * USERS_PER_PAGE;

  const displayUsers = userInfo.slice(
    pageVisited,
    pageVisited + USERS_PER_PAGE
  );

  useEffect(() => {
    setLoading(true);
    const fetchUsers = async () => {
      try {
        const response = await fetch(`https://randomuser.me/api/?results=500`);
        const data = await response.json();
        setUserInfo(data.results);
        setLoading(false);
      } catch (error) {
        console.log(error);
        // if the error is not handled, it will be thrown to the ErrorBoundary
      }
    };
    fetchUsers();
  }, []);

  const value = {
    theme,
    setTheme,
    googleSignIn,
    user,
    logout,
    userInfo,
    loading,
    userLoading,
    // setPage,
    // page,
    pageNumber,
    setPageNumber,
    USERS_PER_PAGE,
    setLoading,
    displayUsers,
  };
  return <Context.Provider value={value}>{children}</Context.Provider>;
}

export { Context };

export const UserAuth = () => {
  return useContext(Context);
};

export const FetchData = () => {
  return useContext(Context);
};

export const PaginationData = () => {
  return useContext(Context);
};

export const SkeletonData = () => {
  return useContext(Context);
};
