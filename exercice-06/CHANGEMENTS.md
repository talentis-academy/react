# Exercice 06 · Force du mot de passe : les changements entre les étapes

Pour chaque étape, ce qui change par rapport à l’étape précédente. En vert : les lignes ajoutées. En rouge : les lignes retirées. « utilisé » : un fichier qui existait déjà mais qui est branché (importé) à partir de cette étape, montré en entier.

## Point de départ : `template`

Le code de départ, en entier : les fichiers écrits pour la démo et utilisés (atteints par les imports depuis src/main.*) ; les fichiers du gabarit Vite non modifiés sont seulement listés. Ordre de lecture : main → App → composants et pages → le reste.

*Styles fournis (copiés tels quels, pas tapés en live) : `src/index.css` (80 lignes)*

*Fichiers générés par Vite, non modifiés (non affichés) : `src/main.jsx`, `index.html`, `vite.config.js`, `.gitignore`, `eslint.config.js`, `public/vite.svg`, `package.json`*

### `src/App.jsx` (7 lignes)

```jsx
import PasswordStrength from "./PasswordStrength.jsx";

function App() {
  return <PasswordStrength />;
}

export default App;
```

### `src/PasswordStrength.jsx` (31 lignes)

```jsx
// Exercice 6 · template : l'interface et le CSS sont prêts (index.css), à vous d'ajouter la logique (les TODO)

// TODO 3 : écrire getStrength(password) : compter les règles respectées dans un score (let score = 0, +1 par règle)
//          une majuscule /[A-Z]/, un chiffre /[0-9]/, un caractère spécial /[^A-Za-z0-9]/ (.test() renvoie true ou false)
//          et renvoyer le message et la couleur : vide → « Saisissez un mot de passe » (gris),
//          0 ou 1 règle → « Faible » (rouge), 2 règles → « Moyen » (orange), 3 règles → « Fort » (vert)

function PasswordStrength() {
  // TODO 1 : un state password (au départ "")

  return (
    <div className="card">
      <h1>Force du mot de passe</h1>
      <label>
        Mot de passe
        {/* TODO 2 : relier l'input au state avec value et onChange (e.target.value) */}
        <input type="password" />
      </label>

      {/* TODO 4 : afficher « Force : … » avec la couleur renvoyée par getStrength */}
      <p>Force : </p>

      {/* Bonus : la barre de progression grandit avec la force (vide, 1/3, 2/3, pleine) : style width et background de .bar-fill */}
      <div className="bar">
        <div className="bar-fill" />
      </div>
    </div>
  );
}

export default PasswordStrength;
```

## Étape 1 → 2 : `template` → `correction`

Le state password relié à l’input, getStrength (le score des 3 règles), le message coloré et la barre de progression (bonus).

### `package.json` (modifié, +1 −1)

```diff
@@ -1,5 +1,5 @@
 {
-  "name": "exercice-06-template",
+  "name": "exercice-06-mot-de-passe",
   "private": true,
   "version": "0.0.0",
   "type": "module",
```

### `src/PasswordStrength.jsx` (modifié, +27 −12)

```diff
@@ -1,28 +1,43 @@
-// Exercice 6 · template : l'interface et le CSS sont prêts (index.css), à vous d'ajouter la logique (les TODO)
+import { useState } from "react";
 
-// TODO 3 : écrire getStrength(password) : compter les règles respectées dans un score (let score = 0, +1 par règle)
-//          une majuscule /[A-Z]/, un chiffre /[0-9]/, un caractère spécial /[^A-Za-z0-9]/ (.test() renvoie true ou false)
-//          et renvoyer le message et la couleur : vide → « Saisissez un mot de passe » (gris),
-//          0 ou 1 règle → « Faible » (rouge), 2 règles → « Moyen » (orange), 3 règles → « Fort » (vert)
+function getStrength(password) {
+  if (password.length === 0) return { label: "Saisissez un mot de passe", color: "#757575", level: 0 };
+
+  // .test() renvoie true ou false
+  let score = 0;
+  if (/[A-Z]/.test(password)) score++; // une majuscule
+  if (/[0-9]/.test(password)) score++; // un chiffre
+  if (/[^A-Za-z0-9]/.test(password)) score++; // un caractère spécial (ni lettre, ni chiffre)
+
+  if (score === 3) return { label: "Fort", color: "#50BF90", level: 3 };
+  if (score === 2) return { label: "Moyen", color: "#FC8C00", level: 2 };
+  return { label: "Faible", color: "#F84A4A", level: 1 };
+}
 
 function PasswordStrength() {
-  // TODO 1 : un state password (au départ "")
+  const [password, setPassword] = useState("");
+  const strength = getStrength(password);
 
   return (
     <div className="card">
       <h1>Force du mot de passe</h1>
       <label>
         Mot de passe
-        {/* TODO 2 : relier l'input au state avec value et onChange (e.target.value) */}
-        <input type="password" />
+        <input
+          type="password"
+          value={password}
+          onChange={(e) => setPassword(e.target.value)}
+        />
       </label>
 
-      {/* TODO 4 : afficher « Force : … » avec la couleur renvoyée par getStrength */}
-      <p>Force : </p>
+      <p style={{ color: strength.color, fontWeight: 600 }}>Force : {strength.label}</p>
 
-      {/* Bonus : la barre de progression grandit avec la force (vide, 1/3, 2/3, pleine) : style width et background de .bar-fill */}
+      {/* Bonus : barre de progression */}
       <div className="bar">
-        <div className="bar-fill" />
+        <div
+          className="bar-fill"
+          style={{ width: `${(strength.level / 3) * 100}%`, background: strength.color }}
+        />
       </div>
     </div>
   );
```
