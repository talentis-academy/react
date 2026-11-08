> **Exercice 1 · Énoncé**

# Préparer l’environnement de travail

*Installer et vérifier les outils nécessaires pour développer en React.*

| | |
|---|---|
| **Moment** | Jour 1 · Module 02 · Environnement de travail |
| **Durée** | 15 à 20 minutes |
| **Niveau** | Débutant |
| **Prérequis** | Un ordinateur avec un accès Internet et les droits d’installation |

## Objectifs de l’exercice

À la fin de l’exercice, votre machine est prête pour toute la formation :

- Node.js (version LTS) et npm sont installés et fonctionnent
- VS Code est installé avec l’extension Prettier
- Le code se formate automatiquement à l’enregistrement

## Contexte

Avant d’écrire la moindre ligne de React, chaque développeur de l’équipe doit avoir le même environnement de travail. Node.js fait tourner tous les outils (npm, Vite, Babel, ESLint, Prettier), et VS Code + Prettier garantissent un code propre et homogène.

## Étape 1 : Installer Node.js

1. Aller sur la page de téléchargement de Node.js : [https://nodejs.org/fr/download](https://nodejs.org/fr/download)
2. Télécharger la version **LTS** (Long Term Support), pas la version « Current »
3. Lancer l’installeur et garder les options par défaut (npm est installé avec Node.js)

> **Astuce :** La version LTS est la plus stable : c’est celle qu’on utilise en entreprise.

## Étape 2 : Vérifier l’installation

Ouvrir un **nouveau** terminal, puis taper :

```bash
node --version
npm --version
```

Chaque commande doit afficher un numéro de version (par exemple `v22.x.x` pour Node.js et `10.x.x` pour npm).

## Étape 3 : Installer VS Code et Prettier

1. Télécharger et installer Visual Studio Code : [https://code.visualstudio.com](https://code.visualstudio.com)
2. Ouvrir l’onglet **Extensions** (icône des carrés à gauche)
3. Rechercher **Prettier - Code formatter** et cliquer sur **Install** (page de l’extension : [Prettier sur le Marketplace](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode))

## Étape 4 : Activer le formatage automatique

Dans VS Code, ouvrir les paramètres (`Cmd + ,` sur Mac, `Ctrl + ,` sur Windows), puis :

1. Rechercher **Format On Save** et cocher la case
2. Rechercher **Default Formatter** et choisir **Prettier - Code formatter**

Test : créer un fichier `test.js`, écrire du code mal indenté, enregistrer. Le code doit se remettre en forme tout seul.

## Bonus (optionnel)

- Installer l’extension [ES7+ React/Redux/React-Native snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets) pour gagner du temps
- Installer l’extension [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- Installer [React Developer Tools](https://chromewebstore.google.com/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi) dans Chrome (vu au début de la formation)

## Ressources utiles

- Node.js, téléchargement : [https://nodejs.org/fr/download](https://nodejs.org/fr/download)
- npm, documentation : [https://docs.npmjs.com](https://docs.npmjs.com)
- Visual Studio Code : [https://code.visualstudio.com](https://code.visualstudio.com)
- Prettier, documentation : [https://prettier.io/docs](https://prettier.io/docs)
- Prettier pour VS Code : [https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

## Erreurs fréquentes à éviter

| Problème | Cause probable | Solution |
|---|---|---|
| `node: command not found` | Le terminal était ouvert avant l’installation | Fermer et rouvrir le terminal |
| Le code ne se formate pas | Prettier n’est pas le formateur par défaut | Refaire l’étape 4 |
| Version très ancienne de Node | Ancienne installation sur la machine | Installer la dernière LTS |

## Résultat attendu · Je vérifie

- [ ] `node --version` affiche une version LTS
- [ ] `npm --version` affiche une version
- [ ] VS Code est installé avec l’extension Prettier
- [ ] Le fichier se formate à l’enregistrement

> **Remarque :** Pas de correction pour cet exercice : si toutes les cases sont cochées, votre environnement est prêt.

Bon courage !
