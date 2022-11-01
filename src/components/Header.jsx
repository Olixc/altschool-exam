import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/link-up.svg";
import search from "../assets/ri-search-line.svg";
import "./Header.css";
import Menus from "./Menus";
import Burger from "./Burger";
import RightNavigation from "./RightNavigation";

const Header = () => {
  return (
    <div className="header">
      <div className="header-left">
        <Link
          to="/"
          style={{
            textDecoration: "none",
            cursor: "pointer",
          }}
        >
          <img src={logo} alt="Link up logo" className="logo" />
        </Link>

        <div className="header-search">
          <img src={search} alt="Header search" className="search-icon" />
          <input
            type="input"
            placeholder="Search & connect globally"
            className="search"
          />
        </div>
      </div>
      <Burger />
    </div>
  );
};

export default Header;
