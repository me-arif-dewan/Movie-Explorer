import { useEffect, useState } from "react";
import MovieCard from "./shared/MovieCard";
import MovieModal from "./shared/MovieModal";
import MovieSearch from "./shared/MovieSearch";
import NoMovieFound from "./shared/NoMovieFound";

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleSearch = async (query) => {
    const url = query.trim()
      ? `https://api.tvmaze.com/search/shows?q=${query}`
      : `https://api.tvmaze.com/shows`;
    const res = await fetch(url);
    const data = await res.json();
    setMovies(query.trim() ? data.map((item) => item.show) : data);
  };

  useEffect(() => {
    handleSearch("");
  }, []);

  return (
    <>
      <section
        id="listing"
        className="max-w-6xl mx-auto container-px px-6 py-16"
      >
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-2xl font-bold">Browse movies</h1>
            <p className="muted text-sm mt-1">
              Search by title - results update as you type.
            </p>
          </div>
        </div>

        <MovieSearch onSearch={handleSearch} />

        {movies?.length > 0 ? (
          <div
            id="movie-grid"
            className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          >
            {movies.map((movie) => (
              <MovieCard
                key={movie.id}
                movie={movie}
                onSelect={setSelectedMovie}
              />
            ))}
          </div>
        ) : (
          <NoMovieFound />
        )}

        {selectedMovie && (
          <MovieModal
            movie={selectedMovie}
            onClose={() => setSelectedMovie(null)}
          />
        )}
      </section>
    </>
  );
}
