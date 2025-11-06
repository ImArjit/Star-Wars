import React from "react";

export default function CharacterCard({ char, onClick }) {
  return (
    <div
      onClick={onClick}
      className="group relative bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl shadow-lg hover:shadow-yellow-400/30 overflow-hidden cursor-pointer transition-transform transform hover:-translate-y-2 duration-300"
    >
      <img
        src={char.image}
        alt={char.name}
        className="w-full h-64 object-cover opacity-80 group-hover:opacity-100 transition"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <h3 className="text-lg font-semibold text-yellow-400">{char.name}</h3>
        <p className="text-sm text-gray-400">{char.gender}</p>
      </div>
    </div>
  );
}
