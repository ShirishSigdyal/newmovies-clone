import React from "react";

import Grid from "@mui/material/Grid2";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

import TvShowView from "./TvShowView";
import MovieView from "./MovieView";

const Main: React.FC = () => {
  return (
    <Box sx={{ flexGrow: 1, padding: 4, background: "#1d1b1b" }}>
      <Grid container spacing={4}>
        <Grid size={6}>
          <Typography
            variant="h4"
            sx={{ color: "white", textAlign: "center", mb: 2 }}>
            Trending Movies
          </Typography>
          <MovieView />
        </Grid>
        <Grid size={6}>
          <Typography
            variant="h4"
            sx={{ color: "white", textAlign: "center", mb: 2 }}>
            Trending TV Shows
          </Typography>
          <TvShowView />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Main;
