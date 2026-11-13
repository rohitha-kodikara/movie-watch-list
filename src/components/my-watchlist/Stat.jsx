import React from "react";

const Stat = ({ bgColor, statCount = 0, statLabel, textColor }) => {
  return (
    <div className={`rounded-xl p-3 ${bgColor}`}>
      <p className={`text-2xl font-extrabold ${textColor}`}>{statCount}</p>
      <p className={`text-xs font-medium ${textColor}`}>{statLabel}</p>
    </div>
  );
};

export default Stat;
