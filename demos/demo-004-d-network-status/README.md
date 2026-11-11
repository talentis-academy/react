# Démo 004-D · Network status

Slide 12. Savoir si on est en ligne ou hors ligne : d'abord dans le composant, puis avec le custom hook `useNetworkStatus`. Chaque dossier est un projet Vite complet.

| Étape | Dossier | Ce qui change | Fichier |
|---|---|---|---|
| 1 | `etape-1-listeners` | Les listeners `online` / `offline` dans un `useEffect` de `Layout`, avec leur nettoyage dans le `return` | `src/components/Layout.jsx` |
| 2 | `etape-2-use-network-status` | La même logique sort dans le custom hook `useNetworkStatus` ; `Layout` ne garde que l'affichage | `src/hooks/useNetworkStatus.js`, `src/components/Layout.jsx` |

Pour tester : DevTools › onglet Network › Offline.

Les changements : [CHANGEMENTS.md](CHANGEMENTS.md) (ou `CHANGEMENTS.pdf`).

```bash
cd etape-1-listeners
npm install
npm run dev
```

Doc : https://developer.mozilla.org/fr/docs/Web/API/Window/online_event
