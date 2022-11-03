import React, { useContext } from "react";
import styled from "styled-components";
import themeIcon from "../assets/ri-exchange-line.svg";
import logo from "../assets/link-up-footer.svg";
import { Link } from "react-router-dom";
import ToggleSwitch from "./ToggleSwitch";
import { Context } from "../context/context";
import { UserAuth } from "../context/context";

const Sidebar = () => {
  const { theme, setTheme } = useContext(Context);
  const { user, logout } = UserAuth();

  const handleSignOut = async () => {
    try {
      await logout();
    } catch (error) {
      console.log(error);
    }
  };
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
            <img src={user?.photoURL} />
          </div>
          <div className="profile-name">
            <h1>{user.displayName}</h1>
            <span>{user.email}</span>
          </div>
        </div>

        <div className="logout">
          <button onClick={handleSignOut}>Logout</button>
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
  position: sticky;
  height: fit-content;
  top: 80px;
  z-index: 1;
  display: flex;
  flex: 0.3;
  // background-color: transparent;
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

  .logout {
    margin-top: 20px;
    background-color: var(--bg-color-v2);
    box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.05),
      0px 40px 34px -16px rgba(0, 0, 0, 0.08),
      0px 6px 4px -4px rgba(0, 0, 0, 0.06),
      0px 16px 16px -8px rgba(0, 0, 0, 0.12);
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    button {
      border: none;
      outline: none;
      background-color: transparent;
      font-size: 1rem;
      font-weight: 400;
      cursor: pointer;
      color: var(--desc);
      padding: 25px 10px;
      border-radius: 8px;
      transition: all 0.3s ease;
      width: 100%;
      font-weight: bold;
      text-transform: uppercase;
      font-size: 0.9rem;
      &:hover {
        background-color: var(--bg-color-v2);
        box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.05),
          0px 40px 34px -16px rgba(0, 0, 0, 0.08),
          0px 6px 4px -4px rgba(0, 0, 0, 0.06),
          0px 16px 16px -8px rgba(0, 0, 0, 0.12);
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

  @media (max-width: 928px) {
    position: relative;
    // flex-direction: column;
    // background-color: pink;
    flex: 1;
    display: block;
    width: 100%;
    top: 0;
  }
`;
