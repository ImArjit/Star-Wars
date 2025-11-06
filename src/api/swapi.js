import axios from "axios";

export const swapi = axios.create({
  baseURL: "https://swapi.dev/api/",
  timeout: 10000,
});

export function extractIdFromUrl(url) {
  const match = url.match(/\/people\/(\d+)\//);
  return match ? match[1] : null;
}
