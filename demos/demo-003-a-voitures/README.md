# Démo · Projet Voitures

*Formation 003 · jour 2*

Le projet Voitures, en étapes, dans l’ordre du cours. Au début : pas de boucle, pas de JSON, pas de state, seulement des composants et des props.

| Étape | Slide | Ce qu’on fait |
|---|---|---|
| `etape-1-home` | 03 | Un seul composant `Home`, les 3 voitures écrites en dur |
| `etape-2-carcard` | 03 | Le composant `CarCard`, sans props : les 3 cartes affichent la même voiture. C’est l’introduction des props |
| `etape-3-props` | 04 | Les props passées directement (`brand`, `color`) : chaque carte affiche sa voiture |
| `etape-4-children` | 04 | La 2e approche : passer le contenu via `children` |
| `etape-5-liste` | plus tard dans la journée | La version complète du formateur : `CarBrand` / `CarColor` (exercice 3), `.map()` et `key`, `onCopy` |

```bash
cd etape-1-home
npm install
npm run dev
```

Ce qui change d’une étape à l’autre : `CHANGEMENTS.pdf`. L’exercice 3 part de l’étape 3.

> Étape 5 : code du formateur, repris tel quel et commenté. Étapes 1 à 4 : déduites de son code, dans l’ordre du programme.
