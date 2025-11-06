import React, { useState, useEffect } from "react";
import { useCharacterStore } from "../store/useCharacterStore";

export default function SearchBar({ placeholder }) {
  const [query, setQuery] = useState("");
  const { setSearch, people, loading } = useCharacterStore();

  useEffect(() => {
    const delay = setTimeout(() => {
      setSearch(query);
    }, 600);
    return () => clearTimeout(delay);
  }, [query, setSearch]);

  return (
    <div className="relative w-full max-w-xl mx-auto mb-8">
      <input
        type="text"
        value={query}
        placeholder={placeholder || "Search characters..."}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full px-5 py-3 rounded-xl border border-gray-700 bg-gray-900 text-gray-100 focus:outline-none focus:ring-2 focus:ring-yellow-400 shadow-md transition"
      />

      {query && people.length > 0 && !loading && (
        <ul className="absolute top-full left-0 w-full bg-gray-900 mt-2 rounded-xl border border-gray-700 max-h-60 overflow-y-auto shadow-lg z-10">
          {people.slice(0, 6).map((p) => (
            <li
              key={p.id}
              className="px-4 py-2 hover:bg-gray-800 cursor-pointer transition"
              onClick={() => setQuery(p.name)}
            >
              {p.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
