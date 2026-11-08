> **Exercice 14 · Correction**

# Le panier d’achat avec Redux Toolkit

*Le slice du panier, le store, le Provider et les composants branchés.*

| | |
|---|---|
| **Énoncé** | Exercice_14_Enonce.docx |
| **Code** | Dossier `correction/` (et `template/` pour le point de départ) |
| **Source** | Exercice créé pour la formation (demande du formateur), sur la base de son projet Redux Toolkit et du style de la carte catalogue (cars-css) |

## Le slice du panier

**`src/store/cartSlice.js`**

```jsx
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
```

## Le store

**`src/store/store.js`**

```jsx
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
  devTools: true, // optionnel (par défaut true en dev)
});
```

## Le Provider

**`src/App.jsx`**

```jsx
import "./App.css";
import Home from "./pages/Home";
import { Provider } from "react-redux";
import { store } from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}

export default App;
```

## Les composants branchés

**`src/components/Header.jsx`**

```jsx
import { useSelector } from "react-redux";
import { selectCartCount } from "../store/cartSlice";

function Header() {
  // Le nombre d'articles vient du store : il se met à jour partout en même temps
  const count = useSelector(selectCartCount);

  return (
    <header className="header">
      <h1 className="header-title">Apple Store</h1>
      <div className="cart-badge">
        🛒 Panier <span className="cart-count">{count}</span>
      </div>
    </header>
  );
}

export default Header;
```

**`src/components/ProductCard.jsx`**

```jsx
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";
import { formatPrice } from "../utils";

function ProductCard({ product }) {
  const dispatch = useDispatch();

  return (
    <div className="card">
      <div className="product-icon">{product.icon}</div>
      <h3 className="product-name">{product.name}</h3>
      <div className="color">
        <span className="circle" style={{ backgroundColor: product.colorCode }}></span>
        <span>{product.color}</span>
      </div>
      <span className={`badge ${product.available ? "available" : "unavailable"}`}>
        {product.available ? "Available" : "Not Available"}
      </span>
      <p className="price">{formatPrice(product.price)}</p>
      <button
        className="btn"
        disabled={!product.available}
        onClick={() => dispatch(addToCart(product))}
      >
        Ajouter au panier
      </button>
    </div>
  );
}

export default ProductCard;
```

**`src/components/Cart.jsx`**

```jsx
import { useDispatch, useSelector } from "react-redux";
import {
  clearCart,
  decrement,
  increment,
  removeFromCart,
  selectCartItems,
  selectCartTotal,
} from "../store/cartSlice";
import { formatPrice } from "../utils";

function Cart() {
  const items = useSelector(selectCartItems);
  const total = useSelector(selectCartTotal);
  const dispatch = useDispatch();

  return (
    <aside className="card cart">
      <h2 className="section-title">Mon panier</h2>

      {items.length === 0 ? (
        <p className="empty">Votre panier est vide.</p>
      ) : (
        <>
          <ul className="cart-lines">
            {items.map((item) => (
              <li key={item.id} className="cart-line">
                <span className="cart-name">
                  {item.icon} {item.name}
                </span>
                <div className="qty">
                  <button onClick={() => dispatch(decrement(item.id))}>−</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => dispatch(increment(item.id))}>+</button>
                </div>
                <span className="cart-price">{formatPrice(item.price * item.quantity)}</span>
                <button className="remove" onClick={() => dispatch(removeFromCart(item.id))}>
                  ×
                </button>
              </li>
            ))}
          </ul>

          <div className="row total">
            <span>Total</span>
            <span className="price">{formatPrice(total)}</span>
          </div>
          <button className="btn btn-secondary" onClick={() => dispatch(clearCart())}>
            Vider le panier
          </button>
        </>
      )}
    </aside>
  );
}

export default Cart;
```

## Points clés

- Un seul state global (`state.cart`) partagé par 3 composants qui ne se passent aucune prop
- Les actions sont générées par `createSlice` ; le payload est le produit (`addToCart`) ou son id
- Grâce à Immer, les reducers modifient le draft (`item.quantity += 1`) sans casser l’immutabilité
- Les selectors calculent le nombre d’articles et le total : les composants restent simples
- Le fichier `CHANGEMENTS.pdf` montre ce qui change entre le template et la correction
