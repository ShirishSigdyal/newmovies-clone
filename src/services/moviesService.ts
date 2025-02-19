import { http } from "./httpService";

export const getTrendingMoviesForTheDay = async () => {
  const queryParams = {
    language: "en-US",
    page: 1,
  };

  try {
    const response = await http.get("/trending/movie/day", {
      params: queryParams,
    });
    return response.data.results;
  } catch (error) {
    console.error("Error fetching movies:", error);
    return [];
  }
};
