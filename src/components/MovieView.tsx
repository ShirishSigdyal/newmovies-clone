import React, { useEffect, useState } from "react";

import { getTrendingMoviesForTheDay } from "../services/moviesService";

import { Movie } from "../models/model";
import MediaCard from "./MediaCard";

const MovieView: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const movieData = await getTrendingMoviesForTheDay();
      console.log(movieData, "movies");
      setMovies(movieData);
    };
    fetchMovies();
  }, []);

  return (
    <div>
      {movies.map((movie) => (
        <MediaCard
          item={movie}
          name={movie.title}
          date={movie.release_date}
          key={movie.id}
        />
      ))}
    </div>
  );
};

export default MovieView;
