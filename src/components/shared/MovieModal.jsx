export default function MovieModal({ movie, onClose }) {
  const { name, image, rating, premiered, genres, summary } = movie;
  const year = premiered?.slice(0, 4) ?? "N/A";
  const score = rating?.average ? `⭐ ${rating.average}` : "N/A";
  const backdrop = image?.original ?? "https://placehold.co/800x420/1E3A8A/FFFFFF?text=No+Image";
  const overview = summary?.replace(/<[^>]+>/g, "") ?? "No overview available.";

  return (
    <div
      className="fixed inset-0 z-50 modal-overlay flex items-center justify-center p-4"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="surface rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl">
        <div className="relative">
          <img src={backdrop} className="w-full h-48 object-cover" alt={name} />
          <button
            onClick={onClose}
            aria-label="Close"
            className="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70"
          >
            ✕
          </button>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold">{name}</h3>
          <p className="muted text-sm mt-1">
            {score} &nbsp;|&nbsp; 📅 {year} &nbsp;|&nbsp; {genres?.join(", ") || "N/A"}
          </p>
          <p className="muted text-xs uppercase tracking-wide mt-4 font-semibold">Overview</p>
          <p className="mt-1 text-sm leading-relaxed">{overview}</p>
          <button
            onClick={onClose}
            className="mt-6 w-full sm:w-auto btn-primary text-sm font-semibold px-5 py-2 rounded-lg"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
