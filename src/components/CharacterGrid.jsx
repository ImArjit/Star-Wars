import React from "react";
import CharacterCard from "./CharacterCard";

export default function CharacterGrid({ people, loading, error, onCardClick }) {
  if (error)
    return (
      <p className="text-center text-red-400 font-medium py-10">{error}</p>
    );

  if (loading)
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-10">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="h-72 bg-gray-800 rounded-2xl animate-pulse border border-gray-700"
          ></div>
        ))}
      </div>
    );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-10">
      {people.map((char) => (
        <CharacterCard
          key={char.id}
          char={char}
          onClick={() => onCardClick(char)}
        />
      ))}
    </div>
  );
}
