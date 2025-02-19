import axios from "axios";

import { API_KEY, BASE_URL } from "../config";

export const getTrendingTVShowsForTheDay = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/trending/tv/day`, {
      params: {
        api_key: API_KEY,
        language: "en-US",
        page: 1,
      },
    });
    return response.data.results;
  } catch (error) {
    console.error("Error fetching tv shows:", error);
    return [];
  }
};
