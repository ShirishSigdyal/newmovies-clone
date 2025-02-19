interface BaseMedia {
  id: string | number;
  overview: string;
  poster_path: string;
  backdrop_path: string;
  vote_average: number;
}

export interface Movie extends BaseMedia {
  title: string;
  release_date: string;
}

export interface TvShows extends BaseMedia {
  name: string;
  first_air_date: string;
}

type MediaItem = Movie | TvShows;

export interface MediaItemProps {
  item: MediaItem;
  name: string;
  date: string;
}
