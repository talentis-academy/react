> **Exercice 6 · Énoncé**

# Force du mot de passe

*Évaluer la force d’un mot de passe en temps réel avec onChange.*

| | |
|---|---|
| **Moment** | Jour 2 · Module 04 · Événements et state |
| **Durée** | 30 minutes |
| **Niveau** | Débutant |
| **Prérequis** | useState, onChange, affichage conditionnel |

## Objectifs de l’exercice

- Utiliser l’événement `onChange` pour la saisie en temps réel
- Stocker la valeur de l’input dans un state
- Faire de l’affichage conditionnel avec plusieurs conditions
- Bonus : utiliser une expression régulière

## Contexte

Créer un composant qui évalue la force d’un mot de passe pendant que l’utilisateur tape. Le retour doit être immédiat et visuel.

## Interface attendue

**`Maquette`**

```
┌────────────────────────────────────┐
│ Force du mot de passe               │
├────────────────────────────────────┤
│ Mot de passe : [_______________]    │
│                                     │
│ Force : [message dynamique]         │
└────────────────────────────────────┘
```

## Règles

| Longueur | Message | Couleur suggérée |
|---|---|---|
| 0 caractère | Saisissez un mot de passe | Gris |
| 1 à 5 caractères | Faible | Rouge |
| 6 à 9 caractères | Moyen | Orange |
| 10 caractères ou plus | Fort | Vert |

## Étapes

1. Créer un composant `PasswordStrength` avec un state `password`
2. Ajouter un `<input type="password">` relié au state avec `value` et `onChange`
3. Calculer le message à partir de `password.length`
4. Afficher le message avec la bonne couleur

## Bonus (optionnel)

- Afficher « Contient un chiffre : OK » si le mot de passe contient un chiffre : `/\d/.test(password)`
- Ajouter une barre de progression qui grandit avec la force

## Ressources utiles

- React, répondre aux événements : <https://react.dev/learn/responding-to-events>
- React, le state : <https://react.dev/learn/state-a-components-memory>
- React, l’élément input : <https://react.dev/reference/react-dom/components/input>
- MDN, RegExp.test : <https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test>

## Erreurs fréquentes à éviter

- Oublier `value={password}` : l’input n’est plus contrôlé
- Lire `e.value` au lieu de `e.target.value`
- Mettre les conditions dans le désordre (tester `>= 10` après `>= 6`)

## Résultat attendu

- [ ] Le message change à chaque caractère tapé
- [ ] Les 4 cas (vide, faible, moyen, fort) s’affichent avec la bonne couleur

Bon courage !
