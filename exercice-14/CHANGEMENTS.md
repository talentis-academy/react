# Exercice 14 · Le panier avec Redux Toolkit : les changements entre les étapes

Pour chaque étape, ce qui change par rapport à l’étape précédente. En vert : les lignes ajoutées. En rouge : les lignes retirées. « utilisé » : un fichier qui existait déjà mais qui est branché (importé) à partir de cette étape, montré en entier.

## Étape 1 → 2 : `template` → `correction`

Redux Toolkit branché : slice du panier, store, Provider, useSelector et useDispatch dans les composants

### `src/App.jsx` (modifié, +7 −2)

```diff
@@ -1,9 +1,14 @@
 import "./App.css";
 import Home from "./pages/Home";
+import { Provider } from "react-redux";
+import { store } from "./store/store";
 
-// TODO (exercice) : entourer <Home /> avec le <Provider store={store}> de react-redux
 function App() {
-  return <Home />;
+  return (
+    <Provider store={store}>
+      <Home />
+    </Provider>
+  );
 }
 
 export default App;
```

### `src/components/Cart.jsx` (modifié, +20 −9)

```diff
@@ -1,11 +1,18 @@
+import { useDispatch, useSelector } from "react-redux";
+import {
+  clearCart,
+  decrement,
+  increment,
+  removeFromCart,
+  selectCartItems,
+  selectCartTotal,
+} from "../store/cartSlice";
 import { formatPrice } from "../utils";
 
 function Cart() {
-  // TODO (exercice) : lire les lignes et le total du panier dans le store (useSelector)
-  const items = [];
-  const total = 0;
-
-  // TODO (exercice) : brancher les boutons −, +, × et « Vider le panier » (useDispatch)
+  const items = useSelector(selectCartItems);
+  const total = useSelector(selectCartTotal);
+  const dispatch = useDispatch();
 
   return (
     <aside className="card cart">
@@ -22,12 +29,14 @@
                   {item.icon} {item.name}
                 </span>
                 <div className="qty">
-                  <button>−</button>
+                  <button onClick={() => dispatch(decrement(item.id))}>−</button>
                   <span>{item.quantity}</span>
-                  <button>+</button>
+                  <button onClick={() => dispatch(increment(item.id))}>+</button>
                 </div>
                 <span className="cart-price">{formatPrice(item.price * item.quantity)}</span>
-                <button className="remove">×</button>
+                <button className="remove" onClick={() => dispatch(removeFromCart(item.id))}>
+                  ×
+                </button>
               </li>
             ))}
           </ul>
@@ -36,7 +45,9 @@
             <span>Total</span>
             <span className="price">{formatPrice(total)}</span>
           </div>
-          <button className="btn btn-secondary">Vider le panier</button>
+          <button className="btn btn-secondary" onClick={() => dispatch(clearCart())}>
+            Vider le panier
+          </button>
         </>
       )}
     </aside>
```

### `src/components/Header.jsx` (modifié, +5 −2)

```diff
@@ -1,6 +1,9 @@
+import { useSelector } from "react-redux";
+import { selectCartCount } from "../store/cartSlice";
+
 function Header() {
-  // TODO (exercice) : lire le nombre d'articles du panier dans le store (useSelector)
-  const count = 0;
+  // Le nombre d'articles vient du store : il se met à jour partout en même temps
+  const count = useSelector(selectCartCount);
 
   return (
     <header className="header">
```

### `src/components/ProductCard.jsx` (modifié, +8 −5)

```diff
@@ -1,10 +1,9 @@
+import { useDispatch } from "react-redux";
+import { addToCart } from "../store/cartSlice";
 import { formatPrice } from "../utils";
 
 function ProductCard({ product }) {
-  // TODO (exercice) : au clic, dispatcher l'action addToCart(product) (useDispatch)
-  const handleAdd = () => {
-    console.log("Ajouter au panier :", product.name);
-  };
+  const dispatch = useDispatch();
 
   return (
     <div className="card">
@@ -18,7 +17,11 @@
         {product.available ? "Available" : "Not Available"}
       </span>
       <p className="price">{formatPrice(product.price)}</p>
-      <button className="btn" disabled={!product.available} onClick={handleAdd}>
+      <button
+        className="btn"
+        disabled={!product.available}
+        onClick={() => dispatch(addToCart(product))}
+      >
         Ajouter au panier
       </button>
     </div>
```

### `src/store/cartSlice.js` (ajouté, +62 −0)

```diff
@@ -1,0 +1,62 @@
+import { createSlice } from "@reduxjs/toolkit";
+
+// Le panier : une liste de lignes { id, name, price, icon, quantity }
+const initialState = {
+  items: [],
+};
+
+const cartSlice = createSlice({
+  name: "cart",
+  initialState,
+  reducers: {
+    // payload = le produit à ajouter
+    addToCart(state, action) {
+      const product = action.payload;
+      const item = state.items.find((i) => i.id === product.id);
+      if (item) {
+        item.quantity += 1; // déjà dans le panier : on augmente la quantité
+      } else {
+        state.items.push({
+          id: product.id,
+          name: product.name,
+          price: product.price,
+          icon: product.icon,
+          quantity: 1,
+        });
+      }
+    },
+    // payload = l'id du produit
+    increment(state, action) {
+      const item = state.items.find((i) => i.id === action.payload);
+      if (item) item.quantity += 1;
+    },
+    // payload = l'id du produit ; à 0, la ligne disparaît
+    decrement(state, action) {
+      const item = state.items.find((i) => i.id === action.payload);
+      if (!item) return;
+      item.quantity -= 1;
+      if (item.quantity === 0) {
+        state.items = state.items.filter((i) => i.id !== action.payload);
+      }
+    },
+    // payload = l'id du produit
+    removeFromCart(state, action) {
+      state.items = state.items.filter((i) => i.id !== action.payload);
+    },
+    clearCart(state) {
+      state.items = [];
+    },
+  },
+});
+
+export const { addToCart, increment, decrement, removeFromCart, clearCart } =
+  cartSlice.actions;
+
+// Selectors : lire le state du panier depuis n'importe quel composant
+export const selectCartItems = (state) => state.cart.items;
+export const selectCartCount = (state) =>
+  state.cart.items.reduce((total, item) => total + item.quantity, 0);
+export const selectCartTotal = (state) =>
+  state.cart.items.reduce((total, item) => total + item.price * item.quantity, 0);
+
+export default cartSlice.reducer;
```

### `src/store/store.js` (ajouté, +9 −0)

```diff
@@ -1,0 +1,9 @@
+import { configureStore } from "@reduxjs/toolkit";
+import cartReducer from "./cartSlice";
+
+export const store = configureStore({
+  reducer: {
+    cart: cartReducer,
+  },
+  devTools: true, // optionnel (par défaut true en dev)
+});
```
