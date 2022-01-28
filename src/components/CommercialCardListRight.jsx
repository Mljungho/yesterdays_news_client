import React from "react";
import ArticleCss from "../styles/ArticleCss.css";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { Grid } from "@mui/material";

//The function needs to be updated with relevant naming to fetch
//different objects. I.e fetchAdd, setAdd etc.

const CommercialCardListRight = () => {
  return (
    <Grid>
      <ImageList sx={{ width: 200 }} cols={1}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
              srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Grid>
  );
};

export default CommercialCardListRight;

const itemData = [
  {
    img: "https://blog.hubspot.com/hubfs/best%20advertisements.jpg",
    title: "Breakfast",
  },
  {
    img: "https://www.creatopy.com/blog/wp-content/uploads/2017/04/pepsi-coca-cola-halloween-add.jpg",
    title: "Burger",
  },
  {
    img: "https://www.estrella.se/content/uploads/2020/04/thumbnails/10645-sourcream-onion-275g-836-500x0.png",
    title: "Burger",
  },
];
