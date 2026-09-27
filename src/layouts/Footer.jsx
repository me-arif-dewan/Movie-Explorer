export default function Footer() {
  return (
    <>
      <footer
        id="footer"
        className="fixed bottom-0 left-0 right-0 z-40 border-t border-slate-200 dark:border-slate-800 surface"
      >
        <div className="max-w-6xl mx-auto container-px px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm muted">
          <p className="font-semibold text-current">🎬 MovieExplorer</p>
          <p>© 2026 MovieExplorer. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-blue-600 dark:hover:text-sky-400">
              GitHub
            </a>
            <a href="#" className="hover:text-blue-600 dark:hover:text-sky-400">
              Twitter
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
