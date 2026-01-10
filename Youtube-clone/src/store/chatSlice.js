import { createSlice } from "@reduxjs/toolkit";

const MAX_MESSAGES = 50;

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    messages: [],
  },
  reducers: {
    addMessage: (state, action) => {
      state.messages.unshift(action.payload);
      if (state.messages.length > MAX_MESSAGES) {
        state.messages.length = MAX_MESSAGES;
      }
    },
  },
});

export const { addMessage } = chatSlice.actions;

export default chatSlice.reducer;
