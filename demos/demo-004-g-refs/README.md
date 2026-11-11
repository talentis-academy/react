# Démo 004-G · Refs en 2 étapes

La page Search : mettre le focus dans un input. Chaque dossier est un projet Vite complet (code du formateur) ; un seul composant, `src/components/Search.jsx`, qui change d’une étape à l’autre.

| Étape | Dossier | Ce qui change | Fichier |
|---|---|---|---|
| 1 | `etape-1-useref` | `useRef` : bouton « Focus input » | `src/components/Search.jsx` |
| 2 | `etape-2-useimperativehandle` | L’input devient un composant `SearchInput` (React 19 : `ref` est une prop) et `useImperativeHandle` : le parent n’a accès qu’à `focus` et `clear` | `src/components/Search.jsx` |

**Bonus (legacy, pas dans le CHANGEMENTS)** : `forwardref-legacy`, la même ref passée à un composant avec `forwardRef`, la façon d’avant React 19.

## Les changements entre les étapes

Ce qui est ajouté (en vert) et retiré (en rouge) d’une étape à l’autre, façon GitHub : [CHANGEMENTS.md](CHANGEMENTS.md) (ou `CHANGEMENTS.pdf` à imprimer).

## Lancer une étape

```bash
cd etape-1-useref   # ou une autre étape
npm install
npm run dev
```

## Documentation

- useRef : https://react.dev/reference/react/useRef
- forwardRef : https://react.dev/reference/react/forwardRef
- useImperativeHandle : https://react.dev/reference/react/useImperativeHandle
- React 19 : ref en prop : https://react.dev/blog/2024/12/05/react-19

> Code du formateur, repris tel quel et commenté.
