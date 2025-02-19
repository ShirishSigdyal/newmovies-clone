interface BaseMedia {
  id: string | number;
  overview: string;
  poster_path: string;
  backdrop_path: string;
  vote_average: number;
  genre_ids: number[];
}

export interface Movie extends BaseMedia {
  title: string;
  release_date: string;
}

export interface TvShow extends BaseMedia {
  name: string;
  first_air_date: string;
}

type MediaItem = Movie | TvShow;

export type MediaProps = {
  genreMap: Map<number, string>;
};

export interface MediaItemProps {
  item: MediaItem;
  name: string;
  date: string;
  genres: string[];
}

export type Genre = {
  id: string | number;
  name: string;
};
