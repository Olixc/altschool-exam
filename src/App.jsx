import React from "react";
import Header from "./components/Header";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import useLocalStorage from "use-local-storage";

const App = () => {
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "light"
  );
  return (
    <div className="App" data-theme={theme}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/privacy" element={<Privacy />} />
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
