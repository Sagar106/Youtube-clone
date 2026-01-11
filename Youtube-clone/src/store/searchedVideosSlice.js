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
  },
});

export const { setSearchedVideos } = searchedVideosSlice.actions;

export default searchedVideosSlice.reducer;