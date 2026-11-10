# Démo 003-E · Événements (slides 19 à 22)

Un titre, et on réagit aux actions de l’utilisateur. Chaque étape est un projet Vite complet.

| Étape | Dossier | Ce qui change |
|---|---|---|
| 1 | `etape-1-oncopy` | `onCopy` + `alert` (camelCase) |
| 2 | `etape-2-event-target` | `onMouseEnter` / `onMouseLeave` : `event.target.style.color = "red"` (ça marche, mais ce n’est pas la bonne façon) |
| 3 | `etape-3-state` | Un state `isHover` : React gère la couleur (+ `transition`) |
| 4 | `etape-4-classname` | Template string avec interpolation pour choisir la classe : `title--hover` ou `title--normal` (fichier `Title.css`) |
| 5 | `etape-5-onchange` | `onChange` : on tape un nom → « Bonjour, Samir » ; champ vide → « Bonjour, invité ». Le CSS du champ est déjà dans `App.css` depuis l’étape 1 |

Lancer une étape : `cd etape-1-oncopy && npm install && npm run dev`.
Ce qui change d’une étape à l’autre : `CHANGEMENTS.pdf`.
