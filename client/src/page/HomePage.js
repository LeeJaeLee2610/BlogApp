import React, { Fragment } from "react";
import ContentHome from "../components/layout/ContentHome";
import SideBar from "../components/layout/SideBar";
import styled from "styled-components";

const ClearFix = styled.div`
  clear: both;
`;

const MainStyle = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 1200px;
`;

const HomePage = () => {
  return (
    <Fragment>
      <MainStyle>
        <SideBar></SideBar>
        <ContentHome></ContentHome>
        <ClearFix></ClearFix>
      </MainStyle>
    </Fragment>
  );
};

export default HomePage;
