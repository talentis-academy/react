# Démo 004-G · Refs : les changements entre les étapes

Pour chaque étape, ce qui change par rapport à l’étape précédente. En vert : les lignes ajoutées. En rouge : les lignes retirées. « utilisé » : un fichier qui existait déjà mais qui est branché (importé) à partir de cette étape, montré en entier.

## Étape 1 · `etape-1-useref` : point de départ

useRef : bouton « Focus input »

Le code de départ, en entier : les fichiers écrits pour la démo et utilisés (atteints par les imports depuis src/main.*) ; les fichiers du gabarit Vite non modifiés sont seulement listés. Ordre de lecture : main → App → composants et pages → le reste.

*Styles fournis (copiés tels quels, pas tapés en live) : `src/App.css` (43 lignes)*

*Fichiers générés par Vite, non modifiés (non affichés) : `index.html`, `vite.config.js`, `eslint.config.js`, `public/vite.svg`, `package.json`*

### `src/main.jsx` (9 lignes)

```jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
```

### `src/App.jsx` (8 lignes)

```jsx
import Search from "./components/Search";
import "./App.css";

function App() {
  return <Search />;
}

export default App;
```

### `src/components/Search.jsx` (30 lignes)

```jsx
import { useRef } from "react";

function Search() {
  // useRef(null) : une boîte vide ; React remplit inputRef.current grâce à ref={inputRef}
  const inputRef = useRef(null);

  return (
    <div>
      <h1>{"Welcome to the Search Page"}</h1>
      <div className="container">
        <div>
          <input ref={inputRef} type="text" placeholder="" />
        </div>
        <div>
          <button
            className="btn"
            onClick={() => {
              console.log("Test", inputRef);
              inputRef.current?.focus();
            }}
          >
            Focus input
          </button>
        </div>
      </div>
    </div>
  );
}

export default Search;
```

## Étape 1 → 2 : `etape-1-useref` → `etape-2-useimperativehandle`

L’input devient un composant SearchInput (React 19 : ref est une prop) et useImperativeHandle : le parent n’a accès qu’à focus et clear

### `src/components/Search.jsx` (modifié, +42 −6)

```diff
@@ -1,4 +1,35 @@
-import { useRef } from "react";
+import { useImperativeHandle, useRef } from "react";
+
+// React 19 : ref est une prop normale, plus besoin de forwardRef
+// correction : Ajout d'une ref interne pour l'input
+const SearchInput = ({ ref }) => {
+  // IMPORTANT : Créer une ref INTERNE pour l'input
+  const inputRef = useRef(null);
+
+  // useImperativeHandle expose des méthodes custom au parent
+  useImperativeHandle(
+    ref,
+    () => ({
+      focus: () => {
+        inputRef.current?.focus(); // Utilise inputRef, pas ref
+      },
+      clear: () => {
+        if (inputRef.current) {
+          inputRef.current.value = "";
+        }
+      },
+      getValue: () => inputRef.current?.value || "", // Bonus : méthode ajoutée
+    }),
+    []
+  ); // [] : Pas de dépendances, on crée les méthodes une fois
+
+  return (
+    <div>
+      {/* Utilise inputRef interne, pas ref du parent */}
+      <input ref={inputRef} type="text" placeholder="" />
+    </div>
+  );
+};
 
 function Search() {
   // useRef(null) : une boîte vide ; React remplit inputRef.current grâce à ref={inputRef}
@@ -6,20 +37,25 @@
 
   return (
     <div>
-      <h1>{"Welcome to the Search Page"}</h1>
+      <h1>Welcome to the Search Page</h1>
       <div className="container">
-        <div>
-          <input ref={inputRef} type="text" placeholder="" />
-        </div>
+        <SearchInput ref={inputRef} />
         <div>
           <button
             className="btn"
             onClick={() => {
-              console.log("Test", inputRef);
               inputRef.current?.focus();
             }}
           >
             Focus input
+          </button>
+          <button
+            className="btn"
+            onClick={() => {
+              inputRef.current?.clear();
+            }}
+          >
+            Clear input
           </button>
         </div>
       </div>
```
