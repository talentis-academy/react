# Démo · Refs en 3 étapes

La page Search : mettre le focus dans un input. Chaque dossier est un projet Vite complet (code du formateur) ; seul le composant affiché par `src/App.jsx` change.

| Étape | Dossier | Ce qui change | Fichier |
|---|---|---|---|
| 1 | `etape-1-useref` | `useRef` : bouton « Focus input » | `src/components/SearchRef.jsx` |
| 2 | `etape-2-forwardref` | L’input devient un composant `SearchInput` qui reçoit la ref (React 19 : `ref` est une prop) | `src/components/SearchForwardRef.jsx` |
| 3 | `etape-3-useimperativehandle` | `useImperativeHandle` : le parent n’a accès qu’à `focus` et `clear` | `src/components/SearchUseImperativeHandle.jsx` |

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
