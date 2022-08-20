import React from "react";
import styled from "styled-components";

const ContentFeaturedArticlesStyle = styled.div`
  width: 85%;
  float: right;
  z-index: 1;
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 32px;
  padding-bottom: 32px;
`;

const ContentFeaturedArticles = () => {
  return (
    <ContentFeaturedArticlesStyle>
      Content FeaturedArticles
    </ContentFeaturedArticlesStyle>
  );
};

export default ContentFeaturedArticles;
