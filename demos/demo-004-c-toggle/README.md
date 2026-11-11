# Démo 004-C · Toggle ON / OFF

Slide 11. Un toggle ON / OFF, d'abord dans le composant, puis avec le custom hook `useToggle`. Chaque dossier est un projet Vite complet.

| Étape | Dossier | Ce qui change | Fichier |
|---|---|---|---|
| 1 | `etape-1-toggle-btn` | Un toggle ON / OFF avec un bouton (`useState` dans le composant) | `src/components/ToggleBtn.jsx` |
| 2 | `etape-2-toggle-checkbox` | On ajoute un toggle avec une checkbox : le même code est copié dans `ToggleCheckbox`. `App` affiche les deux | `src/components/ToggleCheckbox.jsx`, `src/App.jsx` |
| 3 | `etape-3-use-toggle` | On sort la logique dans le custom hook `useToggle`, utilisé par les deux composants : plus de code en double | `src/hooks/useToggle.js`, `src/components/ToggleBtn.jsx`, `src/components/ToggleCheckbox.jsx` |

Les changements : [CHANGEMENTS.md](CHANGEMENTS.md) (ou `CHANGEMENTS.pdf`).

```bash
cd etape-1-toggle-btn
npm install
npm run dev
```

Doc : https://react.dev/learn/reusing-logic-with-custom-hooks
