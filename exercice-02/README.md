> **Exercice 2 · Énoncé**

# Créer votre premier projet avec Vite

*Créer, lancer et personnaliser un projet React avec Vite.*

| | |
|---|---|
| **Moment** | Jour 1 · Module 03 · Configuration d’un projet |
| **Durée** | 20 à 30 minutes |
| **Niveau** | Débutant |
| **Prérequis** | Exercice 1 terminé (Node.js, npm et VS Code installés) |

## Objectifs de l’exercice

- Créer un projet React avec la commande `npm create vite@latest`
- Installer les dépendances et lancer le serveur de développement
- Observer le hot reloading
- Lire la documentation Vite pour changer le port par défaut

## Contexte

Vous démarrez un nouveau projet dans votre équipe. Le port par défaut de Vite (`5173`) est déjà utilisé par une autre application sur votre machine : votre projet doit tourner sur le port **3000**.

## Étape 1 : Créer le projet

Dans un terminal, se placer dans le dossier de votre choix, puis lancer la commande (voir le guide officiel : <https://vite.dev/guide>) :

```bash
npm create vite@latest
```

Répondre à l’assistant :

| Question | Réponse |
|---|---|
| Project name | `mon-premier-projet` |
| Select a framework | `React` |
| Select a variant | `JavaScript` |

## Étape 2 : Installer et lancer

```bash
cd mon-premier-projet
npm install
npm run dev
```

Ouvrir l’adresse affichée dans le terminal. La page de démarrage Vite + React doit s’afficher.

## Étape 3 : Observer le hot reloading

Ouvrir `src/App.jsx`, changer le texte du titre, puis enregistrer. Le navigateur doit se mettre à jour immédiatement, sans recharger toute la page.

## Étape 4 : Changer le port

En vous aidant de la documentation Vite sur les options du serveur (<https://vite.dev/config/server-options>), modifier le fichier `vite.config.js` pour que le projet tourne sur le port **3000**.

Relancer `npm run dev` et vérifier que l’application est accessible sur `http://localhost:3000`.

## Bonus (optionnel)

- Faire échouer le lancement si le port 3000 est déjà pris, au lieu d’en choisir un autre automatiquement
- Ouvrir automatiquement le navigateur au lancement de `npm run dev`

## Conseils techniques

- La configuration du serveur de développement se trouve dans la clé `server` de `vite.config.js`
- Après une modification de `vite.config.js`, arrêter le serveur (`Ctrl + C`) puis le relancer

## Ressources utiles

- Vite, guide de démarrage : <https://vite.dev/guide>
- Vite, options du serveur (port, strictPort, open…) : <https://vite.dev/config/server-options>
- Vite, configuration (vite.config.js) : <https://vite.dev/config>
- Vite, pourquoi Vite : <https://vite.dev/guide/why>
- React, documentation officielle : <https://react.dev>

## Erreurs fréquentes à éviter

- Lancer `npm run dev` sans avoir fait `npm install` avant
- Lancer les commandes depuis le mauvais dossier (oublier le `cd`)
- Modifier `package.json` au lieu de `vite.config.js`
- Oublier de relancer le serveur après avoir changé la config

## Résultat attendu

- [ ] Le projet `mon-premier-projet` est créé
- [ ] La page Vite + React s’affiche dans le navigateur
- [ ] Une modification de `App.jsx` apparaît sans recharger la page
- [ ] L’application tourne sur `http://localhost:3000`

Bon courage !
