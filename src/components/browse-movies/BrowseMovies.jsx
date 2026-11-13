import React from "react";
import Movie from "./Movie";
import { useDispatch } from "react-redux";
import { addToWatchList } from "../../features/watchlist/watchListSlice";

const BrowseMovies = ({ browse }) => {
  const dispatch = useDispatch();

  function handleAddToWatchList(movie) {
    dispatch(addToWatchList(movie));
  }

  return (
    <section>
      <div className="mb-5">
        <h2 className="text-2xl font-bold text-slate-800">Browse Movies</h2>
        <p className="text-sm text-slate-500">
          Pick what you want to watch next
        </p>
      </div>

      <div className="grid grid-cols-2 gap-5 sm:grid-cols-3">
        {browse.map((movie) => (
          <Movie
            key={movie.id}
            movie={movie}
            handleAddToWatchList={handleAddToWatchList}
          />
        ))}
      </div>
    </section>
  );
};

export default BrowseMovies;
