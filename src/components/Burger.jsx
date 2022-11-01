import React, { useState } from "react";
import RightNavigation from "./RightNavigation";
import styled from "styled-components";

const BurgerStyling = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 70px;
  right: 55px;
  display: none;
  z-index: 20;
  cursor: pointer;
  @media (max-width: 942px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }
  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => (open ? "#ccc" : "#333")};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }
    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }
`;

const Burger = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <BurgerStyling open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </BurgerStyling>
      <RightNavigation open={open} />
    </>
  );
};
export default Burger;
