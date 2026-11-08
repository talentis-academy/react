> **Exercice 7 · Énoncé**

# La maman et l’enfant

*Communication parent / enfant : props vers le bas, fonction pour remonter l’information.*

| | |
|---|---|
| **Moment** | Jour 2 · Module 04 · Fonctions passées en props |
| **Durée** | 30 minutes |
| **Niveau** | Débutant |
| **Prérequis** | useState, props, événements |

## Objectif pédagogique

Comprendre le passage de props du parent vers l’enfant, et la remontée d’informations de l’enfant vers le parent grâce à une fonction passée en props (state lifting).

> **Remarque :** L’interface n’est pas l’objectif principal : elle peut rester simple.

## Contexte

Une maman (composant parent) donne un ordre à son fils (composant enfant), par exemple « Go to your room ! ». Le fils peut accepter ou refuser. La maman voit la réponse.

## Étapes

1. Créer un nouveau projet React avec Vite
2. Créer un composant `Parent` avec deux states : le message de l’ordre et le statut de l’ordre (accepté, refusé ou en attente)
3. Ajouter dans `Parent` un bouton « Send Order » qui change le message (au départ « Hello from Parent », puis « Go to your room ! »)
4. Créer un composant `Child` qui reçoit son prénom en props et l’affiche
5. Passer à `Child` une fonction du parent qui met à jour le statut
6. Dans `Child`, ajouter deux boutons « Accepter » et « Deny » qui appellent cette fonction
7. Afficher le statut dans `Parent` : « Order Status: Pending », « Accepted » ou « Denied »

## Bonus (optionnel)

- Désactiver les boutons de l’enfant tant que la maman n’a pas envoyé d’ordre
- Afficher le message de l’ordre dans l’enfant

## Ressources utiles

- React, partager le state entre composants : <https://react.dev/learn/sharing-state-between-components>
- React, passer des gestionnaires d’événements en props : <https://react.dev/learn/responding-to-events#passing-event-handlers-as-props>

## Erreurs fréquentes à éviter

- Écrire `onClick={setOrderStatus("accepted")}` : la fonction s’exécute tout de suite. Il faut `onClick={() => setOrderStatus("accepted")}`
- Mettre le state dans l’enfant : c’est le parent qui doit le garder

## Résultat attendu

- [ ] La maman envoie un ordre avec un bouton
- [ ] L’enfant accepte ou refuse
- [ ] Le statut s’affiche côté maman

Bon courage !
