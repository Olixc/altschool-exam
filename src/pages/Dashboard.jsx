import React from "react";
import Styled from "styled-components";
import logoutIcon from "../assets/logout.svg";
import CardList from "../components/CardList";
import Pagination from "../components/Pagination";
import { UserAuth } from "../context/context";
import ErrorBoundary from "../components/ErrorBoundary";

const Dashboard = () => {
  const { logout } = UserAuth();
  return (
    <StyledDashboard>
      <div className="dashboard-header">
        <h1>Dashboard</h1>
        <div className="btn-container" onClick={logout}>
          <img src={logoutIcon} alt="logout-icon" />
          <button className="btn">Logout</button>
        </div>
      </div>
      <ErrorBoundary>
        {" "}
        <CardList />
      </ErrorBoundary>

      <Pagination />
    </StyledDashboard>
  );
};

export default Dashboard;

const StyledDashboard = Styled.section`
  display: flex;
  background-color: var(--bg-color-v2);
  flex: 0.7;
  margin-left: 20px;
  border-radius: 8px;
  box-shadow: 0px -2px 2px rgba(0, 0, 0, 0.05), 0px 2px 2px rgba(0, 0, 0, 0.25);
  background-color: transparent;
  padding: 20px;
  flex-direction: column;

  .dashboard-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 40px;
    width: 100%;
    padding: 0;

    h1 {
      color: var(--headings-color);
      font-size: 2.5rem;
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
      cursor: pointer;
      
      img{
        height: 35px;
        width: 35px;
        // margin-top: 10px;
        padding-top: 10px;
        fill: var(--headings-color);
      }

      button {
        background-color: transparent;
        border: none;
        cursor: pointer;
        font-size: 1.2rem;
        font-weight: 500;
        color: var(--grey-dark);
      }
    }
  }

  @media screen and (max-width: 928px) {
    display: flex; 
    flex-direction: column; 
    margin-left: 0;
    width: calc(100% - 40px); 

    .dashboard-header {
      h1 {
        font-size: 1.8rem;
      }
    }
  }

  @media screen and (max-width: 375px){
    .dashboard-header {
      flex-direction: column;
      align-items: flex-start;
    }
  }
`;
