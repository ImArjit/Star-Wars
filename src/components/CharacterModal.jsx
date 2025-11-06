import { X } from "lucide-react";

export default function CharacterModal({ char, onClose }) {
  if (!char) return null;

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div
        className="relative bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-gray-100 
                   rounded-2xl shadow-2xl max-w-lg w-full border border-gray-700 overflow-hidden
                   animate-fade-in-up"
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-white transition z-50"
          aria-label="Close"
        >
          <X size={24} />
        </button>

        <div className="relative">
          <img
            src={char.image}
            alt={char.name}
            className="w-full h-72 object-cover opacity-90 hover:opacity-100 transition-all duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
          <h2 className="absolute bottom-4 left-4 text-3xl font-extrabold text-white drop-shadow-lg">
            {char.name}
          </h2>
        </div>

        <div className="p-6 space-y-3">
          <div className="grid grid-cols-2 gap-3 text-sm">
            <div className="space-y-2">
              <p>
                <span className="text-gray-400">Height:</span>{" "}
                <span className="font-medium">{char.height} cm</span>
              </p>
              <p>
                <span className="text-gray-400">Mass:</span>{" "}
                <span className="font-medium">{char.mass} kg</span>
              </p>
              <p>
                <span className="text-gray-400">Gender:</span>{" "}
                <span className="font-medium capitalize">{char.gender}</span>
              </p>
            </div>

            <div className="space-y-2">
              <p>
                <span className="text-gray-400">Birth Year:</span>{" "}
                <span className="font-medium">{char.birth_year}</span>
              </p>
              <p>
                <span className="text-gray-400">Hair Color:</span>{" "}
                <span className="font-medium capitalize">
                  {char.hair_color}
                </span>
              </p>
              <p>
                <span className="text-gray-400">Eye Color:</span>{" "}
                <span className="font-medium capitalize">{char.eye_color}</span>
              </p>
            </div>
          </div>

          <div className="border-t border-gray-700 my-4"></div>

          <div className="flex justify-end">
            <button
              onClick={onClose}
              className="px-5 py-2.5 bg-gradient-to-r from-emerald-500 to-teal-400 
                         text-white rounded-lg font-semibold shadow-md hover:shadow-lg
                         hover:from-emerald-400 hover:to-teal-300 transition-all duration-300"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
