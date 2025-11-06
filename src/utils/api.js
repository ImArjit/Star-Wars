import axios from "axios";

export const swapi = axios.create({
  baseURL: "https://swapi.dev/api",
  headers: { Accept: "application/json" },
  timeout: 10000,
});

export function extractIdFromUrl(url = "") {
  const m = url.match(/\/people\/(\d+)\/?$/);
  return m ? m[1] : null;
}
