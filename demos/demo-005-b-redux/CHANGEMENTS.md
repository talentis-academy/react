# Démo 005-B · Redux puis Redux Toolkit : les changements entre les étapes

Pour chaque étape, ce qui change par rapport à l’étape précédente. En vert : les lignes ajoutées. En rouge : les lignes retirées. « utilisé » : un fichier qui existait déjà mais qui est branché (importé) à partir de cette étape, montré en entier.

## Étape 1 · `etape-1-basic` : point de départ

createStore et un seul reducer : BUY_PHONE, BUY_TV, BUY_CAMERA ; getState, dispatch, subscribe

Le code de départ, en entier : les fichiers écrits pour la démo et utilisés (atteints par les imports depuis src/main.*) ; les fichiers du gabarit Vite non modifiés sont seulement listés. Ordre de lecture : main → App → composants et pages → le reste.

*Styles fournis (copiés tels quels, pas tapés en live) : `src/App.css` (67 lignes)*

*Fichiers générés par Vite, non modifiés (non affichés) : `index.html`, `vite.config.js`, `.gitignore`, `eslint.config.js`, `public/vite.svg`*

*package.json (gabarit Vite) : dépendances ajoutées : `react-redux ^9.2.0`, `redux ^5.0.1`*

### `src/main.jsx` (6 lignes)

```jsx
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <App />
);
```

### `src/App.jsx` (8 lignes)

```jsx
import "./App.css";
import Home from "./pages/Home.jsx";

function App() {
  return <Home />;
}

export default App;
```

### `src/pages/Home.jsx` (60 lignes)

```jsx
import phone from "../assets/phone.png";
import tv from "../assets/tv.png";
import camera from "../assets/camera.png";

import { buyPhone, buyTV, buyCamera, store } from "../store/index.js";
function Home() {
  // getState lit le state une fois : l'écran ne se met pas à jour tout seul (d'où le subscribe)
  const state = store.getState();
  return (
    <div>
      <h2>{"Welcome to our Application"}</h2>
      <div className="container">
        <div className="item">
          <img src={phone} alt="" width={100} height={100} />
          <div className="availability" id="phones">
            {state.phones} available
          </div>
          <button
            className="button"
            onClick={() => {
              store.dispatch(buyPhone());
            }}
          >
            Buy
          </button>
        </div>
        <div className="item">
          <img src={tv} alt="" width={100} height={100} />
          <div className="availability" id="tvs">
            {state.tvs} available
          </div>
          <button
            className="button"
            onClick={() => {
              store.dispatch(buyTV());
            }}
          >
            Buy
          </button>
        </div>
        <div className="item">
          <img src={camera} alt="" width={100} height={100} />
          <div className="availability" id="cameras">
            {state.cameras} available
          </div>
          <button
            className="button"
            onClick={() => {
              store.dispatch(buyCamera());
            }}
          >
            Buy
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
```

### `src/store/index.js` (73 lignes)

```js
import { createStore } from "redux";

// Action Types

const BUY_PHONE = "BUY_PHONE";
const BUY_TV = "BUY_TV";
const BUY_CAMERA = "BUY_CAMERA";

const buyPhone = () => {
  return {
    type: BUY_PHONE,
  };
};

const buyTV = () => {
  return {
    type: BUY_TV,
  };
};

const buyCamera = () => {
  return {
    type: BUY_CAMERA,
  };
};

// reducer

// initial state
const initialState = {
  phones: 5,
  tvs: 3,
  cameras: 8,
};

// (previousState, action) => newState
const phoneReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_PHONE:
      return {
        ...state,
        phones: state.phones - 1,
      };
    case BUY_TV:
      return {
        ...state,
        tvs: state.tvs - 1,
      };
    case BUY_CAMERA:
      return {
        ...state,
        cameras: state.cameras - 1,
      };
    default:
      return state;
  }
};

// store
// createStore : le store garde tout le state ; le reducer dit comment il change
const store = createStore(phoneReducer);

// subscribe : cette fonction est appelée après chaque dispatch
store.subscribe(() => {
  const state = store.getState();
  console.log("Updated State:", state);
  // Update the UI elements directly (Test)
  document.getElementById("phones").innerHTML = `${state.phones} available`;
  document.getElementById("tvs").innerHTML = `${state.tvs} available`;
  document.getElementById("cameras").innerHTML = `${state.cameras} available`;
});

export { store, buyPhone, buyTV, buyCamera, phoneReducer };
```

## Étape 1 → 2 : `etape-1-basic` → `etape-2-multi-reducers`

Un reducer par produit, combinés avec combineReducers

### `src/pages/Home.jsx` (modifié, +11 −10)

```diff
@@ -1,19 +1,20 @@
-import phone from "../assets/phone.png";
-import tv from "../assets/tv.png";
-import camera from "../assets/camera.png";
-
+import phoneImg from "../assets/phone.png";
+import tvImg from "../assets/tv.png";
+import cameraImg from "../assets/camera.png";
 import { buyPhone, buyTV, buyCamera, store } from "../store/index.js";
 function Home() {
   // getState lit le state une fois : l'écran ne se met pas à jour tout seul (d'où le subscribe)
   const state = store.getState();
+  const { phone, tv, camera } = state;
+
   return (
     <div>
       <h2>{"Welcome to our Application"}</h2>
       <div className="container">
         <div className="item">
-          <img src={phone} alt="" width={100} height={100} />
+          <img src={phoneImg} alt="" width={100} height={100} />
           <div className="availability" id="phones">
-            {state.phones} available
+            {phone.total} available
           </div>
           <button
             className="button"
@@ -25,9 +26,9 @@
           </button>
         </div>
         <div className="item">
-          <img src={tv} alt="" width={100} height={100} />
+          <img src={tvImg} alt="" width={100} height={100} />
           <div className="availability" id="tvs">
-            {state.tvs} available
+            {tv.total} available
           </div>
           <button
             className="button"
@@ -39,9 +40,9 @@
           </button>
         </div>
         <div className="item">
-          <img src={camera} alt="" width={100} height={100} />
+          <img src={cameraImg} alt="" width={100} height={100} />
           <div className="availability" id="cameras">
-            {state.cameras} available
+            {camera.total} available
           </div>
           <button
             className="button"
```

### `src/store/index.js` (modifié, +51 −23)

```diff
@@ -1,4 +1,4 @@
-import { createStore } from "redux";
+import { combineReducers, createStore } from "redux";
 
 // Action Types
 
@@ -27,47 +27,75 @@
 // reducer
 
 // initial state
-const initialState = {
-  phones: 5,
-  tvs: 3,
-  cameras: 8,
+const initialStatePhone = {
+  total: 5,
+};
+
+const initialStateTV = {
+  total: 3,
+};
+
+const initialStateCamera = {
+  total: 8,
 };
 
 // (previousState, action) => newState
-const phoneReducer = (state = initialState, action) => {
+const phoneReducer = (state = initialStatePhone, action) => {
   switch (action.type) {
     case BUY_PHONE:
       return {
         ...state,
-        phones: state.phones - 1,
-      };
-    case BUY_TV:
-      return {
-        ...state,
-        tvs: state.tvs - 1,
-      };
-    case BUY_CAMERA:
-      return {
-        ...state,
-        cameras: state.cameras - 1,
+        total: state.total - 1,
       };
     default:
       return state;
   }
 };
 
-// store
-// createStore : le store garde tout le state ; le reducer dit comment il change
-const store = createStore(phoneReducer);
+// (previousState, action) => newState
+const tvsReducer = (state = initialStateTV, action) => {
+  switch (action.type) {
+    case BUY_TV:
+      return {
+        ...state,
+        total: state.total - 1,
+      };
+    default:
+      return state;
+  }
+};
+
+// (previousState, action) => newState
+const camerasReducer = (state = initialStateCamera, action) => {
+  switch (action.type) {
+    case BUY_CAMERA:
+      return {
+        ...state,
+        total: state.total - 1,
+      };
+    default:
+      return state;
+  }
+};
+
+// combineReducers : chaque reducer gère sa part du state (state.phone, state.tv, state.camera)
+const rootReducer = combineReducers({
+  phone: phoneReducer,
+  tv: tvsReducer,
+  camera: camerasReducer,
+});
+
+const store = createStore(rootReducer);
 
 // subscribe : cette fonction est appelée après chaque dispatch
 store.subscribe(() => {
   const state = store.getState();
+  const { phone, tv, camera } = state;
   console.log("Updated State:", state);
   // Update the UI elements directly (Test)
-  document.getElementById("phones").innerHTML = `${state.phones} available`;
-  document.getElementById("tvs").innerHTML = `${state.tvs} available`;
-  document.getElementById("cameras").innerHTML = `${state.cameras} available`;
+  document.getElementById("phones").innerHTML = `${phone.total} available`;
+  document.getElementById("tvs").innerHTML = `${tv.total} available`;
+  document.getElementById("cameras").innerHTML = `${camera.total} available`;
 });
 
 export { store, buyPhone, buyTV, buyCamera, phoneReducer };
```

## Étape 2 → 3 : `etape-2-multi-reducers` → `etape-3-provider`

Dossier store/ (actions, reducers, store), <Provider>, useSelector, useDispatch

### `src/App.jsx` (modifié, +9 −2)

```diff
@@ -1,8 +1,15 @@
 import "./App.css";
-import Home from "./pages/Home.jsx";
+import Home from "./pages/Home.tsx";
+import { Provider } from "react-redux";
+import { store } from "./store/store.ts";
 
 function App() {
-  return <Home />;
+  // Provider donne le store à tous les composants (useSelector, useDispatch)
+  return (
+    <Provider store={store}>
+      <Home />
+    </Provider>
+  );
 }
 
 export default App;
```

### `src/pages/Home.jsx` (supprimé, +0 −61)

```diff
@@ -1,61 +1,0 @@
-import phoneImg from "../assets/phone.png";
-import tvImg from "../assets/tv.png";
-import cameraImg from "../assets/camera.png";
-import { buyPhone, buyTV, buyCamera, store } from "../store/index.js";
-function Home() {
-  // getState lit le state une fois : l'écran ne se met pas à jour tout seul (d'où le subscribe)
-  const state = store.getState();
-  const { phone, tv, camera } = state;
-
-  return (
-    <div>
-      <h2>{"Welcome to our Application"}</h2>
-      <div className="container">
-        <div className="item">
-          <img src={phoneImg} alt="" width={100} height={100} />
-          <div className="availability" id="phones">
-            {phone.total} available
-          </div>
-          <button
-            className="button"
-            onClick={() => {
-              store.dispatch(buyPhone());
-            }}
-          >
-            Buy
-          </button>
-        </div>
-        <div className="item">
-          <img src={tvImg} alt="" width={100} height={100} />
-          <div className="availability" id="tvs">
-            {tv.total} available
-          </div>
-          <button
-            className="button"
-            onClick={() => {
-              store.dispatch(buyTV());
-            }}
-          >
-            Buy
-          </button>
-        </div>
-        <div className="item">
-          <img src={cameraImg} alt="" width={100} height={100} />
-          <div className="availability" id="cameras">
-            {camera.total} available
-          </div>
-          <button
-            className="button"
-            onClick={() => {
-              store.dispatch(buyCamera());
-            }}
-          >
-            Buy
-          </button>
-        </div>
-      </div>
-    </div>
-  );
-}
-
-export default Home;
```

### `src/pages/Home.tsx` (ajouté, +70 −0)

```diff
@@ -1,0 +1,70 @@
+// @ts-ignore
+import phoneImg from "../assets/phone.png";
+// @ts-ignore
+import tvImg from "../assets/tv.png";
+// @ts-ignore
+import cameraImg from "../assets/camera.png";
+
+import { store } from "../store/store";
+import { buyPhone, buyTV, buyCamera } from "../store/actions";
+import { useSelector, useDispatch } from "react-redux";
+
+function Home() {
+  // useDispatch envoie les actions ; useSelector lit le state (re-render quand il change)
+  const dispatch = useDispatch();
+  const phone = useSelector((state: any) => state.phone);
+  const camera = useSelector((state: any) => state.camera);
+  const tv = useSelector((state: any) => state.tv);
+
+  return (
+    <div>
+      <h2>{"Welcome to our Application"}</h2>
+      <div className="container">
+        <div className="item">
+          <img src={phoneImg} alt="" width={100} height={100} />
+          <div className="availability" id="phones">
+            {phone.total} available
+          </div>
+          <button
+            className="button"
+            onClick={() => {
+              dispatch(buyPhone());
+            }}
+          >
+            Buy
+          </button>
+        </div>
+        <div className="item">
+          <img src={tvImg} alt="" width={100} height={100} />
+          <div className="availability" id="tvs">
+            {tv.total} available
+          </div>
+          <button
+            className="button"
+            onClick={() => {
+              dispatch(buyTV());
+            }}
+          >
+            Buy
+          </button>
+        </div>
+        <div className="item">
+          <img src={cameraImg} alt="" width={100} height={100} />
+          <div className="availability" id="cameras">
+            {camera.total} available
+          </div>
+          <button
+            className="button"
+            onClick={() => {
+              dispatch(buyCamera());
+            }}
+          >
+            Buy
+          </button>
+        </div>
+      </div>
+    </div>
+  );
+}
+
+export default Home;
```

### `src/store/actions.ts` (ajouté, +25 −0)

```diff
@@ -1,0 +1,25 @@
+// Action Types
+
+const BUY_PHONE = "BUY_PHONE";
+const BUY_TV = "BUY_TV";
+const BUY_CAMERA = "BUY_CAMERA";
+
+const buyPhone = () => {
+  return {
+    type: BUY_PHONE,
+  };
+};
+
+const buyTV = () => {
+  return {
+    type: BUY_TV,
+  };
+};
+
+const buyCamera = () => {
+  return {
+    type: BUY_CAMERA,
+  };
+};
+
+export { BUY_PHONE, BUY_TV, BUY_CAMERA, buyPhone, buyTV, buyCamera };
```

### `src/store/index.js` (supprimé, +0 −101)

```diff
@@ -1,101 +1,0 @@
-import { combineReducers, createStore } from "redux";
-
-// Action Types
-
-const BUY_PHONE = "BUY_PHONE";
-const BUY_TV = "BUY_TV";
-const BUY_CAMERA = "BUY_CAMERA";
-
-const buyPhone = () => {
-  return {
-    type: BUY_PHONE,
-  };
-};
-
-const buyTV = () => {
-  return {
-    type: BUY_TV,
-  };
-};
-
-const buyCamera = () => {
-  return {
-    type: BUY_CAMERA,
-  };
-};
-
-// reducer
-
-// initial state
-const initialStatePhone = {
-  total: 5,
-};
-
-const initialStateTV = {
-  total: 3,
-};
-
-const initialStateCamera = {
-  total: 8,
-};
-
-// (previousState, action) => newState
-const phoneReducer = (state = initialStatePhone, action) => {
-  switch (action.type) {
-    case BUY_PHONE:
-      return {
-        ...state,
-        total: state.total - 1,
-      };
-    default:
-      return state;
-  }
-};
-
-// (previousState, action) => newState
-const tvsReducer = (state = initialStateTV, action) => {
-  switch (action.type) {
-    case BUY_TV:
-      return {
-        ...state,
-        total: state.total - 1,
-      };
-    default:
-      return state;
-  }
-};
-
-// (previousState, action) => newState
-const camerasReducer = (state = initialStateCamera, action) => {
-  switch (action.type) {
-    case BUY_CAMERA:
-      return {
-        ...state,
-        total: state.total - 1,
-      };
-    default:
-      return state;
-  }
-};
-
-// combineReducers : chaque reducer gère sa part du state (state.phone, state.tv, state.camera)
-const rootReducer = combineReducers({
-  phone: phoneReducer,
-  tv: tvsReducer,
-  camera: camerasReducer,
-});
-
-const store = createStore(rootReducer);
-
-// subscribe : cette fonction est appelée après chaque dispatch
-store.subscribe(() => {
-  const state = store.getState();
-  const { phone, tv, camera } = state;
-  console.log("Updated State:", state);
-  // Update the UI elements directly (Test)
-  document.getElementById("phones").innerHTML = `${phone.total} available`;
-  document.getElementById("tvs").innerHTML = `${tv.total} available`;
-  document.getElementById("cameras").innerHTML = `${camera.total} available`;
-});
-
-export { store, buyPhone, buyTV, buyCamera, phoneReducer };
```

### `src/store/reducers.ts` (ajouté, +57 −0)

```diff
@@ -1,0 +1,57 @@
+// reducer
+
+import { BUY_CAMERA, BUY_PHONE, BUY_TV } from "./actions";
+
+// initial state
+const initialStatePhone = {
+  total: 5,
+};
+
+const initialStateTV = {
+  total: 3,
+};
+
+const initialStateCamera = {
+  total: 8,
+};
+
+// (previousState, action) => newState
+const phoneReducer = (state = initialStatePhone, action) => {
+  switch (action.type) {
+    case BUY_PHONE:
+      return {
+        ...state,
+        total: state.total - 1,
+      };
+    default:
+      return state;
+  }
+};
+
+// (previousState, action) => newState
+const tvsReducer = (state = initialStateTV, action) => {
+  switch (action.type) {
+    case BUY_TV:
+      return {
+        ...state,
+        total: state.total - 1,
+      };
+    default:
+      return state;
+  }
+};
+
+// (previousState, action) => newState
+const camerasReducer = (state = initialStateCamera, action) => {
+  switch (action.type) {
+    case BUY_CAMERA:
+      return {
+        ...state,
+        total: state.total - 1,
+      };
+    default:
+      return state;
+  }
+};
+
+export { phoneReducer, tvsReducer, camerasReducer };
```

### `src/store/store.ts` (ajouté, +21 −0)

```diff
@@ -1,0 +1,21 @@
+import { combineReducers, createStore, applyMiddleware } from "redux";
+import { camerasReducer, phoneReducer, tvsReducer } from "./reducers";
+
+// combineReducers : chaque reducer gère sa part du state (state.phone, state.tv, state.camera)
+const rootReducer = combineReducers({
+  phone: phoneReducer,
+  tv: tvsReducer,
+  camera: camerasReducer,
+});
+
+// Simple logging middleware
+const loggerMiddleware = (store) => (next) => (action) => {
+  console.log("Action:", action);
+  const result = next(action);
+  console.log("State after action:", store.getState());
+  return result;
+};
+
+const store = createStore(rootReducer, applyMiddleware(loggerMiddleware));
+
+export { store };
```

## Étape 3 → 4 : `etape-3-provider` → `etape-4-payload`

Action avec payload : choisir la quantité de téléphones

### `src/App.css` (modifié, +13 −0)

```diff
@@ -65,3 +65,16 @@
   font-weight: 600;
   color: white;
 }
+
+.quantity {
+  margin: 0;
+}
+
+.input {
+  width: 60px;
+  padding: 4px;
+  font-size: 16px;
+  border: 1px solid #ccc;
+  border-radius: 4px;
+  text-align: center;
+}
```

### `src/pages/Home.tsx` (modifié, +39 −2)

```diff
@@ -5,16 +5,23 @@
 // @ts-ignore
 import cameraImg from "../assets/camera.png";
 
-import { store } from "../store/store";
 import { buyPhone, buyTV, buyCamera } from "../store/actions";
 import { useSelector, useDispatch } from "react-redux";
+import { useState } from "react";
 
 function Home() {
+  const [quantity, setQuantity] = useState(1);
+
   // useDispatch envoie les actions ; useSelector lit le state (re-render quand il change)
   const dispatch = useDispatch();
   const phone = useSelector((state: any) => state.phone);
   const camera = useSelector((state: any) => state.camera);
   const tv = useSelector((state: any) => state.tv);
+
+  const handleChange = (e) => {
+    const value = e.target.value;
+    setQuantity(value);
+  };
 
   return (
     <div>
@@ -25,10 +32,20 @@
           <div className="availability" id="phones">
             {phone.total} available
           </div>
+          <div className="quantity">
+            <input
+              className="input"
+              type="number"
+              min="1"
+              max={phone.total}
+              defaultValue={1}
+              onChange={handleChange}
+            />
+          </div>
           <button
             className="button"
             onClick={() => {
-              dispatch(buyPhone());
+              dispatch(buyPhone(quantity));
             }}
           >
             Buy
@@ -38,6 +55,16 @@
           <img src={tvImg} alt="" width={100} height={100} />
           <div className="availability" id="tvs">
             {tv.total} available
+          </div>
+          <div className="quantity">
+            <input
+              className="input"
+              type="number"
+              min="1"
+              max={phone.total}
+              defaultValue={1}
+              disabled
+            />
           </div>
           <button
             className="button"
@@ -52,6 +79,16 @@
           <img src={cameraImg} alt="" width={100} height={100} />
           <div className="availability" id="cameras">
             {camera.total} available
+          </div>
+          <div className="quantity">
+            <input
+              className="input"
+              type="number"
+              min="1"
+              max={phone.total}
+              defaultValue={1}
+              disabled
+            />
           </div>
           <button
             className="button"
```

### `src/store/actions.ts` (modifié, +3 −1)

```diff
@@ -4,9 +4,11 @@
 const BUY_TV = "BUY_TV";
 const BUY_CAMERA = "BUY_CAMERA";
 
-const buyPhone = () => {
+const buyPhone = (quantity) => {
   return {
     type: BUY_PHONE,
+    // payload : la donnée envoyée avec l'action (ici la quantité choisie)
+    payload: quantity,
   };
 };
 
```

### `src/store/reducers.ts` (modifié, +1 −1)

```diff
@@ -21,7 +21,7 @@
     case BUY_PHONE:
       return {
         ...state,
-        total: state.total - 1,
+        total: state.total - action.payload,
       };
     default:
       return state;
```

### `src/store/store.ts` (modifié, +6 −9)

```diff
@@ -1,4 +1,4 @@
-import { combineReducers, createStore, applyMiddleware } from "redux";
+import { combineReducers, createStore } from "redux";
 import { camerasReducer, phoneReducer, tvsReducer } from "./reducers";
 
 // combineReducers : chaque reducer gère sa part du state (state.phone, state.tv, state.camera)
@@ -8,14 +8,11 @@
   camera: camerasReducer,
 });
 
-// Simple logging middleware
-const loggerMiddleware = (store) => (next) => (action) => {
-  console.log("Action:", action);
-  const result = next(action);
-  console.log("State after action:", store.getState());
-  return result;
-};
+const store = createStore(rootReducer);
 
-const store = createStore(rootReducer, applyMiddleware(loggerMiddleware));
+// subscribe : cette fonction est appelée après chaque dispatch
+store.subscribe(() => {
+  console.log("Updated State:", store.getState());
+});
 
 export { store };
```

## Étape 4 → 5 : `etape-4-payload` → `etape-5-middleware`

Middleware : redux-thunk + axios pour charger les commentaires (loading / success / error)

### `package.json` (modifié, +3 −1)

```diff
@@ -10,10 +10,12 @@
     "preview": "vite preview"
   },
   "dependencies": {
+    "axios": "^1.13.2",
     "react": "^19.2.0",
     "react-dom": "^19.2.0",
     "react-redux": "^9.2.0",
-    "redux": "^5.0.1"
+    "redux": "^5.0.1",
+    "redux-thunk": "^3.1.0"
   },
   "devDependencies": {
     "@eslint/js": "^9.39.1",
```

### `src/App.css` (modifié, +35 −0)

```diff
@@ -78,3 +78,38 @@
   border-radius: 4px;
   text-align: center;
 }
+
+.page {
+  box-sizing: border-box;
+  place-items: center;
+}
+
+.comments-section {
+  padding: 12px;
+  width: 610px;
+  border: 0.5px solid mediumslateblue;
+  background-color: beige;
+  box-sizing: border-box;
+  border-radius: 4px;
+}
+
+.comment {
+  padding: 12px;
+  border: 1px solid #eee;
+  border-radius: 4px;
+  margin-bottom: 12px;
+  background-color: lightyellow;
+  border: none;
+}
+
+.comment-name {
+  font-weight: 600;
+  margin-bottom: 8px;
+  text-align: left;
+}
+
+.comment-body {
+  font-weight: 400;
+  white-space: pre-wrap;
+  text-align: left;
+}
```

### `src/pages/Home.tsx` (modifié, +103 −70)

```diff
@@ -7,7 +7,8 @@
 
 import { buyPhone, buyTV, buyCamera } from "../store/actions";
 import { useSelector, useDispatch } from "react-redux";
-import { useState } from "react";
+import { useEffect, useState } from "react";
+import { apiCall } from "../store/comments/actions";
 
 function Home() {
   const [quantity, setQuantity] = useState(1);
@@ -17,87 +18,119 @@
   const phone = useSelector((state: any) => state.phone);
   const camera = useSelector((state: any) => state.camera);
   const tv = useSelector((state: any) => state.tv);
+  const comments = useSelector((state: any) => state.comments);
 
   const handleChange = (e) => {
     const value = e.target.value;
     setQuantity(value);
   };
 
+  useEffect(() => {
+    // Utiliser l'action thunk pour charger les commentaires
+    dispatch(apiCall());
+  }, []);
+
   return (
     <div>
       <h2>{"Welcome to our Application"}</h2>
-      <div className="container">
-        <div className="item">
-          <img src={phoneImg} alt="" width={100} height={100} />
-          <div className="availability" id="phones">
-            {phone.total} available
+      <div className="page">
+        <div className="container">
+          <div className="item">
+            <img src={phoneImg} alt="" width={100} height={100} />
+            <div className="availability" id="phones">
+              {phone.total} available
+            </div>
+            <div className="quantity">
+              <input
+                className="input"
+                type="number"
+                min="1"
+                max={phone.total}
+                defaultValue={1}
+                onChange={handleChange}
+              />
+            </div>
+            <button
+              className="button"
+              onClick={() => {
+                dispatch(buyPhone(quantity));
+              }}
+            >
+              Buy
+            </button>
           </div>
-          <div className="quantity">
-            <input
-              className="input"
-              type="number"
-              min="1"
-              max={phone.total}
-              defaultValue={1}
-              onChange={handleChange}
-            />
+          <div className="item">
+            <img src={tvImg} alt="" width={100} height={100} />
+            <div className="availability" id="tvs">
+              {tv.total} available
+            </div>
+            <div className="quantity">
+              <input
+                className="input"
+                type="number"
+                min="1"
+                max={phone.total}
+                defaultValue={1}
+                disabled
+              />
+            </div>
+            <button
+              className="button"
+              onClick={() => {
+                dispatch(buyTV());
+              }}
+            >
+              Buy
+            </button>
           </div>
-          <button
-            className="button"
-            onClick={() => {
-              dispatch(buyPhone(quantity));
-            }}
-          >
-            Buy
-          </button>
+          <div className="item">
+            <img src={cameraImg} alt="" width={100} height={100} />
+            <div className="availability" id="cameras">
+              {camera.total} available
+            </div>
+            <div className="quantity">
+              <input
+                className="input"
+                type="number"
+                min="1"
+                max={phone.total}
+                defaultValue={1}
+                disabled
+              />
+            </div>
+            <button
+              className="button"
+              onClick={() => {
+                dispatch(buyCamera());
+              }}
+            >
+              Buy
+            </button>
+          </div>
         </div>
-        <div className="item">
-          <img src={tvImg} alt="" width={100} height={100} />
-          <div className="availability" id="tvs">
-            {tv.total} available
-          </div>
-          <div className="quantity">
-            <input
-              className="input"
-              type="number"
-              min="1"
-              max={phone.total}
-              defaultValue={1}
-              disabled
-            />
-          </div>
-          <button
-            className="button"
-            onClick={() => {
-              dispatch(buyTV());
-            }}
-          >
-            Buy
-          </button>
-        </div>
-        <div className="item">
-          <img src={cameraImg} alt="" width={100} height={100} />
-          <div className="availability" id="cameras">
-            {camera.total} available
-          </div>
-          <div className="quantity">
-            <input
-              className="input"
-              type="number"
-              min="1"
-              max={phone.total}
-              defaultValue={1}
-              disabled
-            />
-          </div>
-          <button
-            className="button"
-            onClick={() => {
-              dispatch(buyCamera());
-            }}
-          >
-            Buy
-          </button>
+        <div className="comments-section">
+          {comments.isLoading ? (
+            <div>Chargement des commentaires...</div>
+          ) : comments.error ? (
+            <div>Erreur: {comments.error}</div>
+          ) : (
+            <div className="comments-list">
+              {comments.comments.length > 0 ? (
+                comments.comments
+                  .slice(0, 10)
+                  .map((comment: any, index: number) => (
+                    <div key={comment.id || index} className="comment">
+                      <div className="comment-name">
+                        {comment.name || comment.email}
+                      </div>
+                      <div className="comment-body">{comment.body}</div>
+                    </div>
+                  ))
+              ) : (
+                <div>Aucun commentaire disponible</div>
+              )}
+            </div>
+          )}
         </div>
       </div>
     </div>
```

### `src/store/comments/actions.ts` (ajouté, +41 −0)

```diff
@@ -1,0 +1,41 @@
+export const LOAD_COMMENTS = "LOAD_COMMENTS";
+export const LOAD_COMMENTS_SUCCESS = "LOAD_COMMENTS_SUCCESS";
+export const LOAD_COMMENTS_ERROR = "LOAD_COMMENTS_ERROR";
+
+import axios from "axios";
+
+const loadApiComments = () => {
+  return {
+    type: LOAD_COMMENTS,
+  };
+};
+
+const loadCommentsSuccess = (comments) => {
+  return {
+    type: LOAD_COMMENTS_SUCCESS,
+    payload: comments,
+  };
+};
+
+const loadCommentsError = (error) => {
+  return {
+    type: LOAD_COMMENTS_ERROR,
+    payload: error,
+  };
+};
+
+// Avec redux-thunk, une action peut être une fonction : elle reçoit dispatch et fait l'appel API
+export const apiCall = () => {
+  return async (dispatch) => {
+    dispatch(loadApiComments());
+
+    try {
+      const response = await axios.get(
+        "https://jsonplaceholder.typicode.com/comments?postId=1"
+      );
+      dispatch(loadCommentsSuccess(response.data));
+    } catch (error) {
+      dispatch(loadCommentsError(error.message));
+    }
+  };
+};
```

### `src/store/comments/reducers.ts` (ajouté, +40 −0)

```diff
@@ -1,0 +1,40 @@
+import {
+  LOAD_COMMENTS,
+  LOAD_COMMENTS_ERROR,
+  LOAD_COMMENTS_SUCCESS,
+} from "./actions";
+
+const initialStateComments = {
+  isLoading: false,
+  comments: [],
+  error: "",
+};
+
+const commentReducer = (state = initialStateComments, action) => {
+  switch (action.type) {
+    case LOAD_COMMENTS:
+      return {
+        ...state,
+        isLoading: true,
+      };
+    case LOAD_COMMENTS_SUCCESS:
+      return {
+        ...state,
+        isLoading: false,
+        comments: action.payload,
+        error: "",
+      };
+    case LOAD_COMMENTS_ERROR:
+      return {
+        ...state,
+        isLoading: false,
+        comments: [],
+        error: action.payload,
+      };
+
+    default:
+      return state;
+  }
+};
+
+export default commentReducer;
```

### `src/store/store.ts` (modifié, +16 −2)

```diff
@@ -1,14 +1,28 @@
-import { combineReducers, createStore } from "redux";
+import { applyMiddleware, combineReducers, createStore, compose } from "redux";
 import { camerasReducer, phoneReducer, tvsReducer } from "./reducers";
+import commentReducer from "./comments/reducers";
+// Import nommé au lieu de default
+import { thunk } from "redux-thunk";
 
 // combineReducers : chaque reducer gère sa part du state (state.phone, state.tv, state.camera)
 const rootReducer = combineReducers({
   phone: phoneReducer,
   tv: tvsReducer,
   camera: camerasReducer,
+  comments: commentReducer,
 });
 
-const store = createStore(rootReducer);
+// applyMiddleware(thunk) : permet de dispatcher des fonctions (apiCall), pas seulement des objets
+const store = createStore(rootReducer, applyMiddleware(thunk));
+
+/* 
+const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
+
+const store = createStore(
+  rootReducer,
+  composeEnhancers(applyMiddleware(thunk))
+);
+*/
 
 // subscribe : cette fonction est appelée après chaque dispatch
 store.subscribe(() => {
```

## Étape 5 → 6 : `etape-5-middleware` → `etape-6-template`

Redux Toolkit : configureStore, un premier createSlice (phone)

### `package.json` (modifié, +3 −3)

```diff
@@ -10,12 +10,12 @@
     "preview": "vite preview"
   },
   "dependencies": {
-    "axios": "^1.13.2",
+    "@reduxjs/toolkit": "^2.11.2",
     "react": "^19.2.0",
     "react-dom": "^19.2.0",
     "react-redux": "^9.2.0",
-    "redux": "^5.0.1",
-    "redux-thunk": "^3.1.0"
+    "react-router-dom": "^7.11.0",
+    "redux": "^5.0.1"
   },
   "devDependencies": {
     "@eslint/js": "^9.39.1",
```

### `src/App.css` (modifié, +0 −35)

```diff
@@ -78,38 +78,3 @@
   border-radius: 4px;
   text-align: center;
 }
-
-.page {
-  box-sizing: border-box;
-  place-items: center;
-}
-
-.comments-section {
-  padding: 12px;
-  width: 610px;
-  border: 0.5px solid mediumslateblue;
-  background-color: beige;
-  box-sizing: border-box;
-  border-radius: 4px;
-}
-
-.comment {
-  padding: 12px;
-  border: 1px solid #eee;
-  border-radius: 4px;
-  margin-bottom: 12px;
-  background-color: lightyellow;
-  border: none;
-}
-
-.comment-name {
-  font-weight: 600;
-  margin-bottom: 8px;
-  text-align: left;
-}
-
-.comment-body {
-  font-weight: 400;
-  white-space: pre-wrap;
-  text-align: left;
-}
```

### `src/App.jsx` (modifié, +0 −1)

```diff
@@ -2,7 +2,6 @@
 import Home from "./pages/Home.tsx";
 import { Provider } from "react-redux";
 import { store } from "./store/store.ts";
-
 function App() {
   // Provider donne le store à tous les composants (useSelector, useDispatch)
   return (
```

### `src/pages/Home.tsx` (modifié, +24 −116)

```diff
@@ -5,132 +5,40 @@
 // @ts-ignore
 import cameraImg from "../assets/camera.png";
 
-import { buyPhone, buyTV, buyCamera } from "../store/actions";
-import { useSelector, useDispatch } from "react-redux";
-import { useEffect, useState } from "react";
-import { apiCall } from "../store/comments/actions";
+// Attention : encore les anciennes actions de actions.ts, pas celles du slice (corrigé à l'étape 7)
+import { buyPhone, buyTv, buyCamera } from "../store/actions";
+import { useDispatch, useSelector } from "react-redux";
 
 function Home() {
-  const [quantity, setQuantity] = useState(1);
-
   // useDispatch envoie les actions ; useSelector lit le state (re-render quand il change)
   const dispatch = useDispatch();
   const phone = useSelector((state: any) => state.phone);
+  const tv = useSelector((state: any) => state.tv);
   const camera = useSelector((state: any) => state.camera);
-  const tv = useSelector((state: any) => state.tv);
-  const comments = useSelector((state: any) => state.comments);
-
-  const handleChange = (e) => {
-    const value = e.target.value;
-    setQuantity(value);
-  };
-
-  useEffect(() => {
-    // Utiliser l'action thunk pour charger les commentaires
-    dispatch(apiCall());
-  }, []);
-
   return (
     <div>
       <h2>{"Welcome to our Application"}</h2>
-      <div className="page">
-        <div className="container">
-          <div className="item">
-            <img src={phoneImg} alt="" width={100} height={100} />
-            <div className="availability" id="phones">
-              {phone.total} available
-            </div>
-            <div className="quantity">
-              <input
-                className="input"
-                type="number"
-                min="1"
-                max={phone.total}
-                defaultValue={1}
-                onChange={handleChange}
-              />
-            </div>
-            <button
-              className="button"
-              onClick={() => {
-                dispatch(buyPhone(quantity));
-              }}
-            >
-              Buy
-            </button>
-          </div>
-          <div className="item">
-            <img src={tvImg} alt="" width={100} height={100} />
-            <div className="availability" id="tvs">
-              {tv.total} available
-            </div>
-            <div className="quantity">
-              <input
-                className="input"
-                type="number"
-                min="1"
-                max={phone.total}
-                defaultValue={1}
-                disabled
-              />
-            </div>
-            <button
-              className="button"
-              onClick={() => {
-                dispatch(buyTV());
-              }}
-            >
-              Buy
-            </button>
-          </div>
-          <div className="item">
-            <img src={cameraImg} alt="" width={100} height={100} />
-            <div className="availability" id="cameras">
-              {camera.total} available
-            </div>
-            <div className="quantity">
-              <input
-                className="input"
-                type="number"
-                min="1"
-                max={phone.total}
-                defaultValue={1}
-                disabled
-              />
-            </div>
-            <button
-              className="button"
-              onClick={() => {
-                dispatch(buyCamera());
-              }}
-            >
-              Buy
-            </button>
-          </div>
+      <div className="container">
+        <div className="item">
+          <img src={phoneImg} alt="" width={100} height={100} />
+          <div className="availability">{phone.total} available</div>
+          <button className="button" onClick={() => dispatch(buyPhone(2))}>
+            Buy
+          </button>
         </div>
-        <div className="comments-section">
-          {comments.isLoading ? (
-            <div>Chargement des commentaires...</div>
-          ) : comments.error ? (
-            <div>Erreur: {comments.error}</div>
-          ) : (
-            <div className="comments-list">
-              {comments.comments.length > 0 ? (
-                comments.comments
-                  .slice(0, 10)
-                  .map((comment: any, index: number) => (
-                    <div key={comment.id || index} className="comment">
-                      <div className="comment-name">
-                        {comment.name || comment.email}
-                      </div>
-                      <div className="comment-body">{comment.body}</div>
-                    </div>
-                  ))
-              ) : (
-                <div>Aucun commentaire disponible</div>
-              )}
-            </div>
-          )}
+        <div className="item">
+          <img src={tvImg} alt="" width={100} height={100} />
+          <div className="availability">{tv.total} available</div>
+          <button className="button" onClick={() => dispatch(buyTv())}>
+            Buy
+          </button>
+        </div>{" "}
+        <div className="item">
+          <img src={cameraImg} alt="" width={100} height={100} />
+          <div className="availability">{camera.total} available</div>
+          <button className="button" onClick={() => dispatch(buyCamera())}>
+            Buy
+          </button>
         </div>
       </div>
     </div>
```

### `src/store/actions.ts` (modifié, +6 −6)

```diff
@@ -1,8 +1,4 @@
-// Action Types
-
 const BUY_PHONE = "BUY_PHONE";
-const BUY_TV = "BUY_TV";
-const BUY_CAMERA = "BUY_CAMERA";
 
 const buyPhone = (quantity) => {
   return {
@@ -12,11 +8,15 @@
   };
 };
 
-const buyTV = () => {
+const BUY_TV = "BUY_TV";
+
+const buyTv = () => {
   return {
     type: BUY_TV,
   };
 };
+
+const BUY_CAMERA = "BUY_CAMERA";
 
 const buyCamera = () => {
   return {
@@ -24,4 +24,4 @@
   };
 };
 
-export { BUY_PHONE, BUY_TV, BUY_CAMERA, buyPhone, buyTV, buyCamera };
+export { BUY_PHONE, buyPhone, BUY_TV, buyTv, BUY_CAMERA, buyCamera };
```

### `src/store/comments/actions.ts` (supprimé, +0 −41)

```diff
@@ -1,41 +1,0 @@
-export const LOAD_COMMENTS = "LOAD_COMMENTS";
-export const LOAD_COMMENTS_SUCCESS = "LOAD_COMMENTS_SUCCESS";
-export const LOAD_COMMENTS_ERROR = "LOAD_COMMENTS_ERROR";
-
-import axios from "axios";
-
-const loadApiComments = () => {
-  return {
-    type: LOAD_COMMENTS,
-  };
-};
-
-const loadCommentsSuccess = (comments) => {
-  return {
-    type: LOAD_COMMENTS_SUCCESS,
-    payload: comments,
-  };
-};
-
-const loadCommentsError = (error) => {
-  return {
-    type: LOAD_COMMENTS_ERROR,
-    payload: error,
-  };
-};
-
-// Avec redux-thunk, une action peut être une fonction : elle reçoit dispatch et fait l'appel API
-export const apiCall = () => {
-  return async (dispatch) => {
-    dispatch(loadApiComments());
-
-    try {
-      const response = await axios.get(
-        "https://jsonplaceholder.typicode.com/comments?postId=1"
-      );
-      dispatch(loadCommentsSuccess(response.data));
-    } catch (error) {
-      dispatch(loadCommentsError(error.message));
-    }
-  };
-};
```

### `src/store/comments/reducers.ts` (supprimé, +0 −40)

```diff
@@ -1,40 +1,0 @@
-import {
-  LOAD_COMMENTS,
-  LOAD_COMMENTS_ERROR,
-  LOAD_COMMENTS_SUCCESS,
-} from "./actions";
-
-const initialStateComments = {
-  isLoading: false,
-  comments: [],
-  error: "",
-};
-
-const commentReducer = (state = initialStateComments, action) => {
-  switch (action.type) {
-    case LOAD_COMMENTS:
-      return {
-        ...state,
-        isLoading: true,
-      };
-    case LOAD_COMMENTS_SUCCESS:
-      return {
-        ...state,
-        isLoading: false,
-        comments: action.payload,
-        error: "",
-      };
-    case LOAD_COMMENTS_ERROR:
-      return {
-        ...state,
-        isLoading: false,
-        comments: [],
-        error: action.payload,
-      };
-
-    default:
-      return state;
-  }
-};
-
-export default commentReducer;
```

### `src/store/phoneSlice.ts` (ajouté, +17 −0)

```diff
@@ -1,0 +1,17 @@
+import { createSlice } from "@reduxjs/toolkit";
+
+const phoneSlice = createSlice({
+  name: "phone",
+  initialState: {
+    total: 10,
+  },
+  // Chaque reducer devient une action (phoneSlice.actions) ; Immer permet de « modifier » state directement
+  reducers: {
+    buyPhone: (state, action) => {
+      state.total -= action.payload || 1;
+    },
+  },
+});
+
+export const { buyPhone } = phoneSlice.actions;
+export const phoneReducer = phoneSlice.reducer;
```

### `src/store/reducers.ts` (modifié, +14 −21)

```diff
@@ -1,22 +1,10 @@
-// reducer
+import { BUY_PHONE, BUY_TV, BUY_CAMERA } from "./actions";
 
-import { BUY_CAMERA, BUY_PHONE, BUY_TV } from "./actions";
-
-// initial state
-const initialStatePhone = {
-  total: 5,
+const phoneInitialState = {
+  total: 10,
 };
 
-const initialStateTV = {
-  total: 3,
-};
-
-const initialStateCamera = {
-  total: 8,
-};
-
-// (previousState, action) => newState
-const phoneReducer = (state = initialStatePhone, action) => {
+const phoneReducer = (state = phoneInitialState, action) => {
   switch (action.type) {
     case BUY_PHONE:
       return {
@@ -27,9 +15,11 @@
       return state;
   }
 };
+const tvInitialState = {
+  total: 8,
+};
 
-// (previousState, action) => newState
-const tvsReducer = (state = initialStateTV, action) => {
+const tvReducer = (state = tvInitialState, action) => {
   switch (action.type) {
     case BUY_TV:
       return {
@@ -41,8 +31,11 @@
   }
 };
 
-// (previousState, action) => newState
-const camerasReducer = (state = initialStateCamera, action) => {
+const cameraInitialState = {
+  total: 5,
+};
+
+const cameraReducer = (state = cameraInitialState, action) => {
   switch (action.type) {
     case BUY_CAMERA:
       return {
@@ -54,4 +47,4 @@
   }
 };
 
-export { phoneReducer, tvsReducer, camerasReducer };
+export { phoneReducer, tvReducer, cameraReducer };
```

### `src/store/store.ts` (modifié, +8 −30)

```diff
@@ -1,32 +1,10 @@
-import { applyMiddleware, combineReducers, createStore, compose } from "redux";
-import { camerasReducer, phoneReducer, tvsReducer } from "./reducers";
-import commentReducer from "./comments/reducers";
-// Import nommé au lieu de default
-import { thunk } from "redux-thunk";
+import { configureStore } from "@reduxjs/toolkit";
+import { phoneReducer } from "./phoneSlice";
 
-// combineReducers : chaque reducer gère sa part du state (state.phone, state.tv, state.camera)
-const rootReducer = combineReducers({
-  phone: phoneReducer,
-  tv: tvsReducer,
-  camera: camerasReducer,
-  comments: commentReducer,
+// Attention : seul phone est déclaré ; Home lit aussi state.tv et state.camera (ajoutés à l'étape 7)
+export const store = configureStore({
+  reducer: {
+    phone: phoneReducer,
+  },
+  devTools: true,
 });
-
-// applyMiddleware(thunk) : permet de dispatcher des fonctions (apiCall), pas seulement des objets
-const store = createStore(rootReducer, applyMiddleware(thunk));
-
-/* 
-const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
-
-const store = createStore(
-  rootReducer,
-  composeEnhancers(applyMiddleware(thunk))
-);
-*/
-
-// subscribe : cette fonction est appelée après chaque dispatch
-store.subscribe(() => {
-  console.log("Updated State:", store.getState());
-});
-
-export { store };
```

## Étape 6 → 7 : `etape-6-template` → `etape-7-redux-toolkit`

Les 3 slices (phone, tv, camera), extraReducers (promo TV), RTK Query (createApi)

### `package.json` (modifié, +0 −1)

```diff
@@ -14,7 +14,6 @@
     "react": "^19.2.0",
     "react-dom": "^19.2.0",
     "react-redux": "^9.2.0",
-    "react-router-dom": "^7.11.0",
     "redux": "^5.0.1"
   },
   "devDependencies": {
```

### `src/App.css` (modifié, +0 −13)

```diff
@@ -65,16 +65,3 @@
   font-weight: 600;
   color: white;
 }
-
-.quantity {
-  margin: 0;
-}
-
-.input {
-  width: 60px;
-  padding: 4px;
-  font-size: 16px;
-  border: 1px solid #ccc;
-  border-radius: 4px;
-  text-align: center;
-}
```

### `src/App.jsx` (modifié, +1 −0)

```diff
@@ -2,6 +2,7 @@
 import Home from "./pages/Home.tsx";
 import { Provider } from "react-redux";
 import { store } from "./store/store.ts";
+
 function App() {
   // Provider donne le store à tous les composants (useSelector, useDispatch)
   return (
```

### `src/apis/index.ts` (ajouté, +70 −0)

```diff
@@ -1,0 +1,70 @@
+// RTK Query (Redux Toolkit Query) : on crée une "API slice"
+// Objectif : faire des appels HTTP + gérer cache / loading / error automatiquement
+
+import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
+
+/**
+ * commentsApi = "API slice"
+ * Elle contient :
+ * - un reducer (pour stocker cache + status dans Redux)
+ * - un middleware (pour déclencher/optimiser les requêtes)
+ * - des endpoints (GET/POST/...)
+ * - des hooks React auto-générés (useGetCommentsQuery, etc.)
+ */
+export const commentsApi = createApi({
+  /**
+   * reducerPath = le nom de la clé dans le store Redux
+   * Exemple : state.commentsApi => contiendra le cache, loading, erreurs, etc.
+   *
+   * Dans le store on fera :
+   * reducer: { [commentsApi.reducerPath]: commentsApi.reducer }
+   */
+  reducerPath: "commentsApi",
+
+  /**
+   * baseQuery = le "client HTTP" utilisé par RTK Query
+   * fetchBaseQuery est une petite couche au-dessus de fetch (pas besoin d'axios)
+   *
+   * baseUrl = URL de base, les endpoints ajouteront juste le chemin
+   */
+  baseQuery: fetchBaseQuery({
+    baseUrl: "https://jsonplaceholder.typicode.com",
+  }),
+
+  /**
+   * endpoints = on déclare ici toutes les routes API
+   * builder permet de créer :
+   * - builder.query(...)  => GET (lecture) + cache
+   * - builder.mutation(...) => POST/PUT/DELETE (écriture)
+   */
+  endpoints: (builder) => ({
+    /**
+     * getComments = nom de l'endpoint
+     * builder.query => c'est un endpoint de lecture (GET)
+     */
+    getComments: builder.query({
+      /**
+       * query = fonction qui construit l'URL de la requête
+       * postId est un paramètre (optionnel) avec une valeur par défaut = 1
+       *
+       * Si postId = 1 => GET /comments?postId=1
+       * Si postId = 5 => GET /comments?postId=5
+       *
+       * RTK Query gère automatiquement :
+       * - loading / success / error
+       * - cache + dedupe (évite des appels identiques)
+       */
+      query: (postId = 1) => `/comments?postId=${postId}`,
+    }),
+  }),
+});
+
+/**
+ * RTK Query génère automatiquement des hooks React
+ * Le nom est basé sur l'endpoint :
+ * getComments => useGetCommentsQuery
+ *
+ * Utilisation :
+ * const { data, isLoading, error } = useGetCommentsQuery(1);
+ */
+export const { useGetCommentsQuery } = commentsApi;
```

### `src/pages/Home.tsx` (modifié, +39 −11)

```diff
@@ -5,38 +5,66 @@
 // @ts-ignore
 import cameraImg from "../assets/camera.png";
 
-// Attention : encore les anciennes actions de actions.ts, pas celles du slice (corrigé à l'étape 7)
-import { buyPhone, buyTv, buyCamera } from "../store/actions";
-import { useDispatch, useSelector } from "react-redux";
+import { buyPhone } from "../store/phoneSlice";
+import { buyTv } from "../store/tvSlice";
+import { buyCamera } from "../store/cameraSlice";
+
+import { useSelector, useDispatch } from "react-redux";
+import { useGetCommentsQuery } from "../apis";
 
 function Home() {
   // useDispatch envoie les actions ; useSelector lit le state (re-render quand il change)
   const dispatch = useDispatch();
   const phone = useSelector((state: any) => state.phone);
+  const camera = useSelector((state: any) => state.camera);
   const tv = useSelector((state: any) => state.tv);
-  const camera = useSelector((state: any) => state.camera);
+  // Hook généré par RTK Query : il fait la requête et donne data / isLoading / error
+  const { data, isLoading, error } = useGetCommentsQuery(1);
+  console.log({ data, isLoading, error });
+
   return (
     <div>
       <h2>{"Welcome to our Application"}</h2>
       <div className="container">
         <div className="item">
           <img src={phoneImg} alt="" width={100} height={100} />
-          <div className="availability">{phone.total} available</div>
-          <button className="button" onClick={() => dispatch(buyPhone(2))}>
+          <div className="availability" id="phones">
+            {phone.total} available
+          </div>
+          <button
+            className="button"
+            onClick={() => {
+              dispatch(buyPhone());
+            }}
+          >
             Buy
           </button>
         </div>
         <div className="item">
           <img src={tvImg} alt="" width={100} height={100} />
-          <div className="availability">{tv.total} available</div>
-          <button className="button" onClick={() => dispatch(buyTv())}>
+          <div className="availability" id="tvs">
+            {tv.total} available
+          </div>
+          <button
+            className="button"
+            onClick={() => {
+              dispatch(buyTv());
+            }}
+          >
             Buy
           </button>
-        </div>{" "}
+        </div>
         <div className="item">
           <img src={cameraImg} alt="" width={100} height={100} />
-          <div className="availability">{camera.total} available</div>
-          <button className="button" onClick={() => dispatch(buyCamera())}>
+          <div className="availability" id="cameras">
+            {camera.total} available
+          </div>
+          <button
+            className="button"
+            onClick={() => {
+              dispatch(buyCamera());
+            }}
+          >
             Buy
           </button>
         </div>
```

### `src/store/actions.ts` (supprimé, +0 −27)

```diff
@@ -1,27 +1,0 @@
-const BUY_PHONE = "BUY_PHONE";
-
-const buyPhone = (quantity) => {
-  return {
-    type: BUY_PHONE,
-    // payload : la donnée envoyée avec l'action (ici la quantité choisie)
-    payload: quantity,
-  };
-};
-
-const BUY_TV = "BUY_TV";
-
-const buyTv = () => {
-  return {
-    type: BUY_TV,
-  };
-};
-
-const BUY_CAMERA = "BUY_CAMERA";
-
-const buyCamera = () => {
-  return {
-    type: BUY_CAMERA,
-  };
-};
-
-export { BUY_PHONE, buyPhone, BUY_TV, buyTv, BUY_CAMERA, buyCamera };
```

### `src/store/cameraSlice.ts` (ajouté, +17 −0)

```diff
@@ -1,0 +1,17 @@
+// features/stock/cameraSlice.ts
+import { createSlice } from "@reduxjs/toolkit";
+
+const initialState = { total: 8 };
+
+const cameraSlice = createSlice({
+  name: "camera",
+  initialState,
+  reducers: {
+    buyCamera(state) {
+      state.total -= 1;
+    },
+  },
+});
+
+export const { buyCamera } = cameraSlice.actions;
+export default cameraSlice.reducer;
```

### `src/store/phoneSlice.ts` (modifié, +24 −7)

```diff
@@ -1,17 +1,34 @@
-import { createSlice } from "@reduxjs/toolkit";
+// features/stock/phoneSlice.ts
+import { createSlice, PayloadAction } from "@reduxjs/toolkit";
+// import { buyTv, buyTvPromotion } from "./tvSlice";
+
+const initialState = { total: 5 };
 
 const phoneSlice = createSlice({
   name: "phone",
-  initialState: {
-    total: 10,
-  },
+  initialState,
   // Chaque reducer devient une action (phoneSlice.actions) ; Immer permet de « modifier » state directement
   reducers: {
-    buyPhone: (state, action) => {
-      state.total -= action.payload || 1;
+    buyPhone(state) {
+      // action.payload can be used for more complex logic
+      state.total -= 1;
     },
   },
+  // extraReducers (en commentaire) : réagir à une action d'un autre slice, ex. la promo TV
+  /*extraReducers: (builder) => {
+    builder.addCase(buyTv, (state) => {
+      state.total -= 1; // si achat TV => +1 phone
+    });
+  },*/
+  /*
+    extraReducers: (builder) => {
+    builder.addCase(buyTvPromotion, (state, action: PayloadAction<string>) => {
+      if (action.payload === "2025XMAS") {
+        state.total -= 1;
+      }
+    });
+  }, */
 });
 
 export const { buyPhone } = phoneSlice.actions;
-export const phoneReducer = phoneSlice.reducer;
+export default phoneSlice.reducer;
```

### `src/store/reducers.ts` (supprimé, +0 −50)

```diff
@@ -1,50 +1,0 @@
-import { BUY_PHONE, BUY_TV, BUY_CAMERA } from "./actions";
-
-const phoneInitialState = {
-  total: 10,
-};
-
-const phoneReducer = (state = phoneInitialState, action) => {
-  switch (action.type) {
-    case BUY_PHONE:
-      return {
-        ...state,
-        total: state.total - action.payload,
-      };
-    default:
-      return state;
-  }
-};
-const tvInitialState = {
-  total: 8,
-};
-
-const tvReducer = (state = tvInitialState, action) => {
-  switch (action.type) {
-    case BUY_TV:
-      return {
-        ...state,
-        total: state.total - 1,
-      };
-    default:
-      return state;
-  }
-};
-
-const cameraInitialState = {
-  total: 5,
-};
-
-const cameraReducer = (state = cameraInitialState, action) => {
-  switch (action.type) {
-    case BUY_CAMERA:
-      return {
-        ...state,
-        total: state.total - 1,
-      };
-    default:
-      return state;
-  }
-};
-
-export { phoneReducer, tvReducer, cameraReducer };
```

### `src/store/store.ts` (modifié, +12 −3)

```diff
@@ -1,10 +1,19 @@
+// store.ts
 import { configureStore } from "@reduxjs/toolkit";
-import { phoneReducer } from "./phoneSlice";
+import phoneReducer from "./phoneSlice";
+import tvReducer from "./tvSlice";
+import cameraReducer from "./cameraSlice";
+import { commentsApi } from "../apis";
 
-// Attention : seul phone est déclaré ; Home lit aussi state.tv et state.camera (ajoutés à l'étape 7)
 export const store = configureStore({
   reducer: {
     phone: phoneReducer,
+    tv: tvReducer,
+    camera: cameraReducer,
+    commentsApi: commentsApi.reducer,
   },
-  devTools: true,
+  // On ajoute le middleware de RTK Query (requêtes, cache) à ceux par défaut
+  middleware: (getDefaultMiddleware) =>
+    getDefaultMiddleware().concat(commentsApi.middleware),
+  devTools: true, // optionnel (par défaut true en dev)
 });
```

### `src/store/tvSlice.ts` (ajouté, +20 −0)

```diff
@@ -1,0 +1,20 @@
+// features/stock/tvSlice.ts
+import { createSlice, PayloadAction } from "@reduxjs/toolkit";
+
+const initialState = { total: 3 };
+
+const tvSlice = createSlice({
+  name: "tv",
+  initialState,
+  reducers: {
+    buyTv(state) {
+      state.total -= 1;
+    },
+    /*buyTvPromotion(state, action: PayloadAction<string>) {
+      state.total -= 1;
+    }/*, */
+  },
+});
+
+export const { buyTv } = tvSlice.actions;
+export default tvSlice.reducer;
```
