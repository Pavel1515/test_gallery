import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchListImage = createAsyncThunk("home/fetchHome", async () => {
  const { data } = await axios.get(
    "https://api.unsplash.com/photos/?client_id=ab3411e4ac868c2646c0ed488dfd919ef612b04c264f3374c97fff98ed253dc9"
  );

  return data;
});

const initialState = {
  status: "",
  listPhoto: [],
  urlFull: "",
};

const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    seUrlFull: (state, action) => {
      state.urlFull = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchListImage.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchListImage.fulfilled, (state, action) => {
        state.listPhoto = action.payload;
        state.status = "loaded";
      })
      .addCase(fetchListImage.rejected, (state, action) => {
        state.error = action.error.message;
        state.status = "error";
      });
  },
});
export const { seUrlFull } = homeSlice.actions;
export default homeSlice.reducer;
