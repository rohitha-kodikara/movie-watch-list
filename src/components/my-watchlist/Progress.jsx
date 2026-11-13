import React from "react";
import { useSelector } from "react-redux";

const Progress = () => {
  const watchList = useSelector((state) => state.watchlist.pendingWatchList);
  const totalMovies = watchList.length;
  const watchedMovies = watchList.filter((movie) => movie.watched).length;
  const progressPercentage =
    totalMovies === 0 ? 0 : (watchedMovies / totalMovies) * 100;

  return (
    <div className="mb-5">
      <div className="mb-1 flex justify-between text-xs font-medium text-slate-500">
        <span>Progress</span>
        <span>{Math.round(progressPercentage)}%</span>
      </div>
      <div className="h-2.5 overflow-hidden rounded-full bg-slate-200">
        <div
          className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-emerald-400"
          style={{ width: `${progressPercentage}%` }}
        />
      </div>
    </div>
  );
};

export default Progress;
