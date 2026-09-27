export default function MovieCard({ movie, onSelect }) {
  const { name, image, rating, premiered } = movie;
  const year = premiered?.slice(0, 4) ?? "N/A";
  const score = rating?.average ? `⭐ ${rating.average}` : "N/A";
  const poster = image?.medium ?? "https://placehold.co/400x560/1E3A8A/FFFFFF?text=No+Image";

  return (
    <article className="card surface rounded-2xl overflow-hidden shadow-sm transition">
      <img src={poster} alt={name} className="w-full aspect-[2/3] object-cover" />
      <div className="p-4">
        <h3 className="font-semibold truncate">{name}</h3>
        <p className="muted text-sm mt-1">{score} &nbsp;•&nbsp; 📅 {year}</p>
        <button
          onClick={() => onSelect(movie)}
          className="mt-4 w-full btn-primary text-sm font-semibold py-2 rounded-lg"
        >
          See Details
        </button>
      </div>
    </article>
  );
}
