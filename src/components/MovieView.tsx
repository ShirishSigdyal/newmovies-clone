import React, { useEffect, useState } from "react";

import { getTrendingMoviesForTheDay } from "../services/moviesService";

import { Movie, MediaProps } from "../models/model";

import MediaCard from "./MediaCard";

const MovieView: React.FC<MediaProps> = ({ genreMap }) => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const movieData = await getTrendingMoviesForTheDay();
      setMovies(movieData);
    };
    fetchMovies();
  }, []);

  const getMediaGenre = (movie: Movie) => {
    return (movie.genre_ids ?? [])
      .map((genreId: number) => {
        return genreMap.get(genreId);
      })
      .filter((genre): genre is string => genre !== undefined);
  };

  return (
    <div>
      {movies.map((movie) => (
        <MediaCard
          item={movie}
          name={movie.title}
          date={movie.release_date}
          key={movie.id}
          genres={getMediaGenre(movie)}
        />
      ))}
    </div>
  );
};

export default MovieView;
