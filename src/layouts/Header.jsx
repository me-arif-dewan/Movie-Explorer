import useTheme from "../hooks/useTheme";

export default function Header() {
  const { dark, toggleTheme } = useTheme();

  return (
    <header
      id="site-header"
      className="sticky top-0 z-40"
      style={{ paddingTop: "env(safe-area-inset-top, 0px)" }}
    >
      <div className="max-w-6xl mx-auto container-px px-6 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2 font-extrabold text-lg tracking-tight">
          <span>🎬</span>
          <span className="brand-grad">MovieExplorer</span>
        </a>
        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            className="w-10 h-10 rounded-full surface border border-slate-200 dark:border-slate-700 flex items-center justify-center text-lg"
          >
            {dark ? "☀️" : "🌙"}
          </button>
          <a
            href="/movie"
            className="hidden sm:inline-flex btn-primary text-sm font-semibold px-4 py-2 rounded-full"
          >
            Movies
          </a>
        </div>
      </div>
    </header>
  );
}
