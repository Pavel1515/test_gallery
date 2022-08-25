import { configureStore } from "@reduxjs/toolkit";
import home from "./Slices/homeSlice";

const store = configureStore({
  reducer: {
    home,
  },
});
export default store;
