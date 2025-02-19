import React from "react";

import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SearchIcon from "@mui/icons-material/Search";

import { Button, Typography, Box, Paper, Stack } from "@mui/material";

import { MediaItemProps } from "../models/model";

const MediaCard: React.FC<MediaItemProps> = ({ item, name, date, genres }) => {
  //Handle torrent search click.
  const handleSearchTorrent = () => {
    const encodedTitle = encodeURIComponent(name);
    const searchUrl = `https://yts.mx/browse-movies/${encodedTitle}/all/all/0/latest/0/all`;

    window.open(searchUrl, "_blank");
  };

  //Handle youtube search click.
  const handleSearchYoutube = () => {
    const encodedTitle = encodeURIComponent(`${name} trailer`);
    const youtubeUrl = `https://www.youtube.com/results?search_query=${encodedTitle}`;

    window.open(youtubeUrl, "_blank");
  };

  return (
    <Paper
      elevation={3}
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
        transition: "transform 0.2s ease-in-out",
        "&:hover": {
          transform: "scale(1.025)",
          elevation: 5,
        },
      }}>
      <Box
        sx={{
          position: "absolute",
          padding: 3,
          zIndex: 2,
          width: "60%",
          height: "100%",
          borderRadius: 2,
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
            {date}{" "}
          </Typography>
          <Stack direction="row" spacing={1} sx={{ color: "white" }}>
            {genres.map((genre, index) => (
              <React.Fragment key={genre}>
                <Typography variant="body2" color="white">
                  {genre}
                </Typography>
                {index < genres.length - 1 && <span>•</span>}
              </React.Fragment>
            ))}
          </Stack>
        </Box>
        <Box>
          <Typography variant="body2" color="white" paragraph>
            {item.overview}
          </Typography>
          <Box display="flex" gap={2} mt={2}>
            <Button
              variant="contained"
              color="error"
              startIcon={<PlayArrowIcon />}
              onClick={handleSearchYoutube}>
              Watch Trailer
            </Button>
            <Button
              sx={{ color: "#6ac045" }}
              variant="outlined"
              color="success"
              startIcon={<SearchIcon />}
              onClick={handleSearchTorrent}>
              Search Torrent
            </Button>
          </Box>
        </Box>
      </Box>
    </Paper>
  );
};

export default MediaCard;
