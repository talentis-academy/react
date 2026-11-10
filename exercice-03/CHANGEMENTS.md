# Exercice 03 · Découper CarCard en composants : les changements entre les étapes

Pour chaque étape, ce qui change par rapport à l’étape précédente. En vert : les lignes ajoutées. En rouge : les lignes retirées. « utilisé » : un fichier qui existait déjà mais qui est branché (importé) à partir de cette étape, montré en entier.

## Étape 1 → 2 : `template` → `correction`

CarCard découpé en CarBrand et CarColor, sans boucle ni JSON : Home ne change pas.

### `src/components/CarBrand.jsx` (ajouté, +4 −0)

```diff
@@ -1,0 +1,4 @@
+function CarBrand({ brand }) {
+  return <div>{brand}</div>;
+}
+export default CarBrand;
```

### `src/components/CarCard.jsx` (modifié, +5 −3)

```diff
@@ -1,10 +1,12 @@
+import CarBrand from "./CarBrand";
+import CarColor from "./CarColor";
 import "./styles.css";
-// Démo 003-A · étape 2 : CarCard reçoit la marque et la couleur en props (destructuring)
+// Exercice 3 : CarCard transmet ses props aux deux petits composants réutilisables
 function CarCard({ brand, color }) {
   return (
     <div className="car-item">
-      <div>{brand}</div>
-      <div>{color}</div>
+      <CarBrand brand={brand} />
+      <CarColor color={color} />
     </div>
   );
 }
```

### `src/components/CarColor.jsx` (ajouté, +5 −0)

```diff
@@ -1,0 +1,5 @@
+function CarColor({ color }) {
+  return <div>{color}</div>;
+}
+
+export default CarColor;
```
