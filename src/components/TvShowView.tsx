import React, { useEffect, useState } from "react";

import { getTrendingTVShowsForTheDay } from "../services/tvshowsService";

import { TvShows } from "../models/model";
import MediaCard from "./MediaCard";

const TvShowView: React.FC = () => {
  const [tvShows, setTvShows] = useState<TvShows[]>([]);

  useEffect(() => {
    const fetchTVShows = async () => {
      const tvShowData = await getTrendingTVShowsForTheDay();
      console.log(tvShowData, "tvshows");
      setTvShows(tvShowData);
    };
    fetchTVShows();
  }, []);

  return (
    <div>
      {tvShows.map((show) => (
        <MediaCard
          item={show}
          name={show.name}
          date={show.first_air_date}
          key={show.id}
        />
      ))}
    </div>
  );
};

export default TvShowView;
