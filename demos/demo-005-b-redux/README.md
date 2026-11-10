# Démo · Redux puis Redux Toolkit en 7 étapes

La boutique (téléphones, TV, caméras) construite pas à pas. Chaque dossier est un projet du formateur (`Formation/Redux/`), tel quel.

| Étape | Dossier | Ce qui change | Fichiers |
|---|---|---|---|
| 1 | `etape-1-basic` | `createStore` et un seul reducer : `BUY_PHONE`, `BUY_TV`, `BUY_CAMERA` ; `getState`, `dispatch`, `subscribe` | `src/store/index.js` |
| 2 | `etape-2-multi-reducers` | Un reducer par produit, combinés avec `combineReducers` | `src/store/index.js` |
| 3 | `etape-3-provider` | Dossier `store/` (actions, reducers, store), `<Provider>`, `useSelector`, `useDispatch` | `src/store/`, `src/App.jsx` |
| 4 | `etape-4-payload` | Action avec payload : choisir la quantité de téléphones | `src/store/actions.ts`, `src/pages/Home.tsx` |
| 5 | `etape-5-middleware` | Middleware : `redux-thunk` + `axios` pour charger les commentaires (loading / success / error) | `src/store/comments/`, `src/store/store.ts` |
| 6 | `etape-6-template` | Redux Toolkit : `configureStore`, un premier `createSlice` (phone) | `src/store/phoneSlice.ts`, `src/store/store.ts` |
| 7 | `etape-7-redux-toolkit` | Les 3 slices (phone, tv, camera), `extraReducers` (promo TV), RTK Query (`createApi`) | `src/store/`, `src/apis/index.ts` |

## Les changements entre les étapes

Ce qui est ajouté (en vert) et retiré (en rouge) d’une étape à l’autre, façon GitHub : [CHANGEMENTS.md](CHANGEMENTS.md) (ou `CHANGEMENTS.pdf` à imprimer).

## Lancer une étape

```bash
cd etape-1-basic   # ou une autre étape
npm install
npm run dev
```

Installer l’extension Redux DevTools pour suivre les actions : https://github.com/reduxjs/redux-devtools/tree/main/extension#installation

## Documentation

- Redux : https://redux.js.org/
- React Redux (Provider, hooks) : https://react-redux.js.org/
- Redux Toolkit : https://redux.js.org/toolkit/introduction/getting-started
- RTK Query : https://redux.js.org/toolkit/rtk-query/overview

> Code du formateur, repris tel quel et commenté.
