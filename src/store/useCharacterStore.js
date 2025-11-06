import { create } from "zustand";
import { swapi, extractIdFromUrl } from "../api/swapi";

export const useCharacterStore = create((set, get) => ({
  people: [],
  count: 0,
  page: 1,
  search: "",
  loading: false,
  error: "",
  selectedChar: null,

  setSearch: (search) => set({ search }),
  setSelected: (char) => set({ selectedChar: char }),

  fetchCharacters: async (page = 1, search = "") => {
    try {
      set({ loading: true, error: "" });

      const res = await swapi.get("/people/", {
        params: { page, search },
      });

      const data = res.data;
      const prepared = data.results.map((p) => {
        const id =
          extractIdFromUrl(p.url) || Math.random().toString(36).slice(2, 8);
        return {
          ...p,
          id,
          image: `https://picsum.photos/seed/sw-${id}/500/500`,
        };
      });

      set({
        people: prepared,
        count: data.count,
        page,
        search,
        loading: false,
      });
    } catch (err) {
      set({ error: err.message || "Failed to fetch data", loading: false });
    }
  },
}));
