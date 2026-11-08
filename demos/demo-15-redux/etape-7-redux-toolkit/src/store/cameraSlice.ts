// features/stock/cameraSlice.ts
import { createSlice } from "@reduxjs/toolkit";

const initialState = { total: 8 };

const cameraSlice = createSlice({
  name: "camera",
  initialState,
  reducers: {
    buyCamera(state) {
      state.total -= 1;
    },
  },
});

export const { buyCamera } = cameraSlice.actions;
export default cameraSlice.reducer;
