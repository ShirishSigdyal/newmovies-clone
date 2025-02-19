import React from "react";

import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SearchIcon from "@mui/icons-material/Search";

import { Button, Typography, Box, Paper } from "@mui/material";
import { MediaItemProps } from "../models/model";

const MediaCard: React.FC<MediaItemProps> = ({ item, name, date }) => {
  return (
    <Paper
      sx={{
        backgroundImage: `url(https://image.tmdb.org/t/p/w780${item?.backdrop_path})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        opacity: 0.7,
        position: "relative",
        zIndex: 1,
        borderRadius: 2,
        mb: 4,
        height: 400,
      }}>
      <Box
        sx={{
          position: "absolute",
          padding: 2,
          zIndex: 2,
          width: "60%",
          height: "100%",
          backgroundBlendMode: "multiply",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background:
            "linear-gradient(to right, #0d0d0c 50%, transparent 100%)",
        }}>
        <Box>
          <Typography variant="h5" fontWeight="bold" sx={{ color: "white" }}>
            {name}
          </Typography>
          <Typography variant="h6" color="goldenrod">
            {item.vote_average} / 10
          </Typography>
          <Typography variant="subtitle2" color="gray" gutterBottom>
            {date}
          </Typography>
        </Box>
        <Box>
          <Typography variant="body2" color="white" paragraph>
            {item.overview}
          </Typography>
          <Box display="flex" gap={2} mt={2}>
            <Button
              variant="contained"
              color="error"
              startIcon={<PlayArrowIcon />}>
              Watch Trailer
            </Button>
            <Button
              variant="contained"
              color="success"
              startIcon={<SearchIcon />}>
              Search Torrent
            </Button>
          </Box>
        </Box>
      </Box>
    </Paper>
  );
};

export default MediaCard;
