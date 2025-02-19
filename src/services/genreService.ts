import { http } from "./httpService";

export const getGenres = async () => {
  try {
    const response = await http.get("/genre/movie/list", {});

    return response.data.genres;
  } catch (error) {
    console.error("Error fetching movies:", error);
    return [];
  }
};
