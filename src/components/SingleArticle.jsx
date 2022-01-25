import React, { useEffect, useState } from "react";
import Articles from "../modules/Articles";
import { useParams } from "react-router-dom";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import ArticleCss from './ArticleCss.css'

const SingleArticle = () => {
  const [article, setArticle] = useState({});
  const { id } = useParams();

  const fetchArticle = async () => {
    const data = await Articles.show(id);
    setArticle(data.article);
  };
  useEffect(() => {
    fetchArticle();
  }, []);

  return (
    <Box sx={{ m: 10 }}>
      <Typography class="articleFont" gutterBottom variant="h3" data-cy="article-title">
        {article.title}
      </Typography>
      <Typography class="articleFont" gutterBottom variant="subtitle1" data-cy="article-body">
        {article.body}
      </Typography>
      <Typography class="articleFont" gutterBottom variant="caption" data-cy="article-created">
        {article.published}
      </Typography>
    </Box>
  );
};

export default SingleArticle;
