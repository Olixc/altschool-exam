import React from "react";
import Sidebar from "../components/Sidebar";
import styled from "styled-components";
import Dashboard from "./Dashboard";

const SidebarDiv = styled.section`
  padding-top: 50px;
  padding-bottom: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding-left: 40px;
  padding-right: 55px;

  @media (max-width: 928px) {
    flex-direction: column;
    padding-left: 40px;
    padding-right: 40px;

    // .theme {
    //   padding-left: 40px;
    //   padding-right: 40px;
    // }
  }
`;

const Home = () => {
  return (
    <SidebarDiv>
      <Sidebar />
      <Dashboard />
    </SidebarDiv>
  );
};

export default Home;
