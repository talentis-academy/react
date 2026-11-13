# Exercice 02 · Créer votre premier projet avec Vite : le code complet

Tous les fichiers de la correction (dossier correction/), en entier, pour suivre la correction. Fichiers utilisés : ceux atteints par les imports depuis src/main.* ; les fichiers du gabarit Vite non modifiés sont seulement listés. Ordre de lecture : main → App → composants et pages → le reste.

## `correction`

Projet Vite + React qui tourne sur le port 3000.

*Styles fournis (copiés tels quels, pas tapés en live) : `src/App.css` (45 lignes)*

*Fichiers générés par Vite, non modifiés (non affichés) : `src/main.jsx`, `src/App.jsx`, `src/index.css`, `src/assets/react.svg`, `index.html`, `.gitignore`, `eslint.config.js`, `public/vite.svg`, `package.json`*

### `correction/vite.config.js` (12 lignes)

```js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 3000,
    strictPort: true, // si le port 3000 est déjà pris : erreur, au lieu de passer à 3001
    // open: true, // (bonus) ouvre le navigateur tout seul au lancement (npm run dev)
  },
  plugins: [react()],
});
```
