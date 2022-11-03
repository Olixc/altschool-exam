import React from "react";
import { Link, NavLink, useParams } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { FetchData } from "../context/context";
import styled from "styled-components";
import { UserAuth } from "../context/context";
import logoutIcon from "../assets/logout.svg";
import linkupIcon from "../assets/blue-link-up.svg";
import locationIcon from "../assets/location-icon.svg";
import copy from "../assets/copy.svg";
import ErrorBoundary from "../components/ErrorBoundary";

export default function UserDetail() {
  const { userInfo: data, USERS_PER_PAGE, page, setPage } = FetchData();
  const { userId } = useParams();
  const users = data?.find((user) => user.login.uuid === userId);

  const {
    name,
    email,
    picture,
    location: { city, country, state, street, timezone },
    phone,
    dob: { age },
    gender,
  } = users;

  const cleanEmail = email.replace("example.com", "gmail.com");

  const { logout } = UserAuth();

  if (!users) {
    return <h1>No User Found!</h1>;
  }
  return (
    <UserStyleDetail>
      <Sidebar />
      <div className="user-detail">
        <div className="user-detail-header">
          <div>
            <h2>
              Link up with{" "}
              <span>
                {name.first} {name.last}
              </span>{" "}
            </h2>
            <a
              href={`mailto:${cleanEmail}`}
              target="_blank"
              // rel="noreferrer"
              className="email"
            >
              <img src={linkupIcon} />
            </a>
          </div>

          <div className="btn-container" onClick={logout}>
            <img src={logoutIcon} alt="logout-icon" />
            <button className="btn">Logout</button>
          </div>
        </div>

        <div className="location-container">
          <div className="location">
            <img src={locationIcon} />
            <button>Location</button>
          </div>
          <p>
            {`${street.name} ${street.number}`}
            <br />
            {`${city}, ${state} ${country}`}
          </p>
        </div>

        <div className="user-detail-info">
          <div className="user-detail-info-img">
            <img src={picture.large} alt="user-img" />
            <div className="user-detail-info-img-text">
              <h3>
                {name.first} {name.last}
                <span>{email}</span>
              </h3>
            </div>
          </div>
          <div className="gender-container">
            <p>Gender</p>
            <div>
              <p
                style={{
                  color: "#FABD03",
                  fontWeight: "bold",
                  fontSize: "1rem",
                }}
              >
                {gender.slice(0, 1).toUpperCase()}
              </p>
            </div>
          </div>
        </div>

        <div className="user-detail-body">
          {/* table  */}
          <table className="user-detail-info-table">
            <tbody>
              <tr>
                <td>Age</td>
                <td>{age}</td>
                <td>
                  <img src={copy} alt="copy-icon" />
                </td>
              </tr>
              <tr>
                <td>Phone</td>
                <td>{phone}</td>
                <td>
                  <img src={copy} alt="copy-icon" />
                </td>
              </tr>
              <tr>
                <td>Timezone</td>
                <td>{timezone.offset}</td>
                <td>
                  <img src={copy} alt="copy-icon" />
                </td>
              </tr>
              {/* add dob */}
              <tr>
                <td>DOB</td>
                <td>{users.dob.date.slice(0, 10)}</td>
                <td>
                  <img src={copy} alt="copy-icon" />
                </td>
              </tr>
              {/* Add Mobile */}
              <tr>
                <td>Tel</td>
                <td>{users.cell}</td>
                <td>
                  <img src={copy} alt="copy-icon" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* Go back to dashboard */}
        <div
          className="go-back"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "2rem",
          }}
        >
          {/* navigate to dashboard */}
          <NavLink
            to="/"
            style={{
              textDecoration: "none",
              color: " var(--headings-color)",
              display: "flex",
              alignItems: "center",
              textAlign: "center",
              boxShadow:
                "0px -2px 2px rgba(0, 0, 0, 0.05) 0px 2px 2px rgba(0, 0, 0, 0.25)",
              padding: "1rem 2rem",
              borderRadius: "0.5rem",
              backgroundColor: "var(--bg-color-v2)",
            }}
          >
            Go back
          </NavLink>
        </div>
      </div>
    </UserStyleDetail>
  );
}

const UserStyleDetail = styled.div`
  padding-top: 50px;
  padding-bottom: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding-left: 40px;
  padding-right: 55px;

  .user-detail {
    flex: 0.7;
    margin-left: 20px;
    border-radius: 8px;
    box-shadow: 0px -2px 2px rgba(0, 0, 0, 0.05),
      0px 2px 2px rgba(0, 0, 0, 0.25);
    background-color: transparent;
    padding: 20px;
    flex-direction: column;

    .user-detail-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 40px;
      width: 100%;
      padding: 0;

      div:first-child {
        display: flex;
        align-items: center;
        gap: 5px;
      }

      h2 {
        color: var(--headings-color);
        font-size: 1rem;

        span {
          color: var(--grey-dark);
          font-weight: 400;
        }
      }

      .btn-container {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 5px;
        background-color: var(--bg-color-v2);
        box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
        // padding: 8px;
        border-radius: 8px;
        padding-right: 10px;
        padding-left: 10px;
        padding-top: 5px;
        padding-bottom: 5px;
        cursor: pointer;

        img {
          height: 35px;
          width: 35px;
          // margin-top: 10px;
          padding-top: 10px;
          fill: var(--headings-color);
        }

        .btn {
          color: var(--headings-color);
          font-size: 1.2rem;
          font-weight: 500;
          background-color: transparent;
          border: none;
          outline: none;
          cursor: pointer;
        }
      }
    }
  }

  .location-container {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 20px;
  }

  .location {
    display: flex;
    // justify-content: center;
    align-items: center;
    // margin-top: 20px;
    background-color: var(--asset-color-blue);
    width: min-content;
    padding: 10px 20px;
    border-radius: 8px;
    cursor: pointer;

    img {
      height: 20px;
      width: 20px;
      fill: var(--bg-color-v1);
    }

    button {
      color: #fff;
      font-size: 1.2rem;
      font-weight: 500;
      background-color: transparent;
      border: none;
      outline: none;
      cursor: pointer;
    }
  }

  .user-detail-info {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 40px;

    .user-detail-info-img {
      display: flex;
      align-items: center;
      // justify-content: flex-start;
      gap: 20px;

      img {
        height: 100px;
        width: 100px;
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .user-detail-info-img-text {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 0;

        // justify-content: center;
        // align-items: flex-start;

        h3 {
          color: var(--headings-color);
          font-size: 2rem;

          span {
            color: var(--grey-dark);
            font-size: 1.2rem;
            font-weight: 400;
            display: block;
            margin-top: 10px;
          }
        }
      }
    }

    .gender-container {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      padding: 1px 20px;
      background-color: var(--bg-color-v2);
      border-radius: 8px;
      box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);

      p {
        color: var(--headings-color);
        font-size: 1.2rem;
        font-weight: 500;

        &:first-child {
          color: var(--grey-dark);
          font-weight: 400;
        }
      }

      div {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        paddign: 30px !important;
        background-color: var(--bg-color);
        width: 24px !important;
        height: 24px !important;
        border-radius: 50%;
        color: #fabd03;
        box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);

        p {
          color: #fabd03;
        }
      }
    }
  }

  .user-detail-body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 20px;
    margin-top: 20px;

    table {
      width: 100%;
      border-collapse: collapse;
      border-spacing: 0;
      border-radius: 8px;
      overflow: hidden;

      tbody {
        tr {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
          padding: 20px;
          border-bottom: 1px solid var(--bg-color-v2);
          text-align: left;

          &:last-child {
            border-bottom: none;
          }

          td:first-child {
            font-weight: 800;
            text-align: left;
          }

          td {
            // color: var(--grey-dark);
            font-size: 1.2rem;
            font-weight: 400;
            text-align: left;
            width: 100%; 
        }
      }
    }
  }
`;
