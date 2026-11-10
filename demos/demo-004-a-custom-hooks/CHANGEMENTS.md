# Démo 004-A · Custom hooks : les changements entre les étapes

Pour chaque étape, ce qui change par rapport à l’étape précédente. En vert : les lignes ajoutées. En rouge : les lignes retirées. « utilisé » : un fichier qui existait déjà mais qui est branché (importé) à partir de cette étape, montré en entier.

## Étape 1 · `etape-1-toggle-btn` : point de départ

Un toggle ON / OFF avec un bouton (useState)

Le code de départ, en entier : les fichiers écrits pour la démo et utilisés (atteints par les imports depuis src/main.*) ; les fichiers du gabarit Vite non modifiés sont seulement listés. Ordre de lecture : main → App → composants et pages → le reste.

*Styles fournis (copiés tels quels, pas tapés en live) : `src/App.css` (104 lignes)*

*Fichiers générés par Vite, non modifiés (non affichés) : `index.html`, `vite.config.js`, `.gitignore`, `eslint.config.js`, `public/vite.svg`, `package.json`*

*Présents mais pas encore branchés (non affichés) : `src/components/BadExample.jsx`, `src/components/Comments.jsx`, `src/components/Layout.jsx`, `src/components/ToggleCheckbox.jsx`, `src/components/Users.jsx`, `src/hooks/useFetchApi.ts`, `src/hooks/useToogle.ts`, `src/hooks/usetNetworkStatus.ts`*

### `src/main.jsx` (6 lignes)

```jsx
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <App />
);
```

### `src/App.jsx` (14 lignes)

```jsx
import "./App.css";
import ToggleBtn from "./components/ToggleBtn";
import ToggleCheckbox from "./components/ToggleCheckbox";
import Layout from "./components/Layout";
import Users from "./components/Users";
import Comments from "./components/Comments";

import BadExample from "./components/BadExample";

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

Le même toggle avec une checkbox (le hook useToggle est écrit dans src/hooks/useToogle.ts, mais pas encore branché : ToggleCheckbox garde son useState)

### `src/components/ToggleBtn.jsx → src/components/ToggleCheckbox.jsx` (comparé, +10 −8)

```diff
@@ -1,6 +1,6 @@
 import { useState } from "react";
 
-function ToggleBtn() {
+function ToggleSwitch() {
   const [value, setValue] = useState(false);
 
   const setToggle = (value) => {
@@ -10,14 +10,16 @@
   return (
     <div>
       <h2 className="container">Toggle ON / OFF</h2>
-      <button
-        className={value ? "button button--on" : "button button--off"}
-        onClick={() => setToggle(value)}
-      >
-        {value ? "ON" : "OFF"}
-      </button>
+      <label className="switch">
+        <input
+          type="checkbox"
+          checked={value}
+          onChange={(e) => setValue(e.target.checked)}
+        />
+        <span>{value ? "ON" : "OFF"}</span>
+      </label>
     </div>
   );
 }
 
-export default ToggleBtn;
+export default ToggleSwitch;
```

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

### `src/components/ToggleCheckbox.jsx` (utilisé, +25 −0)

```diff
@@ -1,0 +1,25 @@
+import { useState } from "react";
+
+function ToggleSwitch() {
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
+          onChange={(e) => setValue(e.target.checked)}
+        />
+        <span>{value ? "ON" : "OFF"}</span>
+      </label>
+    </div>
+  );
+}
+
+export default ToggleSwitch;
```

## Étape 2 → 3 : `etape-2-toggle-checkbox` → `etape-3-network-status`

Le hook useNetworkStatus : listeners online / offline dans useEffect

### `src/components/ToggleCheckbox.jsx → src/components/Layout.jsx` (comparé, +17 −19)

```diff
@@ -1,25 +1,23 @@
-import { useState } from "react";
+import useNetworkStatus from "../hooks/usetNetworkStatus";
 
-function ToggleSwitch() {
-  const [value, setValue] = useState(false);
-
-  const setToggle = (value) => {
-    setValue(!value);
-  };
+function Layout() {
+  const { isOnline } = useNetworkStatus();
 
   return (
-    <div>
-      <h2 className="container">Toggle ON / OFF</h2>
-      <label className="switch">
-        <input
-          type="checkbox"
-          checked={value}
-          onChange={(e) => setValue(e.target.checked)}
-        />
-        <span>{value ? "ON" : "OFF"}</span>
-      </label>
-    </div>
+    <>
+      {!isOnline && (
+        <div style={{ padding: 10, background: "#ffdddd", color: "#900" }}>
+          Vous êtes hors ligne
+        </div>
+      )}
+
+      {isOnline && (
+        <div style={{ padding: 10, background: "#ddffdd", color: "#090" }}>
+          Vous êtes connecté
+        </div>
+      )}
+    </>
   );
 }
 
-export default ToggleSwitch;
+export default Layout;
```

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

### `src/components/Layout.jsx` (utilisé, +23 −0)

```diff
@@ -1,0 +1,23 @@
+import useNetworkStatus from "../hooks/usetNetworkStatus";
+
+function Layout() {
+  const { isOnline } = useNetworkStatus();
+
+  return (
+    <>
+      {!isOnline && (
+        <div style={{ padding: 10, background: "#ffdddd", color: "#900" }}>
+          Vous êtes hors ligne
+        </div>
+      )}
+
+      {isOnline && (
+        <div style={{ padding: 10, background: "#ddffdd", color: "#090" }}>
+          Vous êtes connecté
+        </div>
+      )}
+    </>
+  );
+}
+
+export default Layout;
```

### `src/hooks/usetNetworkStatus.ts` (utilisé, +22 −0)

```diff
@@ -1,0 +1,22 @@
+import { useEffect, useState } from "react";
+
+function useNetworkStatus() {
+  const [isOnline, setIsOnline] = useState(() => navigator.onLine);
+
+  useEffect(() => {
+    const onOnline = () => setIsOnline(true);
+    const onOffline = () => setIsOnline(false);
+
+    window.addEventListener("online", onOnline);
+    window.addEventListener("offline", onOffline);
+
+    // Nettoyage : on retire les écouteurs quand le composant disparaît
+    return () => {
+      window.removeEventListener("online", onOnline);
+      window.removeEventListener("offline", onOffline);
+    };
+  }, []);
+
+  return { isOnline };
+}
+export default useNetworkStatus;
```

## Étape 3 → 4 : `etape-3-network-status` → `etape-4-users`

La page Users : fetch avec loading / error (point de départ de l’exercice 11)

### `src/components/Layout.jsx → src/components/Users.jsx` (comparé, +52 −16)

```diff
@@ -1,23 +1,59 @@
-import useNetworkStatus from "../hooks/usetNetworkStatus";
+import { useEffect, useState } from "react";
 
-function Layout() {
-  const { isOnline } = useNetworkStatus();
+function Users() {
+  const [users, setUsers] = useState([]);
+  const [isLoading, setIsLoading] = useState(false);
+  const [isError, setIsError] = useState(false);
+
+  const getData = async () => {
+    setIsLoading(true);
+    try {
+      const response = await fetch(
+        "https://jsonplaceholder.typicode.com/users"
+      );
+      const json = await response.json();
+      setUsers(json);
+    } catch (error) {
+      setIsError(true);
+    } finally {
+      setIsLoading(false);
+    }
+  };
+
+  // useEffect avec [] : getData tourne une seule fois, au montage
+  useEffect(() => {
+    getData();
+  }, []);
 
   return (
-    <>
-      {!isOnline && (
-        <div style={{ padding: 10, background: "#ffdddd", color: "#900" }}>
-          Vous êtes hors ligne
-        </div>
+    <div>
+      <h2 className="container">Welcome to users page</h2>
+      {isLoading ? (
+        <div className="loading">Loading ...</div>
+      ) : (
+        <table className="table">
+          <thead>
+            <tr>
+              <th className="header">Id</th>
+              <th className="header">Name</th>
+              <th className="header">Email</th>
+            </tr>
+          </thead>
+          <tbody>
+            {users.map((user) => {
+              return (
+                <tr key={user.id}>
+                  <td className="item">{user.id}</td>
+                  <td className="item">{user.name}</td>
+                  <td className="item">{user.email}</td>
+                </tr>
+              );
+            })}
+          </tbody>
+        </table>
       )}
-
-      {isOnline && (
-        <div style={{ padding: 10, background: "#ddffdd", color: "#090" }}>
-          Vous êtes connecté
-        </div>
-      )}
-    </>
+    </div>
   );
 }
 
-export default Layout;
+export default Users;
```

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

### `src/components/Users.jsx` (utilisé, +59 −0)

```diff
@@ -1,0 +1,59 @@
+import { useEffect, useState } from "react";
+
+function Users() {
+  const [users, setUsers] = useState([]);
+  const [isLoading, setIsLoading] = useState(false);
+  const [isError, setIsError] = useState(false);
+
+  const getData = async () => {
+    setIsLoading(true);
+    try {
+      const response = await fetch(
+        "https://jsonplaceholder.typicode.com/users"
+      );
+      const json = await response.json();
+      setUsers(json);
+    } catch (error) {
+      setIsError(true);
+    } finally {
+      setIsLoading(false);
+    }
+  };
+
+  // useEffect avec [] : getData tourne une seule fois, au montage
+  useEffect(() => {
+    getData();
+  }, []);
+
+  return (
+    <div>
+      <h2 className="container">Welcome to users page</h2>
+      {isLoading ? (
+        <div className="loading">Loading ...</div>
+      ) : (
+        <table className="table">
+          <thead>
+            <tr>
+              <th className="header">Id</th>
+              <th className="header">Name</th>
+              <th className="header">Email</th>
+            </tr>
+          </thead>
+          <tbody>
+            {users.map((user) => {
+              return (
+                <tr key={user.id}>
+                  <td className="item">{user.id}</td>
+                  <td className="item">{user.name}</td>
+                  <td className="item">{user.email}</td>
+                </tr>
+              );
+            })}
+          </tbody>
+        </table>
+      )}
+    </div>
+  );
+}
+
+export default Users;
```
