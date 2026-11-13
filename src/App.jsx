import Navbar from "./components/header/Navbar";
import BrowseMovies from "./components/browse-movies/BrowseMovies";
import { useSelector } from "react-redux";
import MyWatchList from "./components/my-watchlist/MyWatchList";

function App() {
  const browse = useSelector((state) => state.watchlist.browse);
  const pendingWatchList = useSelector(
    (state) => state.watchlist.pendingWatchList,
  );
  const priorityStyles = useSelector((state) => state.watchlist.priorityStyles);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-indigo-50 to-slate-100">
      {/* Navbar */}
      <Navbar />

      <main className="mx-auto grid max-w-6xl gap-8 p-6 lg:grid-cols-[3fr_2fr]">
        {/* Browse movies */}
        <BrowseMovies browse={browse} />

        {/* Watchlist panel */}
        <MyWatchList
          watchlist={pendingWatchList}
          priorityStyles={priorityStyles}
        />
      </main>
    </div>
  );
}

export default App;
