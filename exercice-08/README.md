> **Exercice 8 · Énoncé**

# Formulaire d’enregistrement

*Un formulaire validé avec React Hook Form et Zod.*

| | |
|---|---|
| **Moment** | Jour 2 · Module 05 · Formulaires |
| **Durée** | 45 minutes |
| **Niveau** | Intermédiaire |
| **Prérequis** | Formulaires en React, React Hook Form, Zod, zodResolver |

## Objectif

Créer un formulaire d’enregistrement utilisateur avec une validation robuste, en utilisant React Hook Form et Zod.

## Installation

```bash
npm install react-hook-form zod @hookform/resolvers
```

## Champs à implémenter

| Champ | Type | Règles de validation |
|---|---|---|
| `fullName` | text | Minimum 3 caractères, maximum 50, lettres uniquement |
| `email` | email | Format email valide |
| `experience` | number | Entre 0 et 10, nombre entier uniquement |
| `terms` (bonus) | checkbox | Doit être cochée pour soumettre |

## Fonctionnalités attendues

### Validation avec Zod

- Créer un schéma de validation centralisé
- Définir un message d’erreur personnalisé pour chaque règle
- Brancher le schéma avec `zodResolver`

### Gestion des erreurs

- Afficher un message d’erreur sous chaque champ invalide
- Validation au submit (`mode: "onSubmit"`)
- Des messages précis, pas de message générique

### Soumission

- Bloquer l’envoi si le formulaire est invalide
- Si tout est valide : afficher « Enregistrement réussi ! »
- Désactiver le bouton pendant la soumission

## Bonus (optionnel)

- Bonus 1 : ajouter le champ `terms` (case à cocher obligatoire)
- Bonus 2 : afficher « Envoi… » sur le bouton pendant la soumission
- Bonus 3 : réinitialiser le formulaire après une soumission réussie

## Conseils techniques

- Pour un champ nombre : `register("experience", { valueAsNumber: true })`
- Pour « lettres uniquement » : `.regex(/^[A-Za-zÀ-ÿ\s-]+$/, "message")`
- `formState` donne `errors`, `isSubmitting` et `isSubmitSuccessful`

## Ressources utiles

- React Hook Form, démarrage : <https://react-hook-form.com/get-started>
- React Hook Form, useForm : <https://react-hook-form.com/docs/useform>
- Zod, documentation : <https://zod.dev>
- Resolvers (zodResolver) : <https://github.com/react-hook-form/resolvers>

## Erreurs fréquentes à éviter

- Oublier `valueAsNumber` : le champ `experience` arrive en texte et Zod le refuse
- Oublier `zodResolver` : les règles Zod ne sont pas appliquées
- Afficher `errors.email` au lieu de `errors.email.message`

## Résultat attendu

- [ ] Chaque champ invalide affiche son propre message
- [ ] Le formulaire ne s’envoie pas tant qu’il est invalide
- [ ] « Enregistrement réussi ! » s’affiche quand tout est valide

Bon courage !
