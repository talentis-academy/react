# Démo 004-B · Cycle de vie et optimisations : les changements entre les étapes

Pour chaque étape, ce qui change par rapport à l’étape précédente. En vert : les lignes ajoutées. En rouge : les lignes retirées. « utilisé » : un fichier qui existait déjà mais qui est branché (importé) à partir de cette étape, montré en entier.

## Étape 1 · `etape-1-cycle-logs` : point de départ

Cycle de vie : renderCount avec useRef, logs dans useEffect (Mounted / Unmounted)

Le code de départ, en entier : les fichiers écrits pour la démo et utilisés (atteints par les imports depuis src/main.*) ; les fichiers du gabarit Vite non modifiés sont seulement listés. Ordre de lecture : main → App → composants et pages → le reste.

*Styles fournis (copiés tels quels, pas tapés en live) : `src/App.css` (48 lignes)*

*Fichiers générés par Vite, non modifiés (non affichés) : `index.html`, `vite.config.js`, `eslint.config.js`, `public/vite.svg`, `package.json`*

*Présents mais pas encore branchés (non affichés) : `src/components/CarsMemo.tsx`, `src/components/CarsUseMemo.tsx`*

### `src/main.jsx` (6 lignes)

```jsx
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <App />
);
```

### `src/App.jsx` (19 lignes)

```jsx
import Home from "./components/Cars";
import CarsMemo from "./components/CarsMemo";
import CarsUseMemo from "./components/CarsUseMemo";

import { useState } from "react";
import "./App.css";

export default function App() {
  const [showHome, setShowHome] = useState(true);

  return (
    <div>
      <button onClick={() => setShowHome((v) => !v)}>
        {showHome ? "Unmount Home" : "Mount Home"}
      </button>
      {showHome ? <Home /> : <div>Home is hidden</div>}
    </div>
  );
}
```

### `src/components/Cars.tsx` (96 lignes)

```tsx
import { useEffect, useRef, useState } from "react";

function Car({ make, color }) {
  // useRef garde le compteur d'un render à l'autre, sans provoquer de nouveau render
  const renderCount = useRef(0);
  renderCount.current += 1;
  let colorInfo = color ? color : "Unknown";

  console.log(`Car ${make} Rendered ${renderCount.current} times`, {
    make,
  });

  useEffect(() => {
    console.log(`Car ${make} Mounted`);
    // Fonction de nettoyage : appelée au démontage (bouton « Unmount Home »)
    return () => {
      console.log(`Car ${make} UnMounted`);
    };
  }, [make]);

  return (
    <div className="car-item">
      <div>{make}</div>
      <div>{colorInfo}</div>
    </div>
  );
}

const allCars = [
  { make: "BMW", color: "Blue" },
  { make: "Audi", color: "White" },
  { make: "Mercedes", color: "Black" },
];

function Cars() {
  const renderCount = useRef(0);
  renderCount.current += 1;

  const [cars, setCars] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(true);

  console.log(`Home Rendered ${renderCount.current} times`, {
    loading,
    cars: cars.length,
  });

  // useEffect avec [] : ça tourne une seule fois, au montage
  useEffect(() => {
    console.log("Home Mounted");
    console.log("Fetching cars...");
    setLoading(true);

    // const timerId =
    setTimeout(() => {
      console.log("Cars fetched");
      setCars(allCars);
      setLoading(false);
    }, 1000);
    return () => {
      console.log("Home UnMounted");
    };
  }, []);

  const handleFilter = (selectedMake: string) => {
    console.log(`Filtering cars by make: ${selectedMake}`);
    if (selectedMake === "ALL") {
      setCars(allCars);
    } else {
      const filteredCars = allCars.filter((car) => car.make === selectedMake);
      setCars(filteredCars);
      console.log(`Home filtered by make ${selectedMake}`);
    }
  };

  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <h2>Car List</h2>

      {loading ? (
        <div className="loading">Loading cars...</div>
      ) : (
        <>
          <div className="container">
            {cars.map((car: any, index: number) => (
              <Car key={index} make={car.make} color={car.color} />
            ))}
          </div>
          <button onClick={() => handleFilter("BMW")}>Set Make to BMW</button>
        </>
      )}
    </div>
  );
}

export default Cars;
```

## Étape 1 → 2 : `etape-1-cycle-logs` → `etape-2-react-memo`

React.memo et le state seeMore pour observer les renders inutiles

### `src/components/Cars.tsx → src/components/CarsMemo.tsx` (comparé, +13 −2)

```diff
@@ -1,3 +1,4 @@
+import React from "react";
 import { useEffect, useRef, useState } from "react";
 
 function Car({ make, color }) {
@@ -26,6 +27,9 @@
   );
 }
 
+// React.memo : Car ne se re-rend que si ses props changent
+const MemoizedCar = React.memo(Car);
+
 const allCars = [
   { make: "BMW", color: "Blue" },
   { make: "Audi", color: "White" },
@@ -38,6 +42,7 @@
 
   const [cars, setCars] = useState<any>([]);
   const [loading, setLoading] = useState<boolean>(true);
+  const [seeMore, setSeeMore] = useState<boolean>(false);
 
   console.log(`Home Rendered ${renderCount.current} times`, {
     loading,
@@ -74,7 +79,7 @@
 
   return (
     <div>
-      <h1>Welcome to the Home Page</h1>
+      <h1>{"Welcome to the Home Page"}</h1>
       <h2>Car List</h2>
 
       {loading ? (
@@ -83,10 +88,16 @@
         <>
           <div className="container">
             {cars.map((car: any, index: number) => (
-              <Car key={index} make={car.make} color={car.color} />
+              <MemoizedCar key={index} make={car.make} color={car.color} />
             ))}
           </div>
           <button onClick={() => handleFilter("BMW")}>Set Make to BMW</button>
+          <button
+            style={{ margin: "10px" }}
+            onClick={() => setSeeMore(!seeMore)}
+          >
+            See More
+          </button>
         </>
       )}
     </div>
```

### `src/App.jsx` (modifié, +1 −1)

```diff
@@ -13,7 +13,7 @@
       <button onClick={() => setShowHome((v) => !v)}>
         {showHome ? "Unmount Home" : "Mount Home"}
       </button>
-      {showHome ? <Home /> : <div>Home is hidden</div>}
+      {showHome ? <CarsMemo /> : <div>Home is hidden</div>}
     </div>
   );
 }
```

### `src/components/CarsMemo.tsx` (utilisé, +107 −0)

```diff
@@ -1,0 +1,107 @@
+import React from "react";
+import { useEffect, useRef, useState } from "react";
+
+function Car({ make, color }) {
+  // useRef garde le compteur d'un render à l'autre, sans provoquer de nouveau render
+  const renderCount = useRef(0);
+  renderCount.current += 1;
+  let colorInfo = color ? color : "Unknown";
+
+  console.log(`Car ${make} Rendered ${renderCount.current} times`, {
+    make,
+  });
+
+  useEffect(() => {
+    console.log(`Car ${make} Mounted`);
+    // Fonction de nettoyage : appelée au démontage (bouton « Unmount Home »)
+    return () => {
+      console.log(`Car ${make} UnMounted`);
+    };
+  }, [make]);
+
+  return (
+    <div className="car-item">
+      <div>{make}</div>
+      <div>{colorInfo}</div>
+    </div>
+  );
+}
+
+// React.memo : Car ne se re-rend que si ses props changent
+const MemoizedCar = React.memo(Car);
+
+const allCars = [
+  { make: "BMW", color: "Blue" },
+  { make: "Audi", color: "White" },
+  { make: "Mercedes", color: "Black" },
+];
+
+function Cars() {
+  const renderCount = useRef(0);
+  renderCount.current += 1;
+
+  const [cars, setCars] = useState<any>([]);
+  const [loading, setLoading] = useState<boolean>(true);
+  const [seeMore, setSeeMore] = useState<boolean>(false);
+
+  console.log(`Home Rendered ${renderCount.current} times`, {
+    loading,
+    cars: cars.length,
+  });
+
+  // useEffect avec [] : ça tourne une seule fois, au montage
+  useEffect(() => {
+    console.log("Home Mounted");
+    console.log("Fetching cars...");
+    setLoading(true);
+
+    // const timerId =
+    setTimeout(() => {
+      console.log("Cars fetched");
+      setCars(allCars);
+      setLoading(false);
+    }, 1000);
+    return () => {
+      console.log("Home UnMounted");
+    };
+  }, []);
+
+  const handleFilter = (selectedMake: string) => {
+    console.log(`Filtering cars by make: ${selectedMake}`);
+    if (selectedMake === "ALL") {
+      setCars(allCars);
+    } else {
+      const filteredCars = allCars.filter((car) => car.make === selectedMake);
+      setCars(filteredCars);
+      console.log(`Home filtered by make ${selectedMake}`);
+    }
+  };
+
+  return (
+    <div>
+      <h1>{"Welcome to the Home Page"}</h1>
+      <h2>Car List</h2>
+
+      {loading ? (
+        <div className="loading">Loading cars...</div>
+      ) : (
+        <>
+          <div className="container">
+            {cars.map((car: any, index: number) => (
+              <MemoizedCar key={index} make={car.make} color={car.color} />
+            ))}
+          </div>
+          <button onClick={() => handleFilter("BMW")}>Set Make to BMW</button>
+          <button
+            style={{ margin: "10px" }}
+            onClick={() => setSeeMore(!seeMore)}
+          >
+            See More
+          </button>
+        </>
+      )}
+    </div>
+  );
+}
+
+export default Cars;
```

## Étape 2 → 3 : `etape-2-react-memo` → `etape-3-usecallback-usememo`

useCallback (onSelect) et useMemo (carStyle) pour stabiliser les props

### `src/components/CarsMemo.tsx → src/components/CarsUseMemo.tsx` (comparé, +38 −12)

```diff
@@ -1,34 +1,38 @@
-import React from "react";
+import React, { useCallback, useMemo } from "react";
 import { useEffect, useRef, useState } from "react";
 
-function Car({ make, color }) {
+function Car({ make, color, onSelect, style }: any) {
   // useRef garde le compteur d'un render à l'autre, sans provoquer de nouveau render
   const renderCount = useRef(0);
   renderCount.current += 1;
-  let colorInfo = color ? color : "Unknown";
 
-  console.log(`Car ${make} Rendered ${renderCount.current} times`, {
-    make,
-  });
+  console.log(`Car ${make} Rendered ${renderCount.current} times`);
 
   useEffect(() => {
     console.log(`Car ${make} Mounted`);
     // Fonction de nettoyage : appelée au démontage (bouton « Unmount Home »)
-    return () => {
-      console.log(`Car ${make} UnMounted`);
-    };
+    return () => console.log(`Car ${make} UnMounted`);
   }, [make]);
 
   return (
-    <div className="car-item">
+    <div className="car-item" style={style} onClick={() => onSelect(make)}>
       <div>{make}</div>
-      <div>{colorInfo}</div>
+      <div>{color ?? "Unknown"}</div>
     </div>
   );
 }
 
 // React.memo : Car ne se re-rend que si ses props changent
 const MemoizedCar = React.memo(Car);
+
+/*
+const MemoizedCar = React.memo(Car, (prevProps, nextProps) => {
+  return (
+    prevProps.brand === nextProps.brand &&
+    prevProps.color === nextProps.color
+  );
+});
+*/
 
 const allCars = [
   { make: "BMW", color: "Blue" },
@@ -48,6 +52,22 @@
     loading,
     cars: cars.length,
   });
+
+  // useCallback: même référence entre les renders
+  const onSelect = useCallback((make: string) => {
+    console.log("Selected:", make);
+  }, []);
+
+  // useMemo: même objet entre les renders
+  const carStyle = useMemo(
+    () => ({
+      padding: "10px",
+      marginBottom: "10px",
+      border: "1px solid #ccc",
+      cursor: "pointer",
+    }),
+    []
+  );
 
   // useEffect avec [] : ça tourne une seule fois, au montage
   useEffect(() => {
@@ -88,7 +108,13 @@
         <>
           <div className="container">
             {cars.map((car: any, index: number) => (
-              <MemoizedCar key={index} make={car.make} color={car.color} />
+              <MemoizedCar
+                key={index}
+                make={car.make}
+                color={car.color}
+                onSelect={onSelect}
+                style={carStyle}
+              />
             ))}
           </div>
           <button onClick={() => handleFilter("BMW")}>Set Make to BMW</button>
```

### `src/App.jsx` (modifié, +1 −1)

```diff
@@ -13,7 +13,7 @@
       <button onClick={() => setShowHome((v) => !v)}>
         {showHome ? "Unmount Home" : "Mount Home"}
       </button>
-      {showHome ? <CarsMemo /> : <div>Home is hidden</div>}
+      {showHome ? <CarsUseMemo /> : <div>Home is hidden</div>}
     </div>
   );
 }
```

### `src/components/CarsUseMemo.tsx` (utilisé, +133 −0)

```diff
@@ -1,0 +1,133 @@
+import React, { useCallback, useMemo } from "react";
+import { useEffect, useRef, useState } from "react";
+
+function Car({ make, color, onSelect, style }: any) {
+  // useRef garde le compteur d'un render à l'autre, sans provoquer de nouveau render
+  const renderCount = useRef(0);
+  renderCount.current += 1;
+
+  console.log(`Car ${make} Rendered ${renderCount.current} times`);
+
+  useEffect(() => {
+    console.log(`Car ${make} Mounted`);
+    // Fonction de nettoyage : appelée au démontage (bouton « Unmount Home »)
+    return () => console.log(`Car ${make} UnMounted`);
+  }, [make]);
+
+  return (
+    <div className="car-item" style={style} onClick={() => onSelect(make)}>
+      <div>{make}</div>
+      <div>{color ?? "Unknown"}</div>
+    </div>
+  );
+}
+
+// React.memo : Car ne se re-rend que si ses props changent
+const MemoizedCar = React.memo(Car);
+
+/*
+const MemoizedCar = React.memo(Car, (prevProps, nextProps) => {
+  return (
+    prevProps.brand === nextProps.brand &&
+    prevProps.color === nextProps.color
+  );
+});
+*/
+
+const allCars = [
+  { make: "BMW", color: "Blue" },
+  { make: "Audi", color: "White" },
+  { make: "Mercedes", color: "Black" },
+];
+
+function Cars() {
+  const renderCount = useRef(0);
+  renderCount.current += 1;
+
+  const [cars, setCars] = useState<any>([]);
+  const [loading, setLoading] = useState<boolean>(true);
+  const [seeMore, setSeeMore] = useState<boolean>(false);
+
+  console.log(`Home Rendered ${renderCount.current} times`, {
+    loading,
+    cars: cars.length,
+  });
+
+  // useCallback: même référence entre les renders
+  const onSelect = useCallback((make: string) => {
+    console.log("Selected:", make);
+  }, []);
+
+  // useMemo: même objet entre les renders
+  const carStyle = useMemo(
+    () => ({
+      padding: "10px",
+      marginBottom: "10px",
+      border: "1px solid #ccc",
+      cursor: "pointer",
+    }),
+    []
+  );
+
+  // useEffect avec [] : ça tourne une seule fois, au montage
+  useEffect(() => {
+    console.log("Home Mounted");
+    console.log("Fetching cars...");
+    setLoading(true);
+
+    // const timerId =
+    setTimeout(() => {
+      console.log("Cars fetched");
+      setCars(allCars);
+      setLoading(false);
+    }, 1000);
+    return () => {
+      console.log("Home UnMounted");
+    };
+  }, []);
+
+  const handleFilter = (selectedMake: string) => {
+    console.log(`Filtering cars by make: ${selectedMake}`);
+    if (selectedMake === "ALL") {
+      setCars(allCars);
+    } else {
+      const filteredCars = allCars.filter((car) => car.make === selectedMake);
+      setCars(filteredCars);
+      console.log(`Home filtered by make ${selectedMake}`);
+    }
+  };
+
+  return (
+    <div>
+      <h1>{"Welcome to the Home Page"}</h1>
+      <h2>Car List</h2>
+
+      {loading ? (
+        <div className="loading">Loading cars...</div>
+      ) : (
+        <>
+          <div className="container">
+            {cars.map((car: any, index: number) => (
+              <MemoizedCar
+                key={index}
+                make={car.make}
+                color={car.color}
+                onSelect={onSelect}
+                style={carStyle}
+              />
+            ))}
+          </div>
+          <button onClick={() => handleFilter("BMW")}>Set Make to BMW</button>
+          <button
+            style={{ margin: "10px" }}
+            onClick={() => setSeeMore(!seeMore)}
+          >
+            See More
+          </button>
+        </>
+      )}
+    </div>
+  );
+}
+
+export default Cars;
```
