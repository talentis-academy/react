# Car Catalog

Catalogue de voitures (formation React, jour 5).
Stack : React 19, Vite 7, React Router v7 (data router + loaders), React Query 5, Redux Toolkit, axios, Vitest, Playwright.
API : https://myfakeapi.com, appelée via le proxy Vite `/api/` (voir `vite.config.js`).

## Commandes

- `npm run dev` : lancer l'application
- `npm test` : tests unitaires (Vitest, fichiers `src/**/*.test.js`)
- `npm run build` : build de production
- `npm run test:e2e` : tests end-to-end (Playwright, dossier `tests/e2e`)

## Architecture (détails dans ARCHITECTURE.md)

- `app/` : router, providers, store, RootLayout
- `lib/` : axios, queryClient, config
- `components/` : UI partagée en atomic design (`atoms`, `molecules`, `organisms`, `templates`)
- `features/<feature>/` : le code métier (`api/`, `hooks/`, `adapters/`, `utils/`, `screens/`)
- Un écran = `features/<feature>/screens/<X>/`
  - `X.view.jsx` : conteneur, appelle les hooks, gère loading / error / vide
  - `X.adapter.js` : fonction pure, données de l'API -> modèle affiché
  - `X.scene.jsx` : présentation, uniquement des props
  - `X.adapter.test.js` : tests de l'adapter
  - `index.js` : réexporte l'écran

## Règles

- Toujours écrire les tests de l'adapter, puis lancer `npm test` et `npm run build`.
- Jamais d'appel API, de hook React Query ou de Redux dans une Scene ou dans `components/`.
- `components/` n'importe jamais `features/`.
- Imports avec l'alias `@` (vers `src/`) et via les `index.js`.
- Réutiliser les composants et les classes CSS existants (`src/styles.css`) avant d'en créer.
- Les clés React Query sont dans `features/<feature>/hooks/queryKeys.js`.
- Les favoris dans Redux restent les objets bruts de l'API.
- JavaScript (pas de TypeScript), composants en fonctions, textes de l'UI en anglais.
- Ne pas modifier `tests/e2e` sans le demander.
