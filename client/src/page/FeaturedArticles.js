import React, { Fragment } from "react";
import styled from "styled-components";
import ContentFeaturedArticles from "../components/layout/ContentFeaturedArticles";
import FeaturedArticlesSideBar from "../components/sidebar/FeaturedArticlesSideBar";

const FeaturedArticlesSideBarStyle = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 100vw;
  padding-left: 10px;
  padding-right: 10px;
`;

const ClearFix = styled.div`
  clear: both;
`;

const FeaturedArticles = () => {
  return (
    <Fragment>
      <FeaturedArticlesSideBarStyle>
        <FeaturedArticlesSideBar></FeaturedArticlesSideBar>
        <ContentFeaturedArticles></ContentFeaturedArticles>
        <ClearFix></ClearFix>
      </FeaturedArticlesSideBarStyle>
    </Fragment>
  );
};

export default FeaturedArticles;
