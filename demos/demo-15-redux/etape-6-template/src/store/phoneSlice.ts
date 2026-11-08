import { createSlice } from "@reduxjs/toolkit";

const phoneSlice = createSlice({
  name: "phone",
  initialState: {
    total: 10,
  },
  reducers: {
    buyPhone: (state, action) => {
      state.total -= action.payload || 1;
    },
  },
});

export const { buyPhone } = phoneSlice.actions;
export const phoneReducer = phoneSlice.reducer;
