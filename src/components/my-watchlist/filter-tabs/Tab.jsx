import React from "react";
import Button from "../../../ui/Button";
import { useDispatch } from "react-redux";
import { filterWatchlist } from "../../../features/watchlist/watchListSlice";

const Tab = ({ name, isActive, tabId }) => {
  const dispatch = useDispatch();

  function handleTabClick() {
    dispatch(filterWatchlist(tabId));
  }

  return (
    <Button
      onClick={() => handleTabClick(tabId)}
      tabId={tabId}
      bgColor={
        isActive ? "bg-white text-gray-800" : "bg-gray-100 text-gray-400"
      }
      className="rounded-lg  py-1.5 shadow"
    >
      {name}
    </Button>
  );
};

export default Tab;
