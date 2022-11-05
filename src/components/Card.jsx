import React from "react";
import styled from "styled-components";

export default function Card({ gender, name, email, picture, phone }) {
  return (
    <CardStyle>
      <div className="left">
        <img src={picture} alt="user" />
        <h2>
          {name}
          <span>{phone}</span>
        </h2>
      </div>
      <div className="right">
        <div>
          <p>{gender.slice(0, 1).toUpperCase()}</p>
        </div>
      </div>
    </CardStyle>
  );
}

const CardStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 32px;
  box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.05),
    0px 40px 34px -16px rgba(0, 0, 0, 0.08),
    0px 6px 4px -4px rgba(0, 0, 0, 0.06), 0px 16px 16px -8px rgba(0, 0, 0, 0.12);
  background-color: var(--bg-color);

  .left {
    display: flex;
    gap: 20px;
    align-items: center;

    img {
      height: 100px;
      width: 100px;
      border-radius: 50%;
      object-fit: cover;
    }

    h2 {
      font-size: 1.2rem;
      font-weight: 500;
      color: var(--headings-color);

      span {
        font-size: 1rem;
        font-weight: 400;
        color: var(--grey-dark);
        display: block;
      }
    }
  }

  .right {
    display: flex;
    justify-content: center;
    align-items: center;

    div {
      background-color: var(--bg-color-v2) !important;
      height: 20px;
      width: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 10px;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.08);
      border-radius: 6.25px;

      &:hover {
        background-color: var(--bg-color-v1) !important;
        cursor: pointer;
        transition: all 0.2s ease-in-out;
      }
    }
  }

  @media screen and (max-width: 509px) {
    // flex-direction: column;
    padding: 16px;
    align-items: flex-start;

    .left {
      gap: 10px;
      img {
        height: 50px;
        width: 50px;
      }
    }
  }

  @media screen and (max-width: 440px) {
    // flex-direction: column;
    justify-content: space-around;
    // align-items: flex-end;
    .right {
      flex-direction: column;
      justify-content: flex-end;
    }
  }

  @media screen and (max-width: 368px) {
    // flex-direction: column;

    .left {
      flex-direction: column;
      align-items: flex-start;
    }
  }
`;
