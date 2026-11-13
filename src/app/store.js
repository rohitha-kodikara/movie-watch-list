import { configureStore } from "@reduxjs/toolkit";
import watchListReducer from "../features/watchlist/watchListSlice";

const store = configureStore({
  reducer: {
    watchlist: watchListReducer,
  },
});
export default store;
