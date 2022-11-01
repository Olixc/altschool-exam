import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Menus.css";

const Menus = ({ menu, to, end }) => {
  let activeStyle = {
    color: "#2B5DFF",
  };

  return (
    <li className="menu-item">
      <NavLink
        end={end}
        to={to}
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        {menu}
      </NavLink>
    </li>
  );
};

export default Menus;
