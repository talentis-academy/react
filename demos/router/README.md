# Démo · React Router v7 en 2 étapes

Le projet du cours (code du formateur, `route-simple.zip`). Il contient deux configurations de routes : `routerSimple` et `routerNested`. Chaque dossier est un projet Vite complet ; seule la ligne `RouterProvider` de `src/App.jsx` change.

| Étape | Dossier | Ce qu’on voit | Fichier |
|---|---|---|---|
| 1 | `etape-1-routes` | `createBrowserRouter` + `RouterProvider` : `/`, `/details/:id` (`useParams`, `useSearchParams`), `/favoris`, `*` (NotFound avec `Link`), `/car/:id` avec un loader, `/login` | `src/App.jsx` (`routerSimple`), `src/pages/` |
| 2 | `etape-2-routes-imbriquees` | Routes imbriquées : `Layout` (header, footer) + `<Outlet />`, `index: true`, `errorElement: <ErrorPage />` (bouton « Crash APP » sur Home) | `src/App.jsx` (`routerNested`), `src/pages/Layout.jsx`, `src/pages/ErrorPage.jsx` |

Lazy loading : l’exemple `lazy: async () => import("./pages/Favoris")` est en commentaire à la fin de `src/App.jsx`. Après `npm run build`, la page lazy a son propre fichier dans `dist/assets`.

## Les changements entre les étapes

Ce qui est ajouté (en vert) et retiré (en rouge) d’une étape à l’autre, façon GitHub : [CHANGEMENTS.md](CHANGEMENTS.md) (ou `CHANGEMENTS.pdf` à imprimer).

## Lancer une étape

```bash
cd etape-1-routes   # ou etape-2-routes-imbriquees
npm install
npm run dev
```

## Documentation

- React Router (Data Router) : https://reactrouter.com/start/data/installation
- Routing (children, index, Outlet) : https://reactrouter.com/start/data/routing
- Data loading (loaders) : https://reactrouter.com/start/data/data-loading
