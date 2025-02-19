import React, { useEffect, useState } from "react";

import { getTrendingTVShowsForTheDay } from "../services/tvshowsService";

import { TvShow, MediaProps } from "../models/model";

import MediaCard from "./MediaCard";

const TvShowView: React.FC<MediaProps> = ({ genreMap }) => {
  const [tvShows, setTvShows] = useState<TvShow[]>([]);

  useEffect(() => {
    const fetchTVShows = async () => {
      const tvShowData = await getTrendingTVShowsForTheDay();
      setTvShows(tvShowData);
    };
    fetchTVShows();
  }, []);

  const getMediaGenre = (show: TvShow) => {
    return show.genre_ids
      .map((genreId: number) => {
        return genreMap.get(genreId);
      })
      .filter((genre): genre is string => genre !== undefined);
  };

  return (
    <div>
      {tvShows.map((show) => (
        <MediaCard
          item={show}
          name={show.name}
          date={show.first_air_date}
          key={show.id}
          genres={getMediaGenre(show)}
        />
      ))}
    </div>
  );
};

export default TvShowView;
