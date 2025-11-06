import CharacterCard from "./CharacterCard";
import SkeletonCard from "./SkeletonCard";

export default function CharacterGrid({
  people = [],
  loading,
  error,
  onCardClick,
}) {
  if (error) {
    return (
      <div className="py-12">
        <div className="max-w-xl mx-auto text-center">
          <p className="text-red-400 font-semibold mb-4">
            Oops — something went wrong.
          </p>
          <p className="text-sm text-slate-400">
            Try refreshing the page or check your network connection.
          </p>
        </div>
      </div>
    );
  }

  if (!loading && people.length === 0) {
    return (
      <div className="py-16">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-amber-400 to-yellow-500 mb-6 shadow-[0_0_30px_rgba(251,191,36,0.4)]">
            <svg
              className="w-10 h-10 text-black"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                d="M12 2v4"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="12" cy="14" r="6" strokeWidth="1.5" />
            </svg>
          </div>
          <h3 className="text-2xl font-semibold text-white mb-2">
            No characters found
          </h3>
          <p className="text-sm text-slate-400">
            Try a different name or clear the search to see all results.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-8">
      {loading ? (
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <SkeletonCard key={i} />
          ))}
        </div>
      ) : (
        <div
          className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
          aria-live="polite"
        >
          {people.map((char) => (
            <CharacterCard
              key={char.id}
              char={char}
              onClick={() => onCardClick(char)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
