import Navbar from "./components/header/Navbar";
import BrowseMovies from "./components/browse-movies/BrowseMovies";
import MyWatchList from "./components/my-watchlist/MyWatchList";

function App() {
  const browse = [
    {
      id: 1,
      title: "Inception",
      year: 2010,
      genre: "Sci-Fi",
      emoji: "🌀",
      gradient: "from-indigo-500 to-purple-600",
      added: true,
    },
    {
      id: 2,
      title: "Spirited Away",
      year: 2001,
      genre: "Animation",
      emoji: "🐉",
      gradient: "from-emerald-400 to-teal-600",
      added: true,
    },
    {
      id: 3,
      title: "The Dark Knight",
      year: 2008,
      genre: "Action",
      emoji: "🦇",
      gradient: "from-slate-600 to-slate-900",
      added: false,
    },
    {
      id: 4,
      title: "Parasite",
      year: 2019,
      genre: "Thriller",
      emoji: "🏠",
      gradient: "from-rose-500 to-orange-500",
      added: false,
    },
    {
      id: 5,
      title: "Interstellar",
      year: 2014,
      genre: "Sci-Fi",
      emoji: "🚀",
      gradient: "from-sky-500 to-blue-700",
      added: true,
    },
    {
      id: 6,
      title: "Coco",
      year: 2017,
      genre: "Animation",
      emoji: "💀",
      gradient: "from-amber-400 to-pink-500",
      added: false,
    },
  ];

  const watchlist = [
    { id: 1, title: "Inception", year: 2010, watched: true, priority: "high" },
    {
      id: 2,
      title: "Spirited Away",
      year: 2001,
      watched: false,
      priority: "medium",
    },
    {
      id: 5,
      title: "Interstellar",
      year: 2014,
      watched: false,
      priority: "high",
    },
  ];

  const priorityStyles = {
    high: "bg-red-100 text-red-700 ring-red-200",
    medium: "bg-amber-100 text-amber-700 ring-amber-200",
    low: "bg-sky-100 text-sky-700 ring-sky-200",
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-indigo-50 to-slate-100">
      {/* Navbar */}
      <Navbar />

      <main className="mx-auto grid max-w-6xl gap-8 p-6 lg:grid-cols-[3fr_2fr]">
        {/* Browse movies */}
        <BrowseMovies browse={browse} />

        {/* Watchlist panel */}
        <MyWatchList watchlist={watchlist} priorityStyles={priorityStyles} />
      </main>
    </div>
  );
}

export default App;
