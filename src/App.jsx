import React, { useContext, useEffect, useState } from "react";
import Header from "./components/Header";
import "./App.css";
import { Link, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { Context } from "./context/context";
import SignIn from "./pages/SignIn";
import { UserAuth } from "./context/context";
import Protected from "./components/Protected";
import UserDetail from "./pages/UserDetail";
import ErrorBoundary from "./components/ErrorBoundary";
import ErrorPage from "./pages/ErrorPage";

const App = () => {
  const { theme, setTheme } = useContext(Context);
  const { user } = UserAuth();
  // console.log(theme);

  return (
    <div className="App" data-theme={theme}>
      {user && (
        <>
          <Header />
          <Routes>
            <Route
              path="/"
              element={
                <Protected>
                  <Home>
                    // Add seo // Add meta tags // Add og tags
                    <meta name="description" content="Home Page" />
                    <meta name="keywords" content="Home, Page" />
                    <meta name="author" content="Olix" />
                    <meta name="robots" content="index, follow" />
                    <meta name="theme-color" content="#000000" />
                    <meta name="apple-mobile-web-app-capable" content="yes" />
                    <meta
                      name="apple-mobile-web-app-status-bar-style"
                      content="default"
                    />
                  </Home>
                </Protected>
              }
            />
            <Route
              path="/privacy"
              element={
                <Protected>
                  <Privacy>
                    <meta name="description" content="Privacy policy" />
                    <meta name="keywords" content="Privacy, Policy" />
                    {/* Add meta brief description */}
                  </Privacy>
                </Protected>
              }
            />
            <Route
              path="/about-us"
              element={
                <Protected>
                  <About>
                    <meta name="description" content="This is the about page" />
                    <meta name="keywords" content="About, Page" />
                  </About>
                </Protected>
              }
            />
            {/* <Route path="*" element={<Navigate to="/" />} /> */}
            {/* create a route for 404 page */}
            <Route path="*" element={<ErrorPage />} />
            <Route path="/signin" element={<SignIn />} />
            <Route
              path="/:userId"
              element={
                <ErrorBoundary>
                  <UserDetail />
                </ErrorBoundary>
              }
            />
          </Routes>
        </>
      )}
      {!user && <SignIn />}
    </div>
  );
};

export default App;

const Privacy = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "90vh",
        flexDirection: "column",
      }}
    >
      <ErrorBoundary>
        <BuggyCounter text="Test Error Boundary" />
      </ErrorBoundary>
    </div>
  );
};

const About = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "90vh",
        flexDirection: "column",
        padidng: "20px",
      }}
    >
      <h1>About Page</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam</p>
      <button
        style={{
          padding: "1rem 10rem",
          fontSize: "1.5rem",
          fontWeight: "bold",
          color: "white",
          backgroundColor: "var(--asset-color-blue)",
          border: "none",
          borderRadius: "5px",
          outline: "none",
          cursor: "pointer",
        }}
      >
        <Link
          style={{
            color: "white",
            textDecoration: "none",
          }}
          to="/"
        >
          Go to Home
        </Link>
      </button>
      <pre
        style={{
          textAlign: "center",
          padding: "20px",
        }}
      >
        The 404 page route is after the / <br />
        (homepage) other routes. So, if the <br />
        user tries to access a route that doesn't <br />
        exist, the 404 page will be rendered.
        <br /> e.g. /about-us, /privacy, /signin, /:userId
      </pre>
    </div>
  );
};

const BuggyCounter = ({ text }) => {
  const [count, setCount] = useState(0);
  if (count === 5) {
    throw new Error("I crashed");
  }
  return (
    <>
      <h1>{text}</h1>
      <button
        style={{
          padding: "1rem 2rem",
          fontSize: "1.5rem",
          fontWeight: "bold",
          color: "white",
          backgroundColor: "var(--asset-color-blue)",
          border: "none",
          borderRadius: "5px",
          outline: "none",
          cursor: "pointer",
        }}
        onClick={() => setCount(count + 1)}
      >
        Count : {count}
      </button>
    </>
  );
};
