export default function Hero() {
  return (
    <>
      <section id="home" className="hero-gradient text-white">
        <div className="max-w-6xl mx-auto container-px px-6 py-24 sm:py-32 text-center">
          <p className="text-sky-300 font-semibold text-sm mb-4">
            Your next watch is one search away
          </p>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight max-w-3xl mx-auto">
            Discover movies worth your evening
          </h1>
          <p className="mt-5 text-lg text-slate-200 max-w-xl mx-auto">
            Browse thousands of titles, search by name, and dig into ratings,
            casts, and summaries before you press play.
          </p>
          <a
            href="/movie"
            className="inline-flex mt-9 bg-white text-blue-700 font-semibold px-7 py-3 rounded-full hover:bg-slate-100 transition"
          >
            Explore Now
          </a>
        </div>
      </section>
    </>
  );
}
