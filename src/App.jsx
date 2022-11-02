import React, { useContext, useEffect } from "react";
import Header from "./components/Header";
import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { Context } from "./context/context";
import SignIn from "./pages/SignIn";
import { UserAuth } from "./context/context";
import Protected from "./components/Protected";

const App = () => {
  const { theme, setTheme } = useContext(Context);
  const { user } = UserAuth();
  console.log(theme);

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
                  <Home />
                </Protected>
              }
            />
            <Route
              path="/privacy"
              element={
                <Protected>
                  <Privacy />
                </Protected>
              }
            />
            <Route
              path="/about-us"
              element={
                <Protected>
                  <About />
                </Protected>
              }
            />
            <Route path="*" element={<Navigate to="/" />} />
            <Route path="/signin" element={<SignIn />} />
          </Routes>
        </>
      )}
      {!user && <SignIn />}
    </div>
  );
};

export default App;

const Privacy = () => {
  return <div>Privacy</div>;
};

const About = () => {
  return <div>About</div>;
};
