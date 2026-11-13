> **Exercice 4 · Énoncé**

# Annuaire d’équipe

*Afficher une liste de membres avec props, map() et affichage conditionnel.*

| | |
|---|---|
| **Moment** | Jour 2 · Module 04 · Props, state et rendu dynamique |
| **Durée** | 45 minutes |
| **Niveau** | Débutant |
| **Prérequis** | Props, map() et key, opérateurs ? : et && |

## Objectifs de l’exercice

Créer une application React affichant un annuaire d’équipe pour pratiquer :

- Le passage de props entre composants
- L’utilisation de `map()` pour les listes
- L’affichage conditionnel (opérateurs `? :` et `&&`)
- La gestion des clés (`key`) dans les listes React

## Contexte

Votre entreprise a besoin d’un annuaire digital pour afficher les membres de l’équipe. Certains travaillent à distance, d’autres n’ont pas d’email professionnel. L’application doit gérer ces cas particuliers.

## Point de départ

> **Remarque :** Le CSS est déjà prêt dans le template (`Exercices/Exercice_04/template`, fichier `src/index.css`) : vous codez seulement les composants, en suivant les TODO.

```bash
cd template
npm install
npm run dev
```

## Structure (déjà créée dans le template)

**`Arborescence`**

```
src/
├── components/
│   ├── MemberCard.jsx   # carte d’un membre
│   └── TeamList.jsx     # liste de l’équipe
└── Home.jsx             # page principale avec les données
```

## Étape 1 : Les données (dans Home.jsx)

Créer un tableau `members` avec 4 à 6 membres :

| Propriété | Type | Obligatoire | Description |
|---|---|---|---|
| `id` | number | Oui | Identifiant unique |
| `fullName` | string | Oui | Nom complet |
| `role` | string | Oui | Poste occupé |
| `email` | string | Non | Email (peut être absent) |
| `remote` | boolean | Oui | Travaille à distance |

Cas à inclure obligatoirement :

- Au moins 1 membre sans email
- Au moins 1 membre avec `remote: true`
- Au moins 1 membre avec `remote: false`
- Au moins 1 membre avec un email renseigné

**`Exemple de membre`**

```
{
  id: 1,
  fullName: "Alice Martin",
  role: "Lead Developer",
  email: "alice@company.com",
  remote: true
}
```

## Étape 2 : Le composant MemberCard

Props à recevoir : `fullName`, `role`, `email` (string ou undefined), `remote` (boolean).

| Condition | Affichage |
|---|---|
| Toujours | Nom et rôle |
| Si `email` existe | `Email : [email]` |
| Si `email` n’existe pas | `Email : N/A` |
| Si `remote === true` | Badge « Remote » visible |
| Si `remote === false` | Pas de badge |

## Étape 3 : Le composant TeamList

- Props : `title` (string) et `members` (array)
- Afficher le `title` en titre
- Utiliser `map()` pour afficher une `MemberCard` par membre
- Important : chaque `MemberCard` a `key={member.id}`

## Bonus (optionnel)

- Liste vide : si `members.length === 0`, afficher « No members »
- Prop `showEmail` (boolean, `true` par défaut) : si `false`, ne pas afficher la ligne email

## Conseils techniques

**`Exemples`**

```
// Ternaire
{email ? email : "N/A"}

// &&
{remote && <span>Remote</span>}

// map avec key
members.map((member) => (
  <MemberCard key={member.id} {...member} />
))
```

## Ressources utiles

- React, afficher des listes : <https://react.dev/learn/rendering-lists>
- React, rendu conditionnel : <https://react.dev/learn/conditional-rendering>
- React, passer des props : <https://react.dev/learn/passing-props-to-a-component>

## Erreurs fréquentes à éviter

- Oublier la `key` dans le `map()`
- Ne pas gérer le cas `email` undefined
- Afficher « Remote: false » au lieu de rien
- Mettre les données dans les composants enfants au lieu de `Home`

## Résultat attendu

- [ ] La liste des membres s’affiche
- [ ] « N/A » s’affiche quand l’email manque
- [ ] Le badge « Remote » n’apparaît que pour les membres à distance
- [ ] Aucun avertissement de `key` dans la console

Bon courage !
