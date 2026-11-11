# Démo 004-B · Règles des hooks

Les exemples interdits, un par règle (slide 10). Le code : `src/components/BadExample.jsx`.

- Hook dans un `if`
- Hook dans une boucle
- Hook dans une fonction JS classique
- Hook dans une fonction imbriquée (handler)

## 1. ESLint montre les erreurs

```bash
npm install
npm run lint   # ESLint montre chaque hook mal placé
```

## 2. Husky bloque le commit

Husky lance une commande avant chaque `git commit` (fichier `.husky/pre-commit`) : ici `npm run lint`. S'il y a une erreur ESLint, le commit est refusé. Tout se passe en local.

Déjà fait dans ce projet :

```bash
npm install -D husky
npx husky init   # crée .husky/pre-commit et ajoute "prepare": "husky" dans package.json
```

Et dans `.husky/pre-commit`, on remplace `npm test` par `npm run lint`.

Si le fichier n'est pas exécutable (`permission denied`), on ajoute la permission :

```bash
chmod +x .husky/pre-commit
```

Pour le montrer :

```bash
git init
npm install          # le script prepare active Husky dans ce dépôt git
git add .
git commit -m "test" # ESLint tourne → erreurs → commit bloqué (husky - pre-commit script failed)
```

On corrige un hook dans `BadExample.jsx`, on relance le commit : tant qu'il reste une erreur, il est bloqué.

## Documentation

- Les règles des hooks : https://react.dev/reference/rules/rules-of-hooks
- Husky : https://typicode.github.io/husky/get-started.html
