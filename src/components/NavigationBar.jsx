import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Box, Toolbar, Typography, Button } from "@mui/material";

const NavigationBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar>
        <Toolbar>
          <Typography
            data-cy="header"
            variant="h6"
            component={Link}
            to="/"
            sx={{ flexGrow: 1, textDecoration: "none", color: "white" }}
          >
            Yesterdays News
          </Typography>
          <Button
            data-cy="sports-view"
            component={Link}
            to="/sports"
            color="inherit"
            style={{ display: "flex", justifyContent: "left" }}
          >
            Sports
          </Button>
          <Button
            data-cy="politics-view"
            component={Link}
            to="/politics"
            color="inherit"
            style={{ display: "flex", justifyContent: "left" }}
          >
            Politics
          </Button>
          <Button
            data-cy="economy-view"
            component={Link}
            to="/economy"
            color="inherit"
            style={{ display: "flex", justifyContent: "left" }}
          >
            Economy
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavigationBar;
