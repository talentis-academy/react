# Démo · Formulaire en 3 étapes

Le même écran de login, construit en 3 étapes. Chaque dossier est un projet Vite complet (code du formateur).

| Étape | Dossier | Ce qui change | Fichier |
|---|---|---|---|
| 1 | `etape-1-usestate` | Formulaire géré avec `useState` (un state par champ, `onChange`, `e.preventDefault()`) | `src/components/Form.tsx` |
| 2 | `etape-2-zod` | Validation avec **Zod** seul (`safeParse`), sans librairie de formulaire | `src/components/FormOnlyZod.tsx` |
| 3 | `etape-3-react-hook-form` | Version finale : **React Hook Form + Zod + zodResolver** (`register`, `handleSubmit`, `errors`) | `src/components/FormFinal.tsx` |

## Les changements entre les étapes

Ce qui est ajouté (en vert) et retiré (en rouge) d’une étape à l’autre, façon GitHub : [CHANGEMENTS.md](CHANGEMENTS.md) (ou `CHANGEMENTS.pdf` à imprimer).

## Lancer une étape

```bash
cd etape-1-usestate   # ou etape-2-zod, etape-3-react-hook-form
npm install
npm run dev
```

## Documentation

- React Hook Form : https://react-hook-form.com/get-started
- Zod : https://zod.dev
- zodResolver : https://github.com/react-hook-form/resolvers
