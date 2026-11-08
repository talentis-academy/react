> **Exercice 2 · Correction**

# Créer votre premier projet avec Vite

*Correction pas à pas. Le projet complet est dans le dossier « correction ».*

| | |
|---|---|
| **Énoncé** | Exercice_02_Enonce.docx |
| **Code** | Dossier `correction/` (projet Vite prêt à lancer) |

## Étapes 1 et 2 : Créer, installer, lancer

```bash
npm create vite@latest
# Project name : mon-premier-projet
# Framework    : React
# Variant      : JavaScript

cd mon-premier-projet
npm install
npm run dev

#  ➜  Local:   http://localhost:5173/
```

Par défaut, Vite lance le serveur sur le port `5173`.

## Étape 3 : Hot reloading

**`src/App.jsx`**

```jsx
function App() {
  return (
    <>
      <h1>Mon premier projet React</h1>
    </>
  );
}

export default App;
```

À l’enregistrement, Vite met à jour uniquement le module modifié : le titre change dans le navigateur sans recharger la page.

## Étape 4 : Changer le port

On ajoute la clé `server` dans `vite.config.js` (doc : <https://vite.dev/config/server-options#server-port>) :

**`vite.config.js`**

```jsx
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [react()],
});
```

On arrête le serveur (`Ctrl + C`) et on relance :

```bash
npm run dev

#  ➜  Local:   http://localhost:3000/
```

## Bonus

### Refuser un port déjà occupé

Par défaut, si le port 3000 est pris, Vite essaie automatiquement 3001, 3002… Avec `strictPort: true`, Vite s’arrête avec une erreur au lieu de changer de port (doc : <https://vite.dev/config/server-options#server-strictport>).

### Ouvrir le navigateur automatiquement

L’option `open: true` ouvre le navigateur au lancement (doc : <https://vite.dev/config/server-options#server-open>).

**`vite.config.js (avec les bonus)`**

```jsx
export default defineConfig({
  server: {
    port: 3000,
    strictPort: true,
    open: true,
  },
  plugins: [react()],
});
```

## Autre solution possible

On peut aussi passer le port en ligne de commande, sans toucher à la config (doc : <https://vite.dev/guide/cli>) :

```bash
npm run dev -- --port 3000
```

> **Remarque :** En équipe, on préfère `vite.config.js` : la configuration est partagée avec tout le monde via Git.

## Ressources utiles

- Vite, options du serveur : <https://vite.dev/config/server-options>
- Vite, interface en ligne de commande : <https://vite.dev/guide/cli>
- Vite, guide : <https://vite.dev/guide>

## À retenir

- `npm create vite@latest` crée le projet, `npm install` installe les dépendances, `npm run dev` lance le serveur
- `vite.config.js` contrôle la façon dont l’application tourne et se construit
- Après une modification de `vite.config.js`, on relance le serveur
