import React from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import "./NavBar.css";

export const NavBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Link className="title" to="/">CGTV</Link>
        </Grid>
        <Grid item xs={8}>
          <Link className="link" to="/About">About</Link>
          <Link className="link" to="/Contact">Contact</Link>
          <Link className="link" to="/Services">Services</Link>
        </Grid>
      </Grid>
    </Box>
  );
};
