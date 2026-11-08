# Démo · React Router v7 : les changements entre les étapes

Pour chaque étape, ce qui change par rapport à l’étape précédente. En vert : les lignes ajoutées. En rouge : les lignes retirées.

## Étape 1 → 2 : `etape-1-routes` → `etape-2-routes-imbriquees`

Routes imbriquées : Layout (header, footer) + <Outlet />, index: true, errorElement: <ErrorPage /> (bouton « Crash APP » sur Home)

### `src/App.jsx` (modifié, +1 −1)

```diff
@@ -68,7 +68,7 @@
 ]);
 
 function App() {
-  return <RouterProvider router={routerSimple} />;
+  return <RouterProvider router={routerNested} />;
 }
 
 export default App;
```
