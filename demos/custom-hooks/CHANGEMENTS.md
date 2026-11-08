# Démo · Custom hooks : les changements entre les étapes

Pour chaque étape, ce qui change par rapport à l’étape précédente. En vert : les lignes ajoutées. En rouge : les lignes retirées.

## Étape 1 → 2 : `etape-1-toggle-btn` → `etape-2-toggle-checkbox`

Le même toggle avec une checkbox ; le hook useToggle

### `src/App.jsx` (modifié, +1 −1)

```diff
@@ -8,7 +8,7 @@
 import BadExample from "./components/BadExample";
 
 function App() {
-  return <ToggleBtn />;
+  return <ToggleCheckbox />;
 }
 
 export default App;
```

## Étape 2 → 3 : `etape-2-toggle-checkbox` → `etape-3-network-status`

Le hook useNetworkStatus : listeners online / offline dans useEffect

### `src/App.jsx` (modifié, +1 −1)

```diff
@@ -8,7 +8,7 @@
 import BadExample from "./components/BadExample";
 
 function App() {
-  return <ToggleCheckbox />;
+  return <Layout />;
 }
 
 export default App;
```

## Étape 3 → 4 : `etape-3-network-status` → `etape-4-users`

La page Users : fetch avec loading / error (point de départ de l’exercice 11)

### `src/App.jsx` (modifié, +1 −1)

```diff
@@ -8,7 +8,7 @@
 import BadExample from "./components/BadExample";
 
 function App() {
-  return <Layout />;
+  return <Users />;
 }
 
 export default App;
```
