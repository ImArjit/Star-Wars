import { useEffect } from "react";
import { useCharacterStore } from "../store/useCharacterStore";
import SearchBar from "../components/SearchBar";
import CharacterGrid from "../components/CharacterGrid";
import Pagination from "../components/Pagination";
import CharacterModal from "../components/CharacterModal";

export default function CharactersPage() {
  const {
    people,
    count,
    page,
    search,
    loading,
    error,
    selectedChar,
    fetchCharacters,
    setSearch,
    setSelected,
  } = useCharacterStore();

  useEffect(() => {
    fetchCharacters(page, search);
  }, [page, search]);

  const totalPages = Math.ceil(count / 10);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-black text-gray-200 py-12 px-4">
      <div className="container mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-10 text-yellow-400">
          ⭐ Star Wars Characters
        </h1>

        <SearchBar onSearch={setSearch} />

        <CharacterGrid
          people={people}
          loading={loading}
          error={error}
          onCardClick={setSelected}
        />

        <Pagination
          page={page}
          totalPages={totalPages}
          onPageChange={(p) => fetchCharacters(p, search)}
        />

        {selectedChar && (
          <CharacterModal
            char={selectedChar}
            onClose={() => setSelected(null)}
          />
        )}
      </div>
    </div>
  );
}
