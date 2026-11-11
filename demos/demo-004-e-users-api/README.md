# Démo 004-E · Users API

Slide 13. La page Users : d'abord le fetch dans le composant, puis la même logique sortie dans le custom hook `useFetchApi`. Chaque dossier est un projet Vite complet.

| Étape | Dossier | Ce qui change | Fichier |
|---|---|---|---|
| 1 | `etape-1-users` | `fetch` dans un `useEffect` de `Users`, avec `isLoading` et `isError` | `src/components/Users.jsx` |
| 2 | `etape-2-use-fetch-api` | La logique sort dans le custom hook `useFetchApi(url)` ; `Users` ne garde que l'affichage | `src/hooks/useFetchApi.js`, `src/components/Users.jsx` |

L'étape 2 montre la solution de l'exercice 11 (le hook) : à ouvrir après l'exercice.

L'API : https://jsonplaceholder.typicode.com/users

Les changements : [CHANGEMENTS.md](CHANGEMENTS.md) (ou `CHANGEMENTS.pdf`).

```bash
cd etape-1-users
npm install
npm run dev
```

Doc : https://react.dev/learn/reusing-logic-with-custom-hooks
