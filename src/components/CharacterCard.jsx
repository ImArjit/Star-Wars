export default function CharacterCard({ char, onClick }) {
  if (!char) return null;

  const onKey = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <article
      role="button"
      tabIndex={0}
      onKeyDown={onKey}
      onClick={onClick}
      className="relative rounded-2xl overflow-hidden border border-white/6 bg-gradient-to-br from-slate-900/60 to-slate-900/40 backdrop-blur-sm shadow-[0_12px_40px_rgba(2,6,23,0.6)]
                 transform transition hover:-translate-y-3 hover:scale-[1.01] duration-300 focus:outline-none focus:ring-2 focus:ring-amber-400 cursor-pointer"
    >
      <div
        aria-hidden
        className="h-1"
        style={{
          background: `linear-gradient(90deg, rgba(255,189,64,0.95), rgba(99,102,241,0.95))`,
        }}
      />

      <div className="relative h-56 md:h-64 w-full">
        <img
          src={char.image}
          alt={char.name}
          className="object-cover w-full h-full"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
      </div>

      <div className="p-4 md:p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-lg md:text-xl font-semibold text-white leading-tight">
              {char.name}
            </h3>
            <p className="text-sm text-slate-400 mt-1">
              {char.birth_year ?? "—"} •{" "}
              <span className="capitalize">{char.gender ?? "—"}</span>
            </p>
          </div>

          <div className="text-right">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/6 text-sm font-medium text-white">
              <svg
                className="w-4 h-4 opacity-90"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  d="M12 2v4"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="12" cy="14" r="6" strokeWidth="1.2" />
              </svg>
              <span>{char.films?.length ?? 0}</span>
            </div>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          <span className="text-xs text-slate-300 bg-white/3 px-2 py-1 rounded-md">
            Height:{" "}
            {char.height === "unknown"
              ? "—"
              : `${(Number(char.height) / 100).toFixed(2)} m`}
          </span>
          <span className="text-xs text-slate-300 bg-white/3 px-2 py-1 rounded-md">
            Mass: {char.mass === "unknown" ? "—" : `${char.mass} kg`}
          </span>
        </div>
      </div>
    </article>
  );
}
