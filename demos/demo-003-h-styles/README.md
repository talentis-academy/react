# Démo 003-H · Styles en React

*Formation 003 · slides 33 à 39*

La même **Card Car** de la maquette Figma (Tesla Model S, Rouge, Available, $79,990, View Details), dans trois projets. La carte détail (« Back to list »), c’est l’exercice 9.

| Projet | Ce qu’on fait | Les fichiers |
|---|---|---|
| [`carte-css`](carte-css) | **En live**, maquette Figma ouverte : la carte en CSS (un fichier `.css`, et un exemple de style inline) | `src/components/Home.jsx`, `styles.css` |
| [`carte-tailwind`](carte-tailwind) | **Projet prêt, on fait le tour** : 1) les classes de base de Tailwind ; 2) nos couleurs dans `@theme` + une classe `@apply` | `CardUtilities.jsx`, `CardTheme.jsx`, `App.css` |
| [`carte-chakra`](carte-chakra) | **Projet prêt, on fait le tour** : 1) les props de style ; 2) les tokens du thème | `CardProps.jsx`, `CardToken.jsx`, `styles/theme.js` |

## Les guides (pour le tour de Tailwind et de Chakra)

- [`GUIDE-tailwind.md`](GUIDE-tailwind.md) (ou `GUIDE-tailwind.pdf`) : installer, le principe, personnaliser (`@theme`, `@apply`).
- [`GUIDE-chakra.md`](GUIDE-chakra.md) (ou `GUIDE-chakra.pdf`) : installer, le Provider, les props de style, les tokens.

Le code de la Card Car (codée en live) : [`CHANGEMENTS.md`](CHANGEMENTS.md) (ou `CHANGEMENTS.pdf`). Tailwind et Chakra : les deux guides.

## Lancer un projet

```bash
cd carte-css   # ou carte-tailwind, carte-chakra
npm install
npm run dev
```
