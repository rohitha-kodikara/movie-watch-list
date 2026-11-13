import { createSlice } from "@reduxjs/toolkit";

//initial state
const initialState = {
  browse: [
    {
      id: 1,
      title: "Inception",
      year: 2010,
      genre: "Sci-Fi",
      emoji: "🌀",
      gradient: "from-indigo-500 to-purple-600",
      added: false,
    },
    {
      id: 2,
      title: "Spirited Away",
      year: 2001,
      genre: "Animation",
      emoji: "🐉",
      gradient: "from-emerald-400 to-teal-600",
      added: false,
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
      added: false,
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
  ],
  statInformation: [
    {
      id: 1,
      bgColor: "bg-emerald-100",
      statLabel: "High priority left",
      textColor: "text-emerald-600",
      prefix: "high",
    },
    {
      id: 2,
      bgColor: "bg-amber-100",
      statLabel: "Medium priority left",
      textColor: "text-amber-600",
      prefix: "medium",
    },
  ],
  pendingWatchList: [],
  filter: "all",
  progress: 0,
};

//create slice
const watchListSlice = createSlice({
  name: "watchlist",
  initialState,
  reducers: {
    // Action to add a movie to the watchlist
    addToWatchList: (state, action) => {
      const movie = action.payload;
      const existingMovie = state.pendingWatchList.find(
        (m) => m.id === movie.id,
      );
      if (!existingMovie) {
        state.pendingWatchList.unshift({
          ...movie,
          priority: "medium",
        });
        state.browse = state.browse.map((m) =>
          m.id === movie.id ? { ...m, added: true } : m,
        );
      }
    },
    //update priority of a movie in the watchlist
    updatePriority: {
      prepare(movieId, newPriority) {
        return {
          payload: { movieId, newPriority },
        };
      },

      reducer(state, action) {
        const { movieId, newPriority } = action.payload;

        const movie = state.pendingWatchList.find(
          (movie) => movie.id === movieId,
        );

        if (movie) {
          movie.priority = newPriority;
        }
      },
    },

    // Action to remove a movie from the watchlist
    removeFromWatchList: (state, action) => {
      const movieId = action.payload;
      state.pendingWatchList = state.pendingWatchList.filter(
        (movie) => movie.id !== movieId,
      );
      state.browse = state.browse.map((m) =>
        m.id === movieId ? { ...m, added: false } : m,
      );
    },

    //set watched status of a movie in the watchlist
    setWatchedStatus: {
      prepare(movieId, watched) {
        return {
          payload: { movieId, watched },
        };
      },
      reducer(state, action) {
        const { movieId, watched } = action.payload;
        const movie = state.pendingWatchList.find((m) => m.id === movieId);
        if (movie) {
          movie.watched = watched;
        }
      },
    },
  },
});

// Export the action creators
export const {
  addToWatchList,
  updatePriority,
  removeFromWatchList,
  setWatchedStatus,
} = watchListSlice.actions;

// Export the reducer
export default watchListSlice.reducer;
