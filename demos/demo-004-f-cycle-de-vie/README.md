# Démo 004-F · Cycle de vie et optimisations en 4 étapes

La liste de voitures, avec des logs dans la console pour suivre les renders, le montage et le démontage. Bouton « Unmount Home » pour voir le cleanup. Chaque dossier est un projet Vite complet (code du formateur) ; un seul composant, `src/components/Cars.jsx`, qui change d’une étape à l’autre.

| Étape | Dossier | Ce qui change | Fichier |
|---|---|---|---|
| 1 | `etape-1-cycle-logs` | Cycle de vie : `renderCount` avec `useRef`, logs dans `useEffect` (Mounted / Unmounted) | `src/components/Cars.jsx` |
| 2 | `etape-2-react-memo` | `React.memo` et le state `seeMore` pour observer les renders inutiles | `src/components/Cars.jsx` |
| 3 | `etape-3-props-recreees` | On passe `style` et `onSelect` à Car, recréés à chaque render : BMW re-render de nouveau, React.memo ne suffit plus | `src/components/Cars.jsx` |
| 4 | `etape-4-usecallback-usememo` | `useCallback` (onSelect) et `useMemo` (carStyle) stabilisent les props : BMW ne re-render plus | `src/components/Cars.jsx` |

## Bonus : le React Compiler

Le dossier `react-compiler` : l’étape 4 sans `React.memo`, `useMemo` ni `useCallback`, avec le React Compiler. Les changements : [CHANGEMENTS-react-compiler.md](CHANGEMENTS-react-compiler.md) (ou `CHANGEMENTS-react-compiler.pdf`).

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
