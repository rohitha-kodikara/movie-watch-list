import { useState } from "react";
import Button from "../../../ui/Button";
import { useDispatch } from "react-redux";
import {
  removeFromWatchList,
  setWatchedStatus,
  updatePriority,
} from "../../../features/watchlist/watchListSlice";

const Item = ({ movie }) => {
  const [priority, setPriority] = useState(movie.priority);
  const [isChecked, setIsChecked] = useState(false);

  const dispatch = useDispatch();

  function handleUpdatePriority(newPriority, movieId) {
    setPriority((prev) => (prev == newPriority ? prev : newPriority));
    dispatch(updatePriority(movieId, newPriority));
  }

  function handleRemoveFromWatchList(movieId) {
    dispatch(removeFromWatchList(movieId));
  }

  function handleCheck(checked, movieId) {
    setIsChecked((prev) => !prev);
    dispatch(setWatchedStatus(movieId, checked));
  }

  return (
    <li
      key={movie.id}
      className="rounded-xl border border-slate-200 bg-slate-50 p-3 transition hover:border-indigo-300 hover:bg-white"
    >
      <div className="flex items-start justify-between gap-2">
        <label className="flex items-start gap-3">
          <input
            checked={isChecked}
            onChange={(e) => handleCheck(e.target.checked, movie.id)}
            type="checkbox"
            className="mt-1 h-4 w-4 accent-indigo-600"
          />
          <div>
            <p
              className={`font-semibold ${
                movie.watched ? "text-slate-400 line-through" : "text-slate-800"
              }`}
            >
              {movie.title}
            </p>
            <p className="text-xs text-slate-400">{movie.year}</p>
          </div>
        </label>
        <Button
          onClick={() => handleRemoveFromWatchList(movie.id)}
          bgColor="bg-red-100"
          className="text-xs font-medium text-red-800 py-1 px-2 rounded-lg hover:bg-red-500 transition hover:text-white"
        >
          Remove
        </Button>
      </div>

      {/* Priority */}
      <div className="mt-3 flex items-center justify-between pl-7">
        <span className="text-xs font-medium text-slate-500">Priority</span>
        <select
          value={priority}
          onChange={(e) => handleUpdatePriority(e.target.value, movie.id)}
          className={`rounded-full px-3 py-1 text-xs font-semibold capitalize ring-1 outline-none `}
        >
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>
      </div>
    </li>
  );
};

export default Item;
