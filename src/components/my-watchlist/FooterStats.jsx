import React, { useMemo } from "react";
import Stat from "./Stat";
import { useSelector } from "react-redux";

const FooterStats = () => {
  const statsInfo = useSelector((state) => state.watchlist.statInformation);

  const pendingWatchList = useSelector(
    (state) => state.watchlist.pendingWatchList,
  );

  const priorityCount = useMemo(() => {
    const high = pendingWatchList.filter(
      (movie) => movie.priority === "high",
    ).length;

    const medium = pendingWatchList.filter(
      (movie) => movie.priority === "medium",
    ).length;

    return { high, medium };
  }, [pendingWatchList]);

  return (
    <div className="mt-5 grid grid-cols-2 gap-3 border-t pt-4 text-center">
      {statsInfo.map((stat) => (
        <Stat
          key={stat.id}
          bgColor={stat.bgColor}
          statCount={priorityCount[stat.prefix]}
          statLabel={stat.statLabel}
          textColor={stat.textColor}
        />
      ))}
    </div>
  );
};

export default FooterStats;
