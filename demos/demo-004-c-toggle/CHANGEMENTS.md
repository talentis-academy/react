# Démo 004-C · Toggle ON / OFF : les changements entre les étapes

Pour chaque étape, ce qui change par rapport à l’étape précédente. En vert : les lignes ajoutées. En rouge : les lignes retirées. « utilisé » : un fichier qui existait déjà mais qui est branché (importé) à partir de cette étape, montré en entier.

## Étape 1 · `etape-1-toggle-btn` : point de départ

Un toggle ON / OFF avec un bouton (useState dans le composant)

Le code de départ, en entier : les fichiers écrits pour la démo et utilisés (atteints par les imports depuis src/main.*) ; les fichiers du gabarit Vite non modifiés sont seulement listés. Ordre de lecture : main → App → composants et pages → le reste.

*Styles fournis (copiés tels quels, pas tapés en live) : `src/App.css` (100 lignes)*

*Fichiers générés par Vite, non modifiés (non affichés) : `index.html`, `vite.config.js`, `.gitignore`, `eslint.config.js`, `public/vite.svg`, `package.json`*

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
import ToggleBtn from "./components/ToggleBtn";

function App() {
  return <ToggleBtn />;
}

export default App;
```

### `src/components/ToggleBtn.jsx` (23 lignes)

```jsx
import { useState } from "react";

function ToggleBtn() {
  const [value, setValue] = useState(false);

  const setToggle = (value) => {
    setValue(!value);
  };

  return (
    <div>
      <h2 className="container">Toggle ON / OFF</h2>
      <button
        className={value ? "button button--on" : "button button--off"}
        onClick={() => setToggle(value)}
      >
        {value ? "ON" : "OFF"}
      </button>
    </div>
  );
}

export default ToggleBtn;
```

## Étape 1 → 2 : `etape-1-toggle-btn` → `etape-2-toggle-checkbox`

On ajoute un toggle avec une checkbox : le même code est copié dans ToggleCheckbox. App affiche les deux

### `src/App.jsx` (modifié, +7 −1)

```diff
@@ -1,8 +1,14 @@
 import "./App.css";
 import ToggleBtn from "./components/ToggleBtn";
+import ToggleCheckbox from "./components/ToggleCheckbox";
 
 function App() {
-  return <ToggleBtn />;
+  return (
+    <>
+      <ToggleBtn />
+      <ToggleCheckbox />
+    </>
+  );
 }
 
 export default App;
```

### `src/components/ToggleCheckbox.jsx` (ajouté, +26 −0)

```diff
@@ -1,0 +1,26 @@
+import { useState } from "react";
+
+function ToggleSwitch() {
+  // Le même code que dans ToggleBtn : copié-collé (on le sortira dans un custom hook à l'étape 3)
+  const [value, setValue] = useState(false);
+
+  const setToggle = (value) => {
+    setValue(!value);
+  };
+
+  return (
+    <div>
+      <h2 className="container">Toggle ON / OFF</h2>
+      <label className="switch">
+        <input
+          type="checkbox"
+          checked={value}
+          onChange={() => setToggle(value)}
+        />
+        <span>{value ? "ON" : "OFF"}</span>
+      </label>
+    </div>
+  );
+}
+
+export default ToggleSwitch;
```

## Étape 2 → 3 : `etape-2-toggle-checkbox` → `etape-3-use-toggle`

On sort la logique dans le custom hook useToggle, utilisé par les deux composants : plus de code en double

### `src/components/ToggleBtn.jsx` (modifié, +4 −7)

```diff
@@ -1,18 +1,15 @@
-import { useState } from "react";
+import useToggle from "../hooks/useToggle";
 
 function ToggleBtn() {
-  const [value, setValue] = useState(false);
-
-  const setToggle = (value) => {
-    setValue(!value);
-  };
+  // La logique du toggle est dans le custom hook useToggle
+  const { value, toggle } = useToggle(false);
 
   return (
     <div>
       <h2 className="container">Toggle ON / OFF</h2>
       <button
         className={value ? "button button--on" : "button button--off"}
-        onClick={() => setToggle(value)}
+        onClick={toggle}
       >
         {value ? "ON" : "OFF"}
       </button>
```

### `src/components/ToggleCheckbox.jsx` (modifié, +4 −12)

```diff
@@ -1,22 +1,14 @@
-import { useState } from "react";
+import useToggle from "../hooks/useToggle";
 
 function ToggleSwitch() {
-  // Le même code que dans ToggleBtn : copié-collé (on le sortira dans un custom hook à l'étape 3)
-  const [value, setValue] = useState(false);
-
-  const setToggle = (value) => {
-    setValue(!value);
-  };
+  // Le même custom hook que ToggleBtn : plus de code en double
+  const { value, toggle } = useToggle(false);
 
   return (
     <div>
       <h2 className="container">Toggle ON / OFF</h2>
       <label className="switch">
-        <input
-          type="checkbox"
-          checked={value}
-          onChange={() => setToggle(value)}
-        />
+        <input type="checkbox" checked={value} onChange={toggle} />
         <span>{value ? "ON" : "OFF"}</span>
       </label>
     </div>
```

### `src/hooks/useToggle.js` (ajouté, +14 −0)

```diff
@@ -1,0 +1,14 @@
+import { useState } from "react";
+
+// Custom hook useToggle : le state et la fonction pour inverser la valeur, réutilisables dans n'importe quel composant
+function useToggle(initial = false) {
+  const [value, setValue] = useState(initial);
+
+  const toggle = () => {
+    setValue(!value);
+  };
+
+  return { value, toggle };
+}
+
+export default useToggle;
```
