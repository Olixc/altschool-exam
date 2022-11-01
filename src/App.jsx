import React, { useContext, useEffect } from "react";
import Header from "./components/Header";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { Context } from "./context";

const App = () => {
  const { theme, setTheme } = useContext(Context);
  console.log(theme);

  return (
    <div className="App" data-theme={theme}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/about" element={<About />} />
      </Routes>
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
