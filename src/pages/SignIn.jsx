import React, { useEffect, useState } from "react";
import logo from "../assets/link-up.svg";
import google from "../assets/google.svg";
import styled from "styled-components";
import { UserAuth } from "../context/context";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const { googleSignIn } = UserAuth();
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      navigate("/");
    }
  });

  return (
    <StyledSignIn>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <img src={logo} alt="link-up logo" />
        <h1>Welcome back</h1>
        <input type="text" placeholder="Enter image your URL" />
        <button type="submit" onClick={handleGoogleSignIn}>
          <img src={google} alt="google-icon" />
          Sign in with Google
        </button>
      </form>
    </StyledSignIn>
  );
};

export default SignIn;

const StyledSignIn = styled.section`
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: var(--bg-color);

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 400px;
    min-height: 400px;
    background-color: var(--bg-color-v2);
    box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.05),
      0px 40px 34px -16px rgba(0, 0, 0, 0.08),
      0px 6px 4px -4px rgba(0, 0, 0, 0.06),
      0px 16px 16px -8px rgba(0, 0, 0, 0.12);
    border-radius: 8px;

    h1 {
      font-size: 1.5rem;
      font-weight: 500;
      margin-bottom: 20px;
      color: var(--grey-dark);
    }

    input {
      width: 50%;
      height: 40px;
      border: none;
      outline: none;
      background-color: var(--bg-color-v2);
      border-radius: 8px;
      padding: 0 10px;
      margin-bottom: 20px;
      font-size: 1rem;
      font-weight: 400;
      color: var(--desc);
      border: 1px solid var(--bg-color);
      transition: all 0.3s ease-in-out;
      text-align: center;

      &:focus {
        border: 1px solid var(--primary);
        // target the caret
        &::selection {
          background-color: var(--asset-color-blue);
          color: var(--bg-color);
        }

        &::placeholder {
          color: var(--primary);
          text-align: center;

          transition: all 0.3s ease;

          opacity: 0.5;
          color: var(--desc);
        }
      }
    }

    button {
      width: 60%;
      height: 40px;
      border: none;
      outline: none;
      background-color: var(--bg-color-v2);
      border: 1px solid var(--bg-color);
      border-radius: 8px;
      padding: 0 10px;
      margin-bottom: 20px;
      font-size: 1rem;
      font-weight: 400;
      color: var(--desc);
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      img {
        width: 20px;
        height: 20px;
        margin-right: 10px;
      }

      &:hover {
        background-color: var(--bg-color-v3);
      }
    }
  }
`;
