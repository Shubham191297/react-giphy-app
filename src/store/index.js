import { configureStore, createSlice } from "@reduxjs/toolkit";

const listGiphySlice = createSlice({
  name: "listGiphy",
  initialState: {
    gifList: [],
  },
  reducers: {
    replaceData(state, action) {
      state.gifList = action.payload;
    },
  },
});

export const giphyListActions = listGiphySlice.actions;

const store = configureStore({
  reducer: listGiphySlice.reducer,
});

export default store;
