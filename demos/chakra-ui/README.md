# Démo · Chakra UI en 3 étapes

La même carte, stylée de 3 façons avec Chakra UI v3. Chaque dossier est un projet Vite complet (code du formateur) ; seule la ligne d’import de `src/App.jsx` change.

| Étape | Dossier | Ce qui change | Fichier |
|---|---|---|---|
| 1 | `etape-1-card` | Une carte avec les composants Chakra (`Card`, `Badge`, `Button`) | `src/components/Card.tsx` |
| 2 | `etape-2-props` | Personnaliser avec les props (`bg`, `color`, `p`, `mt`…) | `src/components/CardCustom.tsx` |
| 3 | `etape-3-theme` | Centraliser le style dans le thème (tokens) avec `createSystem` | `src/components/CardToken.tsx, src/styles/theme.ts` |

## Lancer une étape

```bash
cd etape-1-card   # ou une autre étape
npm install
npm run dev
```

## Documentation

- Installation : https://chakra-ui.com/docs/get-started/installation
- Thème et tokens : https://chakra-ui.com/docs/theming/overview
