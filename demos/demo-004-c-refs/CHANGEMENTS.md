# Démo 004-C · Refs : les changements entre les étapes

Pour chaque étape, ce qui change par rapport à l’étape précédente. En vert : les lignes ajoutées. En rouge : les lignes retirées. « utilisé » : un fichier qui existait déjà mais qui est branché (importé) à partir de cette étape, montré en entier.

## Étape 1 · `etape-1-useref` : point de départ

useRef : bouton « Focus input »

Le code de départ, en entier : les fichiers écrits pour la démo et utilisés (atteints par les imports depuis src/main.*) ; les fichiers du gabarit Vite non modifiés sont seulement listés. Ordre de lecture : main → App → composants et pages → le reste.

*Styles fournis (copiés tels quels, pas tapés en live) : `src/App.css` (43 lignes)*

*Fichiers générés par Vite, non modifiés (non affichés) : `index.html`, `vite.config.js`, `eslint.config.js`, `public/vite.svg`, `package.json`*

*Présents mais pas encore branchés (non affichés) : `src/components/SearchForwardRef.jsx`, `src/components/SearchUseImperativeHandle.jsx`*

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

### `src/App.jsx` (10 lignes)

```jsx
import SearchUseImperativeHandle from "./components/SearchUseImperativeHandle";
import SearchRef from "./components/SearchRef";

import "./App.css";

function App() {
  return <SearchRef />;
}

export default App;
```

### `src/components/SearchRef.jsx` (30 lignes)

```jsx
import { useRef } from "react";

function SearchRef() {
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

export default SearchRef;
```

## Étape 1 → 2 : `etape-1-useref` → `etape-2-forwardref`

L’input devient un composant SearchInput qui reçoit la ref (React 19 : ref est une prop)

### `src/components/SearchRef.jsx → src/components/SearchForwardRef.jsx` (comparé, +15 −8)

```diff
@@ -1,21 +1,28 @@
-import { useRef } from "react";
+import { forwardRef, useRef } from "react";
 
-function SearchRef() {
+function SearchInput(props, ref) {
+  return (
+    <div>
+      <input ref={ref} type="text" placeholder="" />
+    </div>
+  );
+}
+
+// forwardRef : la ref du parent arrive en 2e paramètre de SearchInput (façon d'avant React 19)
+const SearchInputForwarded = forwardRef(SearchInput);
+
+function SearchForwardRef() {
   // useRef(null) : une boîte vide ; React remplit inputRef.current grâce à ref={inputRef}
   const inputRef = useRef(null);
-
   return (
     <div>
       <h1>{"Welcome to the Search Page"}</h1>
       <div className="container">
-        <div>
-          <input ref={inputRef} type="text" placeholder="" />
-        </div>
+        <SearchInputForwarded ref={inputRef} />
         <div>
           <button
             className="btn"
             onClick={() => {
-              console.log("Test", inputRef);
               inputRef.current?.focus();
             }}
           >
@@ -27,4 +34,4 @@
   );
 }
 
-export default SearchRef;
+export default SearchForwardRef;
```

### `src/App.jsx` (modifié, +2 −1)

```diff
@@ -1,10 +1,11 @@
 import SearchUseImperativeHandle from "./components/SearchUseImperativeHandle";
 import SearchRef from "./components/SearchRef";
+import SearchForwardRef from "./components/SearchForwardRef";
 
 import "./App.css";
 
 function App() {
-  return <SearchRef />;
+  return <SearchForwardRef />;
 }
 
 export default App;
```

### `src/components/SearchForwardRef.jsx` (utilisé, +37 −0)

```diff
@@ -1,0 +1,37 @@
+import { forwardRef, useRef } from "react";
+
+function SearchInput(props, ref) {
+  return (
+    <div>
+      <input ref={ref} type="text" placeholder="" />
+    </div>
+  );
+}
+
+// forwardRef : la ref du parent arrive en 2e paramètre de SearchInput (façon d'avant React 19)
+const SearchInputForwarded = forwardRef(SearchInput);
+
+function SearchForwardRef() {
+  // useRef(null) : une boîte vide ; React remplit inputRef.current grâce à ref={inputRef}
+  const inputRef = useRef(null);
+  return (
+    <div>
+      <h1>{"Welcome to the Search Page"}</h1>
+      <div className="container">
+        <SearchInputForwarded ref={inputRef} />
+        <div>
+          <button
+            className="btn"
+            onClick={() => {
+              inputRef.current?.focus();
+            }}
+          >
+            Focus input
+          </button>
+        </div>
+      </div>
+    </div>
+  );
+}
+
+export default SearchForwardRef;
```

## Étape 2 → 3 : `etape-2-forwardref` → `etape-3-useimperativehandle`

useImperativeHandle : le parent n’a accès qu’à focus et clear

### `src/components/SearchForwardRef.jsx → src/components/SearchUseImperativeHandle.jsx` (comparé, +40 −11)

```diff
@@ -1,24 +1,45 @@
-import { forwardRef, useRef } from "react";
+import { useImperativeHandle, useRef } from "react";
 
-function SearchInput(props, ref) {
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
   return (
     <div>
-      <input ref={ref} type="text" placeholder="" />
+      {/* Utilise inputRef interne, pas ref du parent */}
+      <input ref={inputRef} type="text" placeholder="" />
     </div>
   );
-}
+};
 
-// forwardRef : la ref du parent arrive en 2e paramètre de SearchInput (façon d'avant React 19)
-const SearchInputForwarded = forwardRef(SearchInput);
-
-function SearchForwardRef() {
+function SearchUseImperativeHandle() {
   // useRef(null) : une boîte vide ; React remplit inputRef.current grâce à ref={inputRef}
   const inputRef = useRef(null);
+
   return (
     <div>
-      <h1>{"Welcome to the Search Page"}</h1>
+      <h1>Welcome to the Search Page</h1>
       <div className="container">
-        <SearchInputForwarded ref={inputRef} />
+        <SearchInput ref={inputRef} />
         <div>
           <button
             className="btn"
@@ -28,10 +49,18 @@
           >
             Focus input
           </button>
+          <button
+            className="btn"
+            onClick={() => {
+              inputRef.current?.clear();
+            }}
+          >
+            Clear input
+          </button>
         </div>
       </div>
     </div>
   );
 }
 
-export default SearchForwardRef;
+export default SearchUseImperativeHandle;
```

### `src/App.jsx` (modifié, +1 −2)

```diff
@@ -1,11 +1,10 @@
 import SearchUseImperativeHandle from "./components/SearchUseImperativeHandle";
 import SearchRef from "./components/SearchRef";
-import SearchForwardRef from "./components/SearchForwardRef";
 
 import "./App.css";
 
 function App() {
-  return <SearchForwardRef />;
+  return <SearchUseImperativeHandle />;
 }
 
 export default App;
```

### `src/components/SearchUseImperativeHandle.jsx` (utilisé, +66 −0)

```diff
@@ -1,0 +1,66 @@
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
+
+function SearchUseImperativeHandle() {
+  // useRef(null) : une boîte vide ; React remplit inputRef.current grâce à ref={inputRef}
+  const inputRef = useRef(null);
+
+  return (
+    <div>
+      <h1>Welcome to the Search Page</h1>
+      <div className="container">
+        <SearchInput ref={inputRef} />
+        <div>
+          <button
+            className="btn"
+            onClick={() => {
+              inputRef.current?.focus();
+            }}
+          >
+            Focus input
+          </button>
+          <button
+            className="btn"
+            onClick={() => {
+              inputRef.current?.clear();
+            }}
+          >
+            Clear input
+          </button>
+        </div>
+      </div>
+    </div>
+  );
+}
+
+export default SearchUseImperativeHandle;
```
