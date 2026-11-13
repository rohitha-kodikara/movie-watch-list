import React from "react";

const Stat = ({ bgColor, statCount, statLabel, textColor }) => {
  return (
    <div className={`rounded-xl p-3 ${bgColor}`}>
      <p className={`text-2xl font-extrabold ${textColor}`}>{statCount}</p>
      <p className={`text-xs font-medium ${textColor}`}>{statLabel}</p>
    </div>
    //   <div className="rounded-xl bg-emerald-50 p-3">
    //     <p className="text-2xl font-extrabold text-emerald-600">1</p>
    //     <p className="text-xs font-medium text-emerald-500">Movies watched</p>
    //   </div>
  );
};

export default Stat;
