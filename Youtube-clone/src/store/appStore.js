import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchSlice from "./searchSlice";
import chatSlice from "./chatSlice";
import searchedVideosSlice from "./searchedVideosSlice";
import themeSlice from "./themeSlice";

const store = configureStore({
  reducer: {
    app: appSlice,
    search: searchSlice,
    chat: chatSlice,
    searchedVideos: searchedVideosSlice,
    theme: themeSlice,
  },
});

export default store;
