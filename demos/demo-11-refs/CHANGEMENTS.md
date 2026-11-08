# Démo 11 · Refs : les changements entre les étapes

Pour chaque étape, ce qui change par rapport à l’étape précédente. En vert : les lignes ajoutées. En rouge : les lignes retirées. « utilisé » : un fichier qui existait déjà mais qui est branché (importé) à partir de cette étape, montré en entier.

## Étape 1 → 2 : `etape-1-useref` → `etape-2-forwardref`

L’input devient un composant SearchInput qui reçoit la ref (React 19 : ref est une prop)

### `src/components/SearchRef.jsx → src/components/SearchForwardRef.jsx` (comparé, +14 −8)

```diff
@@ -1,20 +1,26 @@
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
+const SearchInputForwarded = forwardRef(SearchInput);
+
+function SearchForwardRef() {
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
@@ -26,4 +32,4 @@
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

### `src/components/SearchForwardRef.jsx` (utilisé, +35 −0)

```diff
@@ -1,0 +1,35 @@
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
+const SearchInputForwarded = forwardRef(SearchInput);
+
+function SearchForwardRef() {
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

### `src/components/SearchForwardRef.jsx → src/components/SearchUseImperativeHandle.jsx` (comparé, +40 −10)

```diff
@@ -1,22 +1,44 @@
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
 
-const SearchInputForwarded = forwardRef(SearchInput);
+function SearchUseImperativeHandle() {
+  const inputRef = useRef(null);
 
-function SearchForwardRef() {
-  const inputRef = useRef(null);
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
@@ -26,10 +48,18 @@
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

### `src/components/SearchUseImperativeHandle.jsx` (utilisé, +65 −0)

```diff
@@ -1,0 +1,65 @@
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
