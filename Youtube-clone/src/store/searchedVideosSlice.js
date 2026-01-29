import { createSlice } from "@reduxjs/toolkit";

const searchedVideosSlice = createSlice({
  name: "searchedVideos",
  initialState: {
    videos: [],
  },
  reducers: {
    setSearchedVideos: (state, action) => {
      state.videos = action.payload;
    },
    clearSearchedVideos: (state, action) => {
      state.videos = [];
    },
  },
});

export const { setSearchedVideos, clearSearchedVideos } = searchedVideosSlice.actions;

export default searchedVideosSlice.reducer;
