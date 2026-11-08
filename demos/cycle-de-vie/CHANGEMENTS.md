# Démo · Cycle de vie et optimisations : les changements entre les étapes

Pour chaque étape, ce qui change par rapport à l’étape précédente. En vert : les lignes ajoutées. En rouge : les lignes retirées.

## Étape 1 → 2 : `etape-1-cycle-logs` → `etape-2-react-memo`

React.memo et le state seeMore pour observer les renders inutiles

### `src/components/Cars.tsx → src/components/CarsMemo.tsx` (comparé, +12 −2)

```diff
@@ -1,3 +1,4 @@
+import React from "react";
 import { useEffect, useRef, useState } from "react";
 
 function Car({ make, color }) {
@@ -24,6 +25,8 @@
   );
 }
 
+const MemoizedCar = React.memo(Car);
+
 const allCars = [
   { make: "BMW", color: "Blue" },
   { make: "Audi", color: "White" },
@@ -36,6 +39,7 @@
 
   const [cars, setCars] = useState<any>([]);
   const [loading, setLoading] = useState<boolean>(true);
+  const [seeMore, setSeeMore] = useState<boolean>(false);
 
   console.log(`Home Rendered ${renderCount.current} times`, {
     loading,
@@ -71,7 +75,7 @@
 
   return (
     <div>
-      <h1>Welcome to the Home Page</h1>
+      <h1>{"Welcome to the Home Page"}</h1>
       <h2>Car List</h2>
 
       {loading ? (
@@ -80,10 +84,16 @@
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

## Étape 2 → 3 : `etape-2-react-memo` → `etape-3-usecallback-usememo`

useCallback (onSelect) et useMemo (carStyle) pour stabiliser les props

### `src/components/CarsMemo.tsx → src/components/CarsUseMemo.tsx` (comparé, +38 −12)

```diff
@@ -1,31 +1,35 @@
-import React from "react";
+import React, { useCallback, useMemo } from "react";
 import { useEffect, useRef, useState } from "react";
 
-function Car({ make, color }) {
+function Car({ make, color, onSelect, style }: any) {
   const renderCount = useRef(0);
   renderCount.current += 1;
-  let colorInfo = color ? color : "Unknown";
 
-  console.log(`Car ${make} Rendered ${renderCount.current} times`, {
-    make,
-  });
+  console.log(`Car ${make} Rendered ${renderCount.current} times`);
 
   useEffect(() => {
     console.log(`Car ${make} Mounted`);
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
@@ -45,6 +49,22 @@
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
 
   useEffect(() => {
     console.log("Home Mounted");
@@ -84,7 +104,13 @@
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
