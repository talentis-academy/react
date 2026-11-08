# Démo 09 · Custom hooks : les changements entre les étapes

Pour chaque étape, ce qui change par rapport à l’étape précédente. En vert : les lignes ajoutées. En rouge : les lignes retirées. « utilisé » : un fichier qui existait déjà mais qui est branché (importé) à partir de cette étape, montré en entier.

## Étape 1 → 2 : `etape-1-toggle-btn` → `etape-2-toggle-checkbox`

Le même toggle avec une checkbox ; le hook useToggle

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

### `src/hooks/usetNetworkStatus.ts` (utilisé, +21 −0)

```diff
@@ -1,0 +1,21 @@
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

### `src/components/Layout.jsx → src/components/Users.jsx` (comparé, +51 −16)

```diff
@@ -1,23 +1,58 @@
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

### `src/components/Users.jsx` (utilisé, +58 −0)

```diff
@@ -1,0 +1,58 @@
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
