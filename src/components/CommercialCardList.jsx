import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Articles from "../modules/Articles";
import ArticleCard from "./ArticleCard";
import { Grid, Container, Alert } from "@mui/material";
import { Box } from "@mui/material";
import ArticleCss from "./ArticleCss.css";

//The function needs to be updated with relevant naming to fetch 
//different objects. I.e fetchAdd, setAdd etc.

const CommercialCardList = () => {
  const { category } = useParams();
  const [articles, setArticles] = useState([]);
  const [message, setMessage] = useState();

  //fetchAdd
  const fetchArticles = async () => {
    const data = await Articles.index(category);
    if (data.message || data.length === 0) {
      setMessage(
        "We don't have commercial available at the moment, please try again later."
      );
    } else {
      setArticles(data);
    }
  };
  useEffect(() => {
    fetchArticles();
  }, [category]);

  const collectionOfArticles = articles.map((article) => {
    return (
      <Grid item key={article.id} md={12}>
        <ArticleCard article={article} />
      </Grid>
    );
  });

  return (
    <Grid>
      <Grid container spacing={4} data-cy="commercial-collection">
        {collectionOfArticles}
      </Grid>
    </Grid>
  );
};

export default CommercialCardList;
