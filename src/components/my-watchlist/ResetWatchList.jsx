import React from "react";
import Button from "../../ui/Button";

const ResetWatchList = () => {
  return (
    <div className="mb-4 flex items-center justify-between">
      <h2 className="text-xl font-bold text-slate-800">My Watchlist</h2>
      <Button
        bgColor="bg-red-50"
        className="rounded-lg px-3 py-1 text-xs font-semibold text-red-500 ring-1 ring-red-200 transition hover:bg-red-50"
      >
        Clear watched
      </Button>
    </div>
  );
};

export default ResetWatchList;
