# Démo 003-G · Formulaire

*Formation 003 · slides 28 à 31*

Le même écran de login (email et mot de passe) : on part d’un template (l’interface seule), puis on ajoute la logique étape par étape. Chaque dossier est un projet Vite complet (code du formateur). **Un seul fichier change d’une étape à l’autre : `src/components/Form.jsx`.**

| Étape | Dossier | Ce qui change dans `Form.jsx` |
|---|---|---|
| 1 | `etape-1-template` | Le point de départ : le design de l’écran de login (HTML + CSS), sans logique |
| 2 | `etape-2-usestate` | Un state par champ (`useState`), `onChange`, `e.preventDefault()` et un `console.log` |
| 3 | `etape-3-is-connected` | On ajoute le state `isConnected` : connecté → « Welcome to private page » |
| 4 | `etape-4-zod` | Validation avec **Zod** seul (`safeParse`), sans librairie de formulaire |
| 5 | `etape-5-react-hook-form` | Version finale : **React Hook Form + Zod + zodResolver** (`register`, `handleSubmit`, `errors`) |

## Les changements entre les étapes

Le template, puis ce qui est ajouté (en vert) et retiré (en rouge) d’une étape à l’autre : [CHANGEMENTS.md](CHANGEMENTS.md) (ou `CHANGEMENTS.pdf` à imprimer).

## Lancer une étape

```bash
cd etape-1-template   # ou etape-2-usestate, etape-3-is-connected, etape-4-zod, etape-5-react-hook-form
npm install
npm run dev
```

## Documentation

- React Hook Form : https://react-hook-form.com/get-started
- Zod : https://zod.dev
- zodResolver : https://github.com/react-hook-form/resolvers
