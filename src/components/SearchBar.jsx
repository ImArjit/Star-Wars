import React, { useEffect, useRef, useState } from "react";
import { useCharacterStore } from "../store/useCharacterStore";

export default function SearchBar({ placeholder = "Search characters..." }) {
  const fetchData = useCharacterStore((s) => s.fetchData);
  const people = useCharacterStore((s) => s.people);
  const setSelectedChar = useCharacterStore((s) => s.setSelectedChar);

  const [value, setValue] = useState("");
  const [open, setOpen] = useState(false);
  const debounceRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      fetchData({ page: 1, search: value || "" });
      setOpen(Boolean(value));
    }, 450);

    return () => clearTimeout(debounceRef.current);
  }, [value]);

  useEffect(() => {
    function onDoc(e) {
      if (!containerRef.current) return;
      if (!containerRef.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener("click", onDoc);
    return () => document.removeEventListener("click", onDoc);
  }, []);

  function onSelect(item) {
    setSelectedChar(item);
    setValue(item.name);
    setOpen(false);
  }

  return (
    <div ref={containerRef} className="relative w-full max-w-xl mx-auto">
      <div
        className="flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-gradient-to-r from-slate-900/60 to-slate-800/40 border border-white/6 shadow-sm"
        onClick={() => setOpen(Boolean(value))}
      >
        <svg
          className="w-5 h-5 text-slate-300 flex-shrink-0"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-4.35-4.35"
          />
          <circle cx="11" cy="11" r="6" />
        </svg>

        <input
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          onFocus={() => setOpen(Boolean(value))}
          placeholder={placeholder}
          className="flex-1 bg-transparent outline-none placeholder:text-slate-400 text-white text-sm"
        />

        {value ? (
          <button
            onClick={(e) => {
              e.stopPropagation();
              setValue("");
              fetchData({ page: 1, search: "" });
              setOpen(false);
            }}
            className="text-slate-300 hover:text-white rounded-md px-2 py-1"
            aria-label="Clear search"
          >
            ✕
          </button>
        ) : (
          <div className="text-slate-500 text-xs px-2">Press Enter</div>
        )}
      </div>

      {open && (
        <div className="absolute z-40 mt-2 w-full bg-slate-900/95 border border-white/6 rounded-2xl shadow-2xl overflow-hidden">
          <div className="px-4 py-2 text-xs text-slate-400 border-b border-white/6">
            Showing matches for{" "}
            <span className="text-white font-medium ml-1">{value}</span>
          </div>

          <div className="max-h-64 overflow-y-auto">
            {people && people.length > 0 ? (
              people.map((p) => (
                <button
                  key={p.id}
                  onClick={() => onSelect(p)}
                  className="w-full text-left px-4 py-3 hover:bg-slate-800/50 flex items-center gap-3 transition"
                >
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-10 h-10 rounded-md object-cover border border-white/6"
                  />
                  <div className="flex-1">
                    <div className="text-sm text-white font-medium">
                      {p.name}
                    </div>
                    <div className="text-xs text-slate-400">
                      {p.birth_year} • {p.gender}
                    </div>
                  </div>
                  <div className="text-sm text-slate-300 ml-2">
                    {p.films?.length ?? 0} films
                  </div>
                </button>
              ))
            ) : (
              <div className="px-4 py-4 text-sm text-slate-400">No matches</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
