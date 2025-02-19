import axios from "axios";

import { API_KEY, BASE_URL } from "../config";

export const getGenres = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/genre/movie/list`, {
      params: {
        api_key: API_KEY,
      },
    });
    return response.data.genres;
  } catch (error) {
    console.error("Error fetching movies:", error);
    return [];
  }
};
