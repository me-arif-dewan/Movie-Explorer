export default function MovieSearch({ onSearch }) {
  return (
    <div className="surface border border-slate-200 dark:border-slate-800 rounded-2xl p-2 flex items-center gap-3 mb-10 shadow-sm">
      <span className="pl-3 text-lg">🔍</span>
      <input
        type="text"
        placeholder="Search for a movie..."
        onChange={(e) => onSearch(e.target.value)}
        className="flex-1 bg-transparent outline-none py-2 pr-3 text-sm placeholder:muted"
      />
    </div>
  );
}
