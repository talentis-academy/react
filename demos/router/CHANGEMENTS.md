# Démo · React Router v7 : les changements entre les étapes

Pour chaque étape, ce qui change par rapport à l’étape précédente. En vert : les lignes ajoutées. En rouge : les lignes retirées.

## Étape 1 → 2 : `etape-1-routes-simples` → `etape-2-not-found`

La route * : une page NotFound personnalisée, avec un Link vers l’accueil

### `src/App.jsx` (modifié, +4 −0)

```diff
@@ -19,6 +19,10 @@
     path: "/favoris",
     element: <Favoris />,
   },
+  {
+    path: "*",
+    element: <NotFound />,
+  },
 ]);
 
 function App() {
```

## Étape 2 → 3 : `etape-2-not-found` → `etape-3-route-dynamique`

La route dynamique /details/:id : useParams, useSearchParams (?tab=home), useNavigate depuis Home

### `src/App.jsx` (modifié, +4 −0)

```diff
@@ -16,6 +16,10 @@
     element: <Home />,
   },
   {
+    path: "/details/:id",
+    element: <Details />,
+  },
+  {
     path: "/favoris",
     element: <Favoris />,
   },
```

## Étape 3 → 4 : `etape-3-route-dynamique` → `etape-4-routes-imbriquees`

Routes imbriquées : Layout (header, footer) + <Outlet />, index: true

### `src/App.jsx` (modifié, +8 −11)

```diff
@@ -10,18 +10,15 @@
 import { createBrowserRouter } from "react-router-dom";
 import { RouterProvider } from "react-router-dom";
 
-const routerSimple = createBrowserRouter([
+const routerNested = createBrowserRouter([
   {
     path: "/",
-    element: <Home />,
-  },
-  {
-    path: "/details/:id",
-    element: <Details />,
-  },
-  {
-    path: "/favoris",
-    element: <Favoris />,
+    element: <Layout />, // parent
+    children: [
+      { index: true, element: <Home /> }, // "/"
+      { path: "details/:id", element: <Details /> }, // "/details/:id"
+      { path: "favoris", element: <Favoris /> }, // "/favoris"
+    ],
   },
   {
     path: "*",
@@ -30,7 +27,7 @@
 ]);
 
 function App() {
-  return <RouterProvider router={routerSimple} />;
+  return <RouterProvider router={routerNested} />;
 }
 
 export default App;
```

## Étape 4 → 5 : `etape-4-routes-imbriquees` → `etape-5-error-element`

errorElement: <ErrorPage /> : le bouton « Crash APP » de Home affiche la page d’erreur

### `src/App.jsx` (modifié, +1 −0)

```diff
@@ -14,6 +14,7 @@
   {
     path: "/",
     element: <Layout />, // parent
+    errorElement: <ErrorPage />,
     children: [
       { index: true, element: <Home /> }, // "/"
       { path: "details/:id", element: <Details /> }, // "/details/:id"
```

## Étape 5 → 6 : `etape-5-error-element` → `etape-6-lazy-loading`

Favoris en lazy : après npm run build, un fichier Favoris-xxxx.js séparé dans dist/assets

### `src/App.jsx` (modifié, +7 −2)

```diff
@@ -2,7 +2,6 @@
 import Layout from "./pages/Layout";
 import Home from "./pages/Home";
 import Details from "./pages/Details";
-import Favoris from "./pages/Favoris";
 import NotFound from "./pages/NotFound";
 import ErrorPage from "./pages/ErrorPage";
 import CarDetails from "./pages/CarDetails";
@@ -18,7 +17,13 @@
     children: [
       { index: true, element: <Home /> }, // "/"
       { path: "details/:id", element: <Details /> }, // "/details/:id"
-      { path: "favoris", element: <Favoris /> }, // "/favoris"
+      {
+        path: "favoris",
+        lazy: async () => {
+          const module = await import("./pages/Favoris");
+          return { Component: module.default };
+        },
+      },
     ],
   },
   {
```
