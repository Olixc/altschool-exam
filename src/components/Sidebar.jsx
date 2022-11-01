import React, { useContext } from "react";
import styled from "styled-components";
import themeIcon from "../assets/ri-exchange-line.svg";
import logo from "../assets/link-up-footer.svg";
import { Link } from "react-router-dom";
import ToggleSwitch from "./ToggleSwitch";
import { Context } from "../context";

const Sidebar = () => {
  const { theme, setTheme } = useContext(Context);
  return (
    <SidebarDiv>
      <div className="top">
        <div className="theme">
          <h1 className="theme-title">
            Theme <span>{theme === "light" ? "Light" : "Dark"}</span>
          </h1>
          <div className="theme-switch">
            <ToggleSwitch label={theme} setTheme={setTheme} />
          </div>
        </div>

        <div id="profile-container">
          <div className="profile-img">
            <img
              src="https://images.unsplash.com/photo-1667132713689-dfe53c325445?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              alt="profile"
            />
          </div>
          <div className="profile-name">
            <h1>John Doe</h1>
            <span>johndoe@gmail.com</span>
          </div>
        </div>
      </div>

      <footer className="footer bottom">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <p>
          All rights reserved | © 2021 <span>LinkUp</span>
        </p>
      </footer>
    </SidebarDiv>
  );
};

export default Sidebar;

const SidebarDiv = styled.section`
  display: flex;
  flex: 0.3;
  background-color: transparent;
  height: 82vh;
  flex-direction: column;
  justify-content: space-between;

  .theme {
    background-color: var(--bg-color-v2);
    padding: 20px;
    box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.05),
      0px 40px 34px -16px rgba(0, 0, 0, 0.08),
      0px 6px 4px -4px rgba(0, 0, 0, 0.06),
      0px 16px 16px -8px rgba(0, 0, 0, 0.12);
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .theme-title {
      font-size: 1.2rem;
      font-weight: 500;
      margin-bottom: 10px;
      display: flex;
      flex-direction: column;
      color: var(--grey-dark);
      span {
        font-weight: 400;
        color: var(--desc);
      }
    }
    .theme-switch {
      display: flex;
      align-items: center;
      img {
        width: 20px;
        height: 20px;
        margin-right: 10px;
      }
      select {
        border: none;
        outline: none;
        background-color: transparent;
        font-size: 1rem;
        font-weight: 400;
        cursor: pointer;
        color: var(--desc);
      }
    }
  }

  #profile-container {
    padding: 40px;
    background-color: var(--bg-color-v2);
    box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.05),
      0px 40px 34px -16px rgba(0, 0, 0, 0.08),
      0px 6px 4px -4px rgba(0, 0, 0, 0.06),
      0px 16px 16px -8px rgba(0, 0, 0, 0.12);
    border-radius: 8px;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .profile-img {
      width: 120px;
      height: 120px;
      border-radius: 50%;
      overflow: hidden;
      margin-right: 10px;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        box-shadow: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.05);
      }
    }

    .profile-name {
      text-align: center;
      h1 {
        font-size: 1.5rem;
        font-weight: 700;
        margin-bottom: 10px;
        color: var(--grey-dark);
      }
    }
  }

  .footer {
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    p {
      font-size: 0.8rem;
      font-weight: 400;
      color: var(--desc);
      span {
        font-weight: 500;
        color: var(--headings-color);
      }
    }
  }
`;
