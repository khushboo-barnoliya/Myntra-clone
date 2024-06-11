
import { configureStore } from "@reduxjs/toolkit";
import itemSlice from "./ItemSlice";
import fetchSlice from "./Fetch";

const myntraConfigStore = configureStore({
  reducer:{
    items: itemSlice.reducer,
    fetchStatus: fetchSlice.reducer,
  }
})

export default myntraConfigStore;