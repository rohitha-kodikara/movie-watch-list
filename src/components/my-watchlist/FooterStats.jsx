import React from "react";
import Stat from "./Stat";

const FooterStats = () => {
  return (
    <div className="mt-5 grid grid-cols-2 gap-3 border-t pt-4 text-center">
      <Stat />
      <Stat />
    </div>
  );
};

export default FooterStats;
