import { useSelector } from "react-redux";

import Tab from "./Tab";

const FilterTab = () => {
  const tabs = useSelector((state) => state.watchlist.filterTabs);

  return (
    <>
      {tabs.map((tab) => (
        <Tab
          key={tab.id}
          name={tab.name}
          isActive={tab.isActive}
          tabId={tab.id}
        />
      ))}
    </>
  );
};

export default FilterTab;
