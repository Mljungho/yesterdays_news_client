import React from "react";
import { Box } from "@mui/material";
import ArticleCss from "../styles/ArticleCss.css";
import CommercialCard from "./CommercialCardList";
import ArticleCardList from "./ArticleCardList";

const ArticleCollection = () => {
  return (
    <>
      <Box class="boxCom" id="Commercial feed">
        <CommercialCard />
      </Box>
      <Box class="boxArticle" id="Main article feed">
        <ArticleCardList />
      </Box>
    </>
  );
};

export default ArticleCollection;
