import React from "react";
import Button from "../../../ui/Button";
import Priority from "./Priority";

const Item = ({ m, priorityStyles }) => {
  return (
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
                m.watched ? "text-slate-400 line-through" : "text-slate-800"
              }`}
            >
              {m.title}
            </p>
            <p className="text-xs text-slate-400">{m.year}</p>
          </div>
        </label>
        <Button
          bgColor="bg-red-100"
          className="text-xs font-medium text-red-800 py-1 px-2 rounded-lg hover:bg-red-500 transition hover:text-white"
        >
          Remove
        </Button>
      </div>

      {/* Priority */}
      <Priority m={m} priorityStyles={priorityStyles} />
    </li>
  );
};

export default Item;
