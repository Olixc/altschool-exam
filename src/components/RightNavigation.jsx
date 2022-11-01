import React from "react";
import Menus from "./Menus";
import styled from "styled-components";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  margin-top: -3px;
  z-index: 300;
  li {
    padding: 18px 10px;
  }
  @media (max-width: 942px) {
    flex-flow: column nowrap;
    background-color: var(--bg-color-v2);
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
    transform: ${({ open }) => (open ? "transLateX(0)" : "translateX(100%)")};
    transition: transform: 0.3s ease-in-out
  }
`;

const RightNavigation = ({ open }) => {
  return (
    <Ul open={open}>
      <Menus menu="Home" to="/" end="end" />
      <Menus menu="About us" to="/about-us" />
      <Menus menu="Privacy" to="/privacy" />
    </Ul>
  );
};

export default RightNavigation;
