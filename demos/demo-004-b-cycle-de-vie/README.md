# Démo · Cycle de vie et optimisations en 3 étapes

La liste de voitures, avec des logs dans la console pour suivre les renders, le montage et le démontage. Bouton « Unmount Home » pour voir le cleanup. Chaque dossier est un projet Vite complet (code du formateur) ; seul le composant affiché par `src/App.jsx` change.

| Étape | Dossier | Ce qui change | Fichier |
|---|---|---|---|
| 1 | `etape-1-cycle-logs` | Cycle de vie : `renderCount` avec `useRef`, logs dans `useEffect` (Mounted / Unmounted) | `src/components/Cars.tsx` |
| 2 | `etape-2-react-memo` | `React.memo` et le state `seeMore` pour observer les renders inutiles | `src/components/CarsMemo.tsx` |
| 3 | `etape-3-usecallback-usememo` | `useCallback` (onSelect) et `useMemo` (carStyle) pour stabiliser les props | `src/components/CarsUseMemo.tsx` |

## Les changements entre les étapes

Ce qui est ajouté (en vert) et retiré (en rouge) d’une étape à l’autre, façon GitHub : [CHANGEMENTS.md](CHANGEMENTS.md) (ou `CHANGEMENTS.pdf` à imprimer).

## Lancer une étape

```bash
cd etape-1-cycle-logs   # ou une autre étape
npm install
npm run dev
```

## Documentation

- useEffect : https://react.dev/reference/react/useEffect
- React.memo : https://react.dev/reference/react/memo
- useCallback : https://react.dev/reference/react/useCallback
- useMemo : https://react.dev/reference/react/useMemo

> Code du formateur, repris tel quel et commenté.
