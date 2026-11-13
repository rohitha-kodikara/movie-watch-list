import React from "react";
import { useSelector } from "react-redux";

const Navbar = () => {
  const totatlItems = useSelector(
    (state) => state.watchlist.pendingWatchList.length,
  );
  const watchedItems = useSelector(
    (state) =>
      state.watchlist.pendingWatchList.filter((movie) => movie.watched).length,
  );

  return (
    <nav className="sticky top-0 z-10 flex items-center justify-between bg-slate-900/95 px-6 py-4 text-white shadow-lg backdrop-blur">
      <h1 className="flex items-center gap-2 text-xl font-extrabold tracking-tight">
        <span className="text-2xl">🎬</span> Watch
        <span className="text-indigo-400">List</span>
      </h1>
      <div className="flex gap-3 text-sm font-semibold">
        <span className="rounded-full bg-indigo-500/20 px-3 py-1 text-indigo-300 ring-1 ring-indigo-400/40">
          Total: {totatlItems}
        </span>
        <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-emerald-300 ring-1 ring-emerald-400/40">
          Watched: {watchedItems}
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
