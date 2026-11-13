# Exercice 02 · Créer votre premier projet avec Vite : le code complet

Tous les fichiers de la correction (dossier correction/), en entier, pour suivre la correction. Fichiers utilisés : ceux atteints par les imports depuis src/main.* ; les fichiers du gabarit Vite non modifiés sont seulement listés. Ordre de lecture : main → App → composants et pages → le reste.

## `correction`

Projet Vite + React qui tourne sur le port 3000.

*Fichiers générés par Vite, non modifiés (non affichés) : `src/main.jsx`, `src/App.jsx`, `src/index.css`, `src/assets/react.svg`, `index.html`, `.gitignore`, `eslint.config.js`, `public/vite.svg`, `package.json`*

### `correction/src/App.css` (33 lignes)

```css
/* VERSION RESPONSIVE - S'adapte à tous les écrans (mobile, tablette, desktop) */

/* Importation de la police Google Fonts Inter avec plusieurs graisses */
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap");

/* Sélecteur universel qui cible tous les éléments HTML */
* {
  /* Force tous les éléments à inclure padding et border dans leur largeur/hauteur totale */
  box-sizing: border-box;
  /* Supprime les marges par défaut du navigateur pour avoir un contrôle total */
  margin: 0;
  /* Supprime les espacements internes par défaut du navigateur */
  padding: 0;
}

/* Style global du corps de la page */
body {
  /* Applique la police Inter importée, avec sans-serif comme police de secours */
  font-family: "Inter", sans-serif;
  /* Améliore le rendu des polices sur les navigateurs WebKit (Safari, Chrome) */
  -webkit-font-smoothing: antialiased;
  /* Améliore le rendu des polices sur Firefox pour Mac */
  -moz-osx-font-smoothing: grayscale;

  text-align: center;

  padding: 20px;
}

h1 {
  padding: 20px;
}

```

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
