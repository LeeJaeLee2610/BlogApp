import React, { Fragment } from "react";
import ContentHome from "../components/layout/ContentHome";
import styled from "styled-components";
import ForYouSideBar from "../components/sidebar/ForYouSideBar";

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
        <ForYouSideBar></ForYouSideBar>
        <ContentHome></ContentHome>
        <ClearFix></ClearFix>
      </MainStyle>
    </Fragment>
  );
};

export default HomePage;
