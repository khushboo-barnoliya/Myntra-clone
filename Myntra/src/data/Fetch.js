
import { createSlice } from "@reduxjs/toolkit";

const fetchSlice = createSlice({
  name: "fetchStatus",
  initialState: {
    fetchDone: false,
    currentluFetching: false,
  },
  reducers: {
    FetchDone: (state) => {
      return state.fetchDone = true;
    },
    FetchStart: (state) => {
      return state.currentluFetching = true;
    },
    FetchEnd: (state) => {
      return state.currentluFetching = false;
    },
  }
})

export const FetchActions = fetchSlice.actions;

export default fetchSlice

