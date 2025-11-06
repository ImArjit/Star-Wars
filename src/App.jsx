import React from "react";
import SearchBar from "./components/SearchBar";
import CharacterGrid from "./components/CharacterGrid";
import CharacterModal from "./components/CharacterModal";
import Pagination from "./components/Pagination";
import { useCharacterStore } from "./store/useCharacterStore";

export default function App() {
  const {
    people,
    count,
    page,
    totalPages,
    selectedChar,
    loading,
    error,
    fetchData,
    setSearchTerm,
    searchTerm,
    setSelectedChar,
  } = useCharacterStore();

  React.useEffect(() => {
    fetchData({ page: 1, search: "" });
  }, []);

  React.useEffect(() => {
    const delay = setTimeout(() => {
      fetchData({ page: 1, search: searchTerm });
    }, 500);
    return () => clearTimeout(delay);
  }, [searchTerm]);

  return (
    <div className="min-h-screen py-12 bg-gradient-to-b from-gray-900 via-gray-950 to-black text-gray-100">
      <div className="container mx-auto px-4">
        <header className="mb-8 text-center">
          <h1 className="text-5xl font-bold text-white mb-2 tracking-tight">
            Star Wars Explorer
          </h1>
          <p className="text-gray-400">
            Discover your favorite Star Wars characters. Search, explore, and
            learn more.
          </p>
        </header>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          <SearchBar
            onSearch={(q) => setSearchTerm(q)}
            placeholder="Search characters (e.g. Luke, Yoda, Leia)"
          />
          <div className="text-sm text-gray-400">
            Results: <span className="text-white font-semibold">{count}</span>
          </div>
        </div>

        <CharacterGrid
          people={people}
          loading={loading}
          error={error}
          onCardClick={(p) => setSelectedChar(p)}
        />

        <div className="mt-8 flex items-center justify-center">
          <Pagination
            page={page}
            totalPages={totalPages}
            onPageChange={(p) => fetchData({ page: p, search: searchTerm })}
          />
        </div>

        {selectedChar && (
          <CharacterModal
            char={selectedChar}
            onClose={() => setSelectedChar(null)}
          />
        )}
      </div>
    </div>
  );
}
