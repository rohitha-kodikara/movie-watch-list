import React from "react";

const Priority = ({ m, priorityStyles }) => {
  return (
    <div className="mt-3 flex items-center justify-between pl-7">
      <span className="text-xs font-medium text-slate-500">Priority</span>
      <select
        defaultValue={m.priority}
        className={`rounded-full px-3 py-1 text-xs font-semibold capitalize ring-1 outline-none ${priorityStyles[m.priority]}`}
      >
        <option value="high">High</option>
        <option value="medium">Medium</option>
        <option value="low">Low</option>
      </select>
    </div>
  );
};

export default Priority;
