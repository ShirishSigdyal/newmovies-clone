import axios from "axios";

import { ACCESS_TOKEN, BASE_URL } from "../config";

export const http = axios.create({
  baseURL: BASE_URL,
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${ACCESS_TOKEN}`,
  },
});
