import { http } from "./httpService";

export const getTrendingTVShowsForTheDay = async () => {
  const queryParams = {
    language: "en-US",
    page: 1,
  };

  try {
    const response = await http.get(`/trending/tv/day`, {
      params: queryParams,
    });
    return response.data.results;
  } catch (error) {
    console.error("Error fetching tv shows:", error);
    return [];
  }
};
