import React from "react";
import Stat from "./Stat";

const statInformation = [
  {
    id: 1,
    bgColor: "bg-emerald-100",
    statCount: "1",
    statLabel: "High priority left",
    textColor: "text-emerald-600",
  },
  {
    id: 2,
    bgColor: "bg-amber-100",
    statCount: "2",
    statLabel: "Medium priority left",
    textColor: "text-amber-600",
  },
];

const FooterStats = () => {
  return (
    <div className="mt-5 grid grid-cols-2 gap-3 border-t pt-4 text-center">
      {statInformation.map((stat) => (
        <Stat
          key={stat.id}
          bgColor={stat.bgColor}
          statCount={stat.statCount}
          statLabel={stat.statLabel}
          textColor={stat.textColor}
        />
      ))}
    </div>
  );
};

export default FooterStats;
