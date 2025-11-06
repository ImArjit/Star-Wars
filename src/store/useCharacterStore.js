import { create } from "zustand";
import axios from "axios";

const BASE_URL = "https://swapi.dev/api/people/";

export const useCharacterStore = create((set, get) => ({
  people: [],
  count: 0,
  page: 1,
  totalPages: 1,
  loading: false,
  error: "",
  selectedChar: null,
  searchTerm: "",

  setSearchTerm: (term) => set({ searchTerm: term }),
  setSelectedChar: (char) => set({ selectedChar: char }),

  fetchData: async ({ page = 1, search = "" } = {}) => {
    try {
      set({ loading: true, error: "" });

      const params = { page };
      if (search.trim()) params.search = search.trim();

      const res = await axios.get(BASE_URL, { params });
      const data = res.data;

      const prepared = data.results.map((p) => {
        const id =
          p.url.match(/people\/(\d+)/)?.[1] ||
          Math.random().toString(36).slice(2, 8);
        return {
          ...p,
          id,
          image: `https://picsum.photos/seed/sw-${id}/520/520`,
        };
      });

      set({
        people: prepared,
        count: data.count,
        totalPages: Math.max(1, Math.ceil(data.count / 10)),
        page,
      });
    } catch (err) {
      set({ error: err.message || "Failed to fetch data" });
    } finally {
      set({ loading: false });
    }
  },
}));
