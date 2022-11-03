import React, { useContext } from "react";
import styled from "styled-components";
import { Context } from "../context/context";

const ToggleSwitch = ({ label }) => {
  const { theme, setTheme } = useContext(Context);
  const newTheme = theme === "light" ? "dark" : "light";
  return (
    <Switchstyle className="container">
      {/* {`${label} theme`}{" "} */}
      <label>Change theme</label>
      <div className="toggle-switch">
        <input type="checkbox" className="checkbox" name={label} id={label} />
        <label
          className="label"
          htmlFor={label}
          onClick={() => setTheme(newTheme)}
        >
          <span className="inner" />
          <span className="switch" />
        </label>
      </div>
    </Switchstyle>
  );
};

export default ToggleSwitch;

const Switchstyle = styled.div`
  .container {
    text-align: center;
  }
  text-align: center;

  .toggle-switch {
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: row;
    text-align: left;
    top: 8px;
  }
  .checkbox {
    display: none;
  }

  .label {
    display: block;
    overflow: hidden;
    cursor: pointer;
    border: 0 solid #bbb;
    border-radius: 20px;
  }

  .inner {
    display: block;
    width: 200%;
    margin-left: -100%;
    transition: margin 0.3s ease-in 0s;
  }

  .inner:before,
  .inner:after {
    float: left;
    width: 50%;
    height: 36px;
    padding: 0;
    line-height: 36px;
    color: var(--headings-color);
    font-weight: bold;
    box-sizing: border-box;
  }

  .inner:before {
    content: "Light";
    padding-right: 10px;
    background-color: var(--bg-color);
    color: var(--desc);
    text-align: right;
  }

  .inner:after {
    content: "Dark";
    padding-right: 10px;
    background-color: var(--bg-color);
    color: var(--desc);
    text-align: right;
  }

  .switch {
    display: block;
    width: 24px;
    border-radius: 100%;
    margin: 5px;
    background: var(--grey-dark);
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0px;
    // box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.008);
    // border: 1px solid #bbb;
    border-radius: 20px;
    transition: all 0.3s ease-in 0s;
  }

  .checkbox:checked + .label .inner {
    margin-left: 0;
  }
  .checkbox:checked + .label .switch {
    right: 10px;
  }
`;
