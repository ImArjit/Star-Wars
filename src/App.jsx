import SearchBar from "./components/SearchBar";
import CharacterGrid from "./components/CharacterGrid";
import CharacterModal from "./components/CharacterModal";
import Pagination from "./components/Pagination";
import { useCharacterStore } from "./store/useCharacterStore";
import LoginPage from "./pages/LoginPage";
import { useAuthStore } from "./store/authStore";
import { useEffect } from "react";

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

  const { user, logout } = useAuthStore();

  useEffect(() => {
    fetchData({ page: 1, search: "" });
  }, []);

  useEffect(() => {
    const delay = setTimeout(() => {
      fetchData({ page: 1, search: searchTerm });
    }, 500);
    return () => clearTimeout(delay);
  }, [searchTerm, user]);

  if (!user) return <LoginPage />;

  return (
    <div className="min-h-screen py-12 bg-gradient-to-b from-gray-900 via-gray-950 to-black text-gray-100">
      <div className="container mx-auto px-4">
        <header className="text-center mb-10">
          <h1 className="text-5xl font-bold text-white mb-2 tracking-tight">
            Star Wars Explorer
          </h1>
          <p className="text-gray-400">
            Discover your favorite Star Wars characters. Search, explore, and
            learn more.
          </p>
        </header>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
          <div className="flex justify-start w-full md:w-auto">
            <button
              onClick={logout}
              className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-lg font-medium 
                         transition-all shadow-md hover:shadow-red-500/30 cursor-pointer"
            >
              Logout
            </button>
          </div>

          <div className="flex-1 flex justify-center">
            <div className="w-full sm:w-96">
              <SearchBar
                onSearch={(q) => setSearchTerm(q)}
                placeholder="Search characters (e.g. Luke, Yoda, Leia)"
              />
            </div>
          </div>

          <div className="flex justify-end w-full md:w-auto text-sm text-gray-400">
            Results:{" "}
            <span className="text-white font-semibold ml-1">{count}</span>
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
