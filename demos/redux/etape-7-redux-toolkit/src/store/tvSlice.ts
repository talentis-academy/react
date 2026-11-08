// features/stock/tvSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = { total: 3 };

const tvSlice = createSlice({
  name: "tv",
  initialState,
  reducers: {
    buyTv(state) {
      state.total -= 1;
    },
    /*buyTvPromotion(state, action: PayloadAction<string>) {
      state.total -= 1;
    }/*, */
  },
});

export const { buyTv } = tvSlice.actions;
export default tvSlice.reducer;
