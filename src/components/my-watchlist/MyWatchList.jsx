import ResetWatchList from "./ResetWatchList";
import Progress from "./Progress";
import FilterTab from "./filter-tabs/FilterTab";
import FooterStats from "./FooterStats";
import ListItems from "./list-items/ListItems";
import { useSelector } from "react-redux";

const MyWatchList = () => {
  const activeTab = useSelector(
    (state) => state.watchlist.filterTabs.find((tab) => tab.isActive)?.name,
  );

  const watchList = useSelector((state) => state.watchlist.pendingWatchList);

  const filteredWatchlist = watchList.filter((movie) => {
    if (activeTab === "All") return true;
    if (activeTab === "Unwatched") return !movie.watched;
    if (activeTab === "Watched") return movie.watched;
  });

  return (
    <aside className="h-fit rounded-2xl bg-white p-5 shadow-lg ring-1 ring-slate-200 lg:sticky lg:top-24">
      <ResetWatchList />

      {/* Progress */}
      <Progress />

      {/* Filter tabs */}
      <div className="mb-4 grid grid-cols-3 gap-1 rounded-xl bg-slate-100 p-1 text-sm font-medium">
        <FilterTab />
      </div>

      {/* Items */}
      <ListItems watchlist={filteredWatchlist} />

      {/* Footer stats */}
      <FooterStats />
    </aside>
  );
};

export default MyWatchList;
