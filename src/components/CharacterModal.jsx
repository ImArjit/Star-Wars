import React from "react";
import { X } from "lucide-react";

export default function CharacterModal({ char, onClose }) {
  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50">
      <div className="bg-gray-900/80 border border-gray-700 rounded-2xl p-6 w-[90%] max-w-lg shadow-2xl text-gray-100 relative">
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition"
          onClick={onClose}
        >
          <X size={24} />
        </button>

        <img
          src={char.image}
          alt={char.name}
          className="w-40 h-40 rounded-full mx-auto mb-4 border-4 border-yellow-400 shadow-lg"
        />
        <h2 className="text-3xl font-bold text-center text-yellow-400 mb-4">
          {char.name}
        </h2>

        <div className="space-y-2 text-sm">
          <p>
            <span className="text-gray-400">Height:</span> {char.height} cm
          </p>
          <p>
            <span className="text-gray-400">Mass:</span> {char.mass} kg
          </p>
          <p>
            <span className="text-gray-400">Hair Color:</span> {char.hair_color}
          </p>
          <p>
            <span className="text-gray-400">Eye Color:</span> {char.eye_color}
          </p>
          <p>
            <span className="text-gray-400">Birth Year:</span> {char.birth_year}
          </p>
          <p>
            <span className="text-gray-400">Gender:</span> {char.gender}
          </p>
        </div>
      </div>
    </div>
  );
}
