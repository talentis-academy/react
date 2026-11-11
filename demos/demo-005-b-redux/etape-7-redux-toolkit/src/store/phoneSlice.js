// features/stock/phoneSlice.ts
import { createSlice } from "@reduxjs/toolkit";
// import { buyTv, buyTvPromotion } from "./tvSlice";

const initialState = { total: 5 };

const phoneSlice = createSlice({
  name: "phone",
  initialState,
  // Chaque reducer devient une action (phoneSlice.actions) ; Immer permet de « modifier » state directement
  reducers: {
    buyPhone(state) {
      // action.payload can be used for more complex logic
      state.total -= 1;
    },
  },
  // extraReducers (en commentaire) : réagir à une action d'un autre slice, ex. la promo TV
  /*extraReducers: (builder) => {
    builder.addCase(buyTv, (state) => {
      state.total -= 1; // si achat TV => +1 phone
    });
  },*/
  /*
    extraReducers: (builder) => {
    builder.addCase(buyTvPromotion, (state, action) => {
      if (action.payload === "2025XMAS") {
        state.total -= 1;
      }
    });
  }, */
});

export const { buyPhone } = phoneSlice.actions;
export default phoneSlice.reducer;
