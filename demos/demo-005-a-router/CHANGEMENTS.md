# Démo 005-A · React Router v7 : les changements entre les étapes

Pour chaque étape, ce qui change par rapport à l’étape précédente. En vert : les lignes ajoutées. En rouge : les lignes retirées. « utilisé » : un fichier qui existait déjà mais qui est branché (importé) à partir de cette étape, montré en entier.

## Étape 1 · `etape-1-routes-simples` : point de départ

createBrowserRouter + RouterProvider : / (Home) et /favoris

Le code de départ, en entier : les fichiers écrits pour la démo et utilisés (atteints par les imports depuis src/main.*) ; les fichiers du gabarit Vite non modifiés sont seulement listés. Ordre de lecture : main → App → composants et pages → le reste.

*Styles fournis (copiés tels quels, pas tapés en live) : `src/App.css` (45 lignes)*

*Fichiers générés par Vite, non modifiés (non affichés) : `index.html`, `vite.config.js`, `.gitignore`, `eslint.config.js`, `public/vite.svg`*

*package.json (gabarit Vite) : dépendances ajoutées : `react-router-dom ^7.11.0`*

### `src/main.jsx` (6 lignes)

```jsx
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <App />
);
```

### `src/App.jsx` (24 lignes)

```jsx
import "./App.css";
import Home from "./pages/Home";
import Favoris from "./pages/Favoris";

import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";

// createBrowserRouter : la liste des routes (une URL → un composant)
const routerSimple = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/favoris",
    element: <Favoris />,
  },
]);

function App() {
  return <RouterProvider router={routerSimple} />;
}

export default App;
```

### `src/pages/Home.jsx` (17 lignes)

```jsx
import Car from "../components/Car";

function Home() {
  return (
    <div>
      <h1>{"Welcome to the Home Page"}</h1>
      <h2>Car List</h2>
      <div className="container">
        <Car make="BMW" color="blue" />
        <Car make="Toyota" color="red" />
        <Car make="Mercedes" color="black" />
      </div>
    </div>
  );
}

export default Home;
```

### `src/pages/Favoris.jsx` (11 lignes)

```jsx
import { useEffect } from "react";

function Favorite() {
  return (
    <div>
      <h2>Favorite List</h2>
    </div>
  );
}

export default Favorite;
```

### `src/components/Car.jsx` (11 lignes)

```jsx
function Car({ make, color, onClick }) {
  let colorInfo = color ? color : "Unknown";
  return (
    <div className="car-item" onClick={onClick}>
      <div>{make}</div>
      <div>{colorInfo}</div>
    </div>
  );
}

export default Car;
```

## Étape 1 → 2 : `etape-1-routes-simples` → `etape-2-not-found`

La route * : une page NotFound personnalisée, avec un Link vers l’accueil

### `src/App.jsx` (modifié, +6 −0)

```diff
@@ -1,6 +1,7 @@
 import "./App.css";
 import Home from "./pages/Home";
 import Favoris from "./pages/Favoris";
+import NotFound from "./pages/NotFound";
 
 import { createBrowserRouter } from "react-router-dom";
 import { RouterProvider } from "react-router-dom";
@@ -15,6 +16,11 @@
     path: "/favoris",
     element: <Favoris />,
   },
+  {
+    // "*" : toutes les URL inconnues tombent sur NotFound
+    path: "*",
+    element: <NotFound />,
+  },
 ]);
 
 function App() {
```

### `src/pages/NotFound.jsx` (ajouté, +14 −0)

```diff
@@ -1,0 +1,14 @@
+import { Link } from "react-router-dom";
+
+function NotFound() {
+  return (
+    <div>
+      <h1>{"Custom Not Found Page"}</h1>
+      <Link to={"/"}>
+        <h2>Go to home</h2>
+      </Link>
+    </div>
+  );
+}
+
+export default NotFound;
```

## Étape 2 → 3 : `etape-2-not-found` → `etape-3-route-dynamique`

La route dynamique /details/:id : useParams, useSearchParams (?tab=home), useNavigate depuis Home

### `src/App.jsx` (modifié, +6 −0)

```diff
@@ -1,5 +1,6 @@
 import "./App.css";
 import Home from "./pages/Home";
+import Details from "./pages/Details";
 import Favoris from "./pages/Favoris";
 import NotFound from "./pages/NotFound";
 
@@ -11,6 +12,11 @@
   {
     path: "/",
     element: <Home />,
+  },
+  {
+    // :id est un paramètre : Details le lit avec useParams()
+    path: "/details/:id",
+    element: <Details />,
   },
   {
     path: "/favoris",
```

### `src/pages/Details.jsx` (ajouté, +17 −0)

```diff
@@ -1,0 +1,17 @@
+import { useEffect } from "react";
+import { useParams, useSearchParams } from "react-router-dom";
+
+function Details() {
+  // useParams lit le :id de l'URL ; useSearchParams lit le ?tab=...
+  const params = useParams();
+  const [searchParams, setSearchParams] = useSearchParams();
+  console.log(searchParams.get("tab"));
+  return (
+    <div>
+      <h1>Détails voiture</h1>
+      <p>ID: {params.id}</p>
+    </div>
+  );
+}
+
+export default Details;
```

### `src/pages/Home.jsx` (modifié, +9 −1)

```diff
@@ -1,6 +1,10 @@
+import { useNavigate } from "react-router-dom";
 import Car from "../components/Car";
 
 function Home() {
+  // useNavigate : changer de page depuis le code (clic sur la Mercedes → /details/3)
+  const navigate = useNavigate();
+
   return (
     <div>
       <h1>{"Welcome to the Home Page"}</h1>
@@ -8,7 +12,11 @@
       <div className="container">
         <Car make="BMW" color="blue" />
         <Car make="Toyota" color="red" />
-        <Car make="Mercedes" color="black" />
+        <Car
+          make="Mercedes"
+          color="black"
+          onClick={() => navigate("/details/3")}
+        />
       </div>
     </div>
   );
```

## Étape 3 → 4 : `etape-3-route-dynamique` → `etape-4-routes-imbriquees`

Routes imbriquées : Layout (header, footer) + <Outlet />, index: true

### `src/App.jsx` (modifié, +10 −12)

```diff
@@ -1,4 +1,5 @@
 import "./App.css";
+import Layout from "./pages/Layout";
 import Home from "./pages/Home";
 import Details from "./pages/Details";
 import Favoris from "./pages/Favoris";
@@ -8,19 +9,16 @@
 import { RouterProvider } from "react-router-dom";
 
 // createBrowserRouter : la liste des routes (une URL → un composant)
-const routerSimple = createBrowserRouter([
+const routerNested = createBrowserRouter([
   {
     path: "/",
-    element: <Home />,
-  },
-  {
-    // :id est un paramètre : Details le lit avec useParams()
-    path: "/details/:id",
-    element: <Details />,
-  },
-  {
-    path: "/favoris",
-    element: <Favoris />,
+    // Layout affiche header et footer ; la page enfant s'affiche dans son <Outlet />
+    element: <Layout />, // parent
+    children: [
+      { index: true, element: <Home /> }, // "/"
+      { path: "details/:id", element: <Details /> }, // "/details/:id"
+      { path: "favoris", element: <Favoris /> }, // "/favoris"
+    ],
   },
   {
     // "*" : toutes les URL inconnues tombent sur NotFound
@@ -30,7 +28,7 @@
 ]);
 
 function App() {
-  return <RouterProvider router={routerSimple} />;
+  return <RouterProvider router={routerNested} />;
 }
 
 export default App;
```

### `src/pages/Layout.jsx` (ajouté, +38 −0)

```diff
@@ -1,0 +1,38 @@
+import { NavLink, Outlet } from "react-router-dom";
+
+export default function Layout() {
+  return (
+    <div
+      style={{
+        minHeight: "80vh",
+        display: "flex",
+        flexDirection: "column",
+        padding: 16,
+        textAlign: "center",
+      }}
+    >
+      <header style={{ display: "flex", gap: 12, justifyContent: "center" }}>
+        <NavLink to="/">Home</NavLink>
+        <NavLink
+          to="/favoris"
+          style={({ isActive }) => ({
+            color: isActive ? "red" : "black",
+            fontWeight: isActive ? "bold" : "normal",
+          })}
+        >
+          Favoris
+        </NavLink>
+      </header>
+
+      {/* Zone qui prend tout l'espace */}
+      <main style={{ flex: 1, display: "grid", placeItems: "center" }}>
+        {/* Outlet : ici s'affiche la page enfant de la route */}
+        <Outlet />
+      </main>
+
+      <footer style={{ marginTop: 16 }}>
+        <p>© 2025 My Car App</p>
+      </footer>
+    </div>
+  );
+}
```

## Étape 4 → 5 : `etape-4-routes-imbriquees` → `etape-5-error-element`

errorElement: <ErrorPage /> : le bouton « Crash APP » de Home affiche la page d’erreur

### `src/App.jsx` (modifié, +3 −0)

```diff
@@ -4,6 +4,7 @@
 import Details from "./pages/Details";
 import Favoris from "./pages/Favoris";
 import NotFound from "./pages/NotFound";
+import ErrorPage from "./pages/ErrorPage";
 
 import { createBrowserRouter } from "react-router-dom";
 import { RouterProvider } from "react-router-dom";
@@ -14,6 +15,8 @@
     path: "/",
     // Layout affiche header et footer ; la page enfant s'affiche dans son <Outlet />
     element: <Layout />, // parent
+    // Si une page enfant plante pendant le render, ErrorPage s'affiche à la place
+    errorElement: <ErrorPage />,
     children: [
       { index: true, element: <Home /> }, // "/"
       { path: "details/:id", element: <Details /> }, // "/details/:id"
```

### `src/pages/ErrorPage.jsx` (ajouté, +12 −0)

```diff
@@ -1,0 +1,12 @@
+import { Link } from "react-router-dom";
+
+function ErrorPage() {
+  return (
+    <div style={{ padding: 16 }}>
+      <h2>Oups… une erreur est survenue</h2>
+      <p>Merci de réessayer.</p>
+      <Link to="/">Go back home</Link>
+    </div>
+  );
+}
+export default ErrorPage;
```

### `src/pages/Home.jsx` (modifié, +14 −0)

```diff
@@ -1,9 +1,16 @@
+import { useState } from "react";
 import { useNavigate } from "react-router-dom";
 import Car from "../components/Car";
 
 function Home() {
   // useNavigate : changer de page depuis le code (clic sur la Mercedes → /details/3)
   const navigate = useNavigate();
+  const [crash, setCrash] = useState(false);
+
+  if (crash) {
+    // Erreur pendant le render : attrapée par l'errorElement de la route (étape 5)
+    throw new Error("Crash APP");
+  }
 
   return (
     <div>
@@ -18,6 +25,13 @@
           onClick={() => navigate("/details/3")}
         />
       </div>
+      <button
+        onClick={() => {
+          setCrash(true);
+        }}
+      >
+        Crash APP
+      </button>
     </div>
   );
 }
```

## Étape 5 → 6 : `etape-5-error-element` → `etape-6-lazy-loading`

Favoris en lazy : après npm run build, un fichier Favoris-xxxx.js séparé dans dist/assets

### `src/App.jsx` (modifié, +8 −2)

```diff
@@ -2,7 +2,6 @@
 import Layout from "./pages/Layout";
 import Home from "./pages/Home";
 import Details from "./pages/Details";
-import Favoris from "./pages/Favoris";
 import NotFound from "./pages/NotFound";
 import ErrorPage from "./pages/ErrorPage";
 
@@ -20,7 +19,14 @@
     children: [
       { index: true, element: <Home /> }, // "/"
       { path: "details/:id", element: <Details /> }, // "/details/:id"
-      { path: "favoris", element: <Favoris /> }, // "/favoris"
+      {
+        path: "favoris",
+        // lazy : le code de Favoris n'est chargé qu'en allant sur /favoris (fichier séparé au build)
+        lazy: async () => {
+          const module = await import("./pages/Favoris");
+          return { Component: module.default };
+        },
+      },
     ],
   },
   {
```
