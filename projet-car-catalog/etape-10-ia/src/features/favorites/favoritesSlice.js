import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favorites: [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    // Si la voiture est déjà en favori on la retire, sinon on l'ajoute
    toggleFavorite: (state, action) => {
      const carExists = state.favorites.some((car) => car.id === action.payload.id);
      if (carExists) {
        state.favorites = state.favorites.filter((car) => car.id !== action.payload.id);
      } else {
        state.favorites.push(action.payload);
      }
    },
  },
});

export const { toggleFavorite } = favoritesSlice.actions;

// Selectors
export const selectFavorites = (state) => state.favorites.favorites;

export default favoritesSlice.reducer;
