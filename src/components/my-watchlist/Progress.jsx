import React from "react";

const Progress = () => {
  return (
    <div className="mb-5">
      <div className="mb-1 flex justify-between text-xs font-medium text-slate-500">
        <span>Progress</span>
        <span>33%</span>
      </div>
      <div className="h-2.5 overflow-hidden rounded-full bg-slate-200">
        <div className="h-full w-1/3 rounded-full bg-gradient-to-r from-indigo-500 to-emerald-400" />
      </div>
    </div>
  );
};

export default Progress;
