> **Exercice 6 · Énoncé**

# Force du mot de passe

*Évaluer la force d’un mot de passe en temps réel avec onChange et des expressions régulières.*

| | |
|---|---|
| **Moment** | Jour 2 · Module 04 · Événements et state |
| **Durée** | 30 minutes |
| **Niveau** | Intermédiaire |
| **Prérequis** | useState, onChange, affichage conditionnel |

## Objectifs de l’exercice

- Utiliser l’événement `onChange` pour la saisie en temps réel
- Stocker la valeur de l’input dans un state
- Tester le contenu d’un texte avec une expression régulière : `.test()` renvoie true ou false
- Afficher un message et une couleur selon le résultat

## Contexte

Créer un composant qui évalue la force d’un mot de passe pendant que l’utilisateur tape. Le retour doit être immédiat et visuel.

## Point de départ

> **Remarque :** L’interface et le CSS sont déjà prêts dans le template (`Exercices/Exercice_06/template`, composant `src/PasswordStrength.jsx`) : vous codez seulement la logique, en suivant les TODO.

```bash
cd template
npm install
npm run dev
```

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

## Les 3 règles

Le mot de passe doit contenir :

| Règle | Expression régulière |
|---|---|
| Une majuscule | `/[A-Z]/` |
| Un chiffre | `/[0-9]/` |
| Un caractère spécial (ni lettre, ni chiffre) | `/[^A-Za-z0-9]/` |

Exemple : `/[0-9]/.test("abc1")` renvoie `true`. Dans `[^...]`, le `^` veut dire « tout sauf ».

## Le message à afficher

| Cas | Message | Couleur suggérée |
|---|---|---|
| Champ vide | Saisissez un mot de passe | Gris |
| 0 ou 1 règle respectée | Faible | Rouge |
| 2 règles respectées | Moyen | Orange |
| Les 3 règles respectées | Fort | Vert |

Exemples : `abc1` → Faible ; `Abc1` → Moyen ; `Abc1!` → Fort.

## Étapes

1. Créer un composant `PasswordStrength` avec un state `password`
2. Ajouter un `<input type="password">` relié au state avec `value` et `onChange`
3. Compter les règles respectées dans une variable `score` (+1 par règle)
4. Afficher le message avec la bonne couleur selon le `score`

## Bonus (optionnel)

- Ajouter une barre de progression qui grandit avec la force (vide, 1/3, 2/3, pleine)

## Ressources utiles

- React, répondre aux événements : <https://react.dev/learn/responding-to-events>
- React, le state : <https://react.dev/learn/state-a-components-memory>
- React, l’élément input : <https://react.dev/reference/react-dom/components/input>
- MDN, RegExp.test : <https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test>

## Erreurs fréquentes à éviter

- Oublier `value={password}` : l’input n’est plus contrôlé
- Lire `e.value` au lieu de `e.target.value`
- Utiliser `const` pour le score : il faut `let`, car on le modifie avec `score++`
- Oublier le cas du champ vide (il doit être testé en premier)

## Résultat attendu

- [ ] Le message change à chaque caractère tapé
- [ ] Les 4 cas (vide, faible, moyen, fort) s’affichent avec la bonne couleur
- [ ] `Abc1!` affiche « Fort » en vert

Bon courage !
