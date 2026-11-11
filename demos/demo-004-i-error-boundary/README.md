# Démo 004-I · Error Boundary (version class) en 3 étapes

Un Error Boundary en class component (`getDerivedStateFromError`, `componentDidCatch`) autour d’une page qui lance une erreur au clic sur « Throw error ». Code du formateur. La version react-error-boundary est la correction de l’exercice 12.

| Étape | Dossier | Ce qui change | Fichier |
|---|---|---|---|
| 1 | `etape-1-home` | La page Home, sans Error Boundary | `src/components/Home.jsx` |
| 2 | `etape-2-crash` | Le bouton « Throw error » lance une erreur pendant le render : toute la page devient blanche | `src/components/Home.jsx` |
| 3 | `etape-3-error-boundary` | On crée l’Error Boundary et on l’appelle autour de Home : l’écran de secours s’affiche | `src/components/ErrorBoundary.jsx`, `src/App.jsx` |

Les changements : [CHANGEMENTS.md](CHANGEMENTS.md) (ou `CHANGEMENTS.pdf`).

## Lancer la démo

```bash
cd etape-1-home   # ou une autre étape
npm install
npm run dev
```

## Documentation

- Error Boundaries : https://react.dev/reference/react/Component#catching-rendering-errors-with-an-error-boundary
- react-error-boundary : https://github.com/bvaughn/react-error-boundary

> Code du formateur, repris tel quel et commenté.
