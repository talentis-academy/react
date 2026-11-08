import { createSlice } from "@reduxjs/toolkit";

// Le panier : une liste de lignes { id, name, price, icon, quantity }
const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // payload = le produit à ajouter
    addToCart(state, action) {
      const product = action.payload;
      const item = state.items.find((i) => i.id === product.id);
      if (item) {
        item.quantity += 1; // déjà dans le panier : on augmente la quantité
      } else {
        state.items.push({
          id: product.id,
          name: product.name,
          price: product.price,
          icon: product.icon,
          quantity: 1,
        });
      }
    },
    // payload = l'id du produit
    increment(state, action) {
      const item = state.items.find((i) => i.id === action.payload);
      if (item) item.quantity += 1;
    },
    // payload = l'id du produit ; à 0, la ligne disparaît
    decrement(state, action) {
      const item = state.items.find((i) => i.id === action.payload);
      if (!item) return;
      item.quantity -= 1;
      if (item.quantity === 0) {
        state.items = state.items.filter((i) => i.id !== action.payload);
      }
    },
    // payload = l'id du produit
    removeFromCart(state, action) {
      state.items = state.items.filter((i) => i.id !== action.payload);
    },
    clearCart(state) {
      state.items = [];
    },
  },
});

export const { addToCart, increment, decrement, removeFromCart, clearCart } =
  cartSlice.actions;

// Selectors : lire le state du panier depuis n'importe quel composant
export const selectCartItems = (state) => state.cart.items;
export const selectCartCount = (state) =>
  state.cart.items.reduce((total, item) => total + item.quantity, 0);
export const selectCartTotal = (state) =>
  state.cart.items.reduce((total, item) => total + item.price * item.quantity, 0);

export default cartSlice.reducer;
