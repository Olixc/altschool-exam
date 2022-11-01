import React from "react";
import Header from "./components/Header";
import "./App.css";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
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

const Home = () => {
  return <div>Home</div>;
};

const Privacy = () => {
  return <div>Privacy</div>;
};

const About = () => {
  return <div>About</div>;
};
