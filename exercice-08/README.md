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

## Point de départ

Le template : `Exercices/Exercice_08/template`. L’interface est déjà prête (HTML et CSS) : les champs Full name, Email, Experience, la case Conditions d’utilisation et le bouton Register. Vous codez seulement la validation, dans `src/components/Form.jsx`, en suivant les TODO.

```bash
cd template
npm install
npm install react-hook-form zod @hookform/resolvers
npm run dev
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
- Si tout est valide : afficher « Enregistrement OK »

## Bonus (optionnel)

- Bonus 1 : valider la case `terms` (elle doit être cochée)
- Bonus 2 : désactiver le bouton et afficher « Envoi… » pendant la soumission (`isSubmitting`)
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
- [ ] « Enregistrement OK » s’affiche quand tout est valide

Bon courage !
