# Démo · Custom hooks en 4 étapes

Toggle, statut réseau et appel API : du composant au custom hook. Chaque dossier est un projet Vite complet (code du formateur) ; seul le composant affiché par `src/App.jsx` change.

Note : `Layout.jsx` est la version complète de `Code_004` (celle du projet d’origine était incomplète : imports manquants).

| Étape | Dossier | Ce qui change | Fichier |
|---|---|---|---|
| 1 | `etape-1-toggle-btn` | Un toggle ON / OFF avec un bouton (`useState`) | `src/components/ToggleBtn.jsx` |
| 2 | `etape-2-toggle-checkbox` | Le même toggle avec une checkbox ; le hook `useToggle` | `src/components/ToggleCheckbox.jsx, src/hooks/useToogle.ts` |
| 3 | `etape-3-network-status` | Le hook `useNetworkStatus` : listeners `online` / `offline` dans `useEffect` | `src/components/Layout.jsx, src/hooks/usetNetworkStatus.ts` |
| 4 | `etape-4-users` | La page Users : fetch avec loading / error (point de départ de l’exercice 11) | `src/components/Users.jsx` |

## Lancer une étape

```bash
cd etape-1-toggle-btn   # ou une autre étape
npm install
npm run dev
```

## Documentation

- Hooks personnalisés : https://react.dev/learn/reusing-logic-with-custom-hooks
- Règles des hooks : https://fr.legacy.reactjs.org/docs/hooks-rules.html
- JSONPlaceholder : https://jsonplaceholder.typicode.com
