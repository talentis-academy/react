# Démo · React Router v7 en 6 étapes

Les étapes de `Code_005` (sections React router, Not Found, Details, Nested routes, Errors Boundary, Lazyloading), sur le projet du cours (`route-simple.zip`, code du formateur). Chaque dossier est un projet Vite complet : les pages (`src/pages/`) ne changent pas, seule la configuration des routes de `src/App.jsx` évolue.

| Étape | Dossier | Ce qui change | Fichier |
|---|---|---|---|
| 1 | `etape-1-routes-simples` | `createBrowserRouter` + `RouterProvider` : `/` (Home) et `/favoris` | `src/App.jsx` |
| 2 | `etape-2-not-found` | La route `*` : une page NotFound personnalisée, avec un `Link` vers l’accueil | `src/App.jsx` |
| 3 | `etape-3-route-dynamique` | La route dynamique `/details/:id` : `useParams`, `useSearchParams` (`?tab=home`), `useNavigate` depuis Home | `src/App.jsx` |
| 4 | `etape-4-routes-imbriquees` | Routes imbriquées : `Layout` (header, footer) + `<Outlet />`, `index: true` | `src/App.jsx` |
| 5 | `etape-5-error-element` | `errorElement: <ErrorPage />` : le bouton « Crash APP » de Home affiche la page d’erreur | `src/App.jsx` |
| 6 | `etape-6-lazy-loading` | Favoris en `lazy` : après `npm run build`, un fichier `Favoris-xxxx.js` séparé dans `dist/assets` | `src/App.jsx` |

## Les changements entre les étapes

Ce qui est ajouté (en vert) et retiré (en rouge) d’une étape à l’autre, façon GitHub : [CHANGEMENTS.md](CHANGEMENTS.md) (ou `CHANGEMENTS.pdf` à imprimer).

## Lancer une étape

```bash
cd etape-1-routes-simples   # ou une autre étape
npm install
npm run dev
```

## Documentation

- React Router (Data Router) : https://reactrouter.com/start/data/installation
- Routing (children, index, Outlet) : https://reactrouter.com/start/data/routing
- Data loading (loaders) : https://reactrouter.com/start/data/data-loading
