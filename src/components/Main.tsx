import React, { useState, useEffect } from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import { Typography } from "@mui/material";

import TvShowView from "./TvShowView";
import MovieView from "./MovieView";

import { Genre } from "../models/model";

import { getGenres } from "../services/genreService";

const Main: React.FC = () => {
  const [genreMap, setGenreMap] = useState(new Map());

  useEffect(() => {
    const fetchGenres = async () => {
      const genreData = await getGenres();
      const genreMap = new Map(
        genreData.map((genre: Genre) => [genre.id, genre.name])
      );
      setGenreMap(genreMap);
    };

    fetchGenres();
  }, []);

  return (
    <Box sx={{ flexGrow: 1, padding: 4, background: "#1d1b1b" }}>
      <Grid container spacing={4}>
        <Grid size={6}>
          <Typography
            variant="h4"
            sx={{ color: "white", textAlign: "center", mb: 2 }}>
            Trending Movies
          </Typography>
          <MovieView genreMap={genreMap} />
        </Grid>
        <Grid size={6}>
          <Typography
            variant="h4"
            sx={{ color: "white", textAlign: "center", mb: 2 }}>
            Trending TV Shows
          </Typography>
          <TvShowView genreMap={genreMap} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Main;
