import Button from "../../ui/Button";

const Movie = ({ movie, handleAddToWatchList }) => {
  return (
    <div
      key={movie.id}
      className="group overflow-hidden rounded-2xl bg-white shadow-md ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-xl"
    >
      <div
        className={`flex h-32 items-center justify-center bg-gradient-to-br ${movie.gradient}`}
      >
        <span className="text-6xl drop-shadow transition group-hover:scale-110">
          {movie.emoji}
        </span>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-slate-800">{movie.title}</h3>
        <div className="mt-1 flex items-center gap-2 text-xs">
          <span className="rounded-full bg-slate-100 px-2 py-0.5 font-medium text-slate-600">
            {movie.genre}
          </span>
          <span className="text-slate-400">{movie.year}</span>
        </div>
        <Button
          onClick={() => handleAddToWatchList(movie)}
          disabled={movie.added}
          className="mt-4 w-full rounded-lg py-2 text-sm font-semibold text-white shadow transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:bg-slate-200 disabled:text-slate-500 disabled:shadow-none"
        >
          {movie.added ? "Added ✓" : "+ Add to Watchlist"}
        </Button>
      </div>
    </div>
  );
};

export default Movie;
