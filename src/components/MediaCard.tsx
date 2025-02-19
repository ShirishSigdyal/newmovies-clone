import React from "react";

import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SearchIcon from "@mui/icons-material/Search";

import {
  Button,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
} from "@mui/material";
import { MediaItemProps } from "../models/model";

const MediaCard: React.FC<MediaItemProps> = ({ item, name, date }) => {
  return (
    <Card
      key={item?.id}
      sx={{
        height: "500px",
        backgroundColor: "#121212",
        color: "white",
        borderRadius: 2,
        overflow: "hidden",
        mb: 4,
      }}>
      <CardMedia
        component="img"
        height="250"
        image={`https://image.tmdb.org/t/p/w780${item?.backdrop_path}`}
        alt="The Gorge Movie Poster"
        sx={{ opacity: 0.7 }}
      />
      <CardContent sx={{ position: "relative", padding: 2 }}>
        <Typography variant="h5" fontWeight="bold">
          {name}
        </Typography>
        <Typography variant="h6" color="goldenrod">
          {item.vote_average} / 10
        </Typography>
        <Typography variant="subtitle2" color="gray" gutterBottom>
          {date}
        </Typography>
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
      </CardContent>
    </Card>
  );
};

export default MediaCard;
