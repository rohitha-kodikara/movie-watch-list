import React from "react";
import ResetWatchList from "./ResetWatchList";
import Progress from "./Progress";
import FilterTab from "./FilterTab";
import FooterStats from "./FooterStats";

const MyWatchList = ({ watchlist, priorityStyles }) => {
  return (
    <aside className="h-fit rounded-2xl bg-white p-5 shadow-lg ring-1 ring-slate-200 lg:sticky lg:top-24">
      <ResetWatchList />

      {/* Progress */}
      <Progress />

      {/* Filter tabs */}
      <div className="mb-4 grid grid-cols-3 gap-1 rounded-xl bg-slate-100 p-1 text-sm font-medium">
        <FilterTab />
      </div>

      {/* Items */}
      <ul className="space-y-3">
        {watchlist.map((m) => (
          <li
            key={m.id}
            className="rounded-xl border border-slate-200 bg-slate-50 p-3 transition hover:border-indigo-300 hover:bg-white"
          >
            <div className="flex items-start justify-between gap-2">
              <label className="flex items-start gap-3">
                <input
                  type="checkbox"
                  defaultChecked={m.watched}
                  className="mt-1 h-4 w-4 accent-indigo-600"
                />
                <div>
                  <p
                    className={`font-semibold ${
                      m.watched
                        ? "text-slate-400 line-through"
                        : "text-slate-800"
                    }`}
                  >
                    {m.title}
                  </p>
                  <p className="text-xs text-slate-400">{m.year}</p>
                </div>
              </label>
              <button className="text-xs font-medium text-red-500 hover:underline">
                Remove
              </button>
            </div>

            {/* Priority */}
            <div className="mt-3 flex items-center justify-between pl-7">
              <span className="text-xs font-medium text-slate-500">
                Priority
              </span>
              <select
                defaultValue={m.priority}
                className={`rounded-full px-3 py-1 text-xs font-semibold capitalize ring-1 outline-none ${priorityStyles[m.priority]}`}
              >
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
              </select>
            </div>
          </li>
        ))}
      </ul>

      {/* Footer stats */}
      <FooterStats />
    </aside>
  );
};

export default MyWatchList;
