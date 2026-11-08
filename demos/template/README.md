# Démo · Templating

En entreprise, on part souvent d’un **template** (maquette HTML / CSS déjà intégrée) qu’on découpe ensuite en composants React. Deux templates du formateur, en HTML + CSS pur (aucune installation) :

| Template | Pages | Fichiers |
|---|---|---|
| `simple-airbnb-clone` | Accueil, détails, confirmation, succès, erreur | `index.html`, `details.html`, `confirmation.html`, `success.html`, `error.html`, `styles.css` |
| `toto-app` | Une Todo App | `todo.html`, `todo-styles.css` |

## Ouvrir

Ouvrir directement `simple-airbnb-clone/index.html` ou `toto-app/todo.html` dans le navigateur.

## L’idée

1. Repérer les blocs qui se répètent (carte d’hébergement, ligne de todo…) : ce seront les composants.
2. Reprendre le HTML dans le JSX (`class` devient `className`) et importer le fichier CSS.
3. Remplacer les données en dur par des props et des listes (`map`).
