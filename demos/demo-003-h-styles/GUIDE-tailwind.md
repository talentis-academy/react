# Démo 003-H · Tailwind CSS : pour démarrer

Le projet prêt : `carte-tailwind` (la Card Car de la maquette Figma, faite de deux façons). On ne code pas Tailwind en live : on fait le tour du projet avec ce guide.

## 1. Installer Tailwind dans un projet Vite

```bash
npm create vite@latest mon-projet   # React + JavaScript
cd mon-projet
npm install tailwindcss @tailwindcss/vite
```

Dans `vite.config.js`, on ajoute le plugin :

```js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
});
```

Dans le fichier CSS (ici `src/App.css`), une seule ligne :

```css
@import "tailwindcss";
```

C'est tout : on peut utiliser les classes Tailwind dans le JSX.

## 2. Le principe

- Une classe = une règle CSS. On ne fait pas de fichier `.css` pour chaque composant : on met les classes directement dans `className`.
- `bg-gray-800` = la couleur de fond, `p-6` = le padding, `rounded-xl` = les coins arrondis, `text-white` = la couleur du texte.
- L'échelle fixe : 1 unité = 4px. `p-6` = 24px, `gap-4` = 16px, `w-80` = 320px.
- Les états avec un préfixe : `hover:bg-blue-600` (au survol), `md:flex-row` (à partir d'un écran moyen).

```jsx
<button className="w-full rounded-lg bg-blue-500 px-4 py-3 font-semibold text-white hover:bg-blue-600">
  View Details
</button>
```

## 3. Personnaliser : les deux approches du projet

### Approche 1 : les classes de base (`src/components/CardUtilities.jsx`)

On prend les couleurs et les tailles déjà fournies par Tailwind (`bg-gray-800`, `text-gray-400`, `bg-blue-500`…). C'est rapide, mais les couleurs de la maquette sont écrites un peu partout.

### Approche 2 : nos couleurs dans le thème + `@apply` (`src/App.css` et `src/components/CardTheme.jsx`)

On range les couleurs de la maquette Figma dans `@theme`, avec un nom. Tailwind crée les classes tout seul :

```css
@theme {
  --color-card: #1f2937;  /* → bg-card, text-card, border-card… */
  --color-muted: #9ca3af; /* → text-muted… */
  --color-brand: #3b82f6; /* → bg-brand… */
}
```

```jsx
<div className="rounded-xl bg-card p-6">…</div>
```

Et pour ne pas répéter une longue liste de classes, on fait une classe à nous avec `@apply` :

```css
@layer components {
  .btn-brand {
    @apply w-full rounded-lg bg-brand px-4 py-3 font-semibold text-white hover:bg-brand-dark;
  }
}
```

```jsx
<button className="btn-brand">View Details</button>
```

Si la couleur change dans la maquette, on la change à un seul endroit : `@theme`.

## 4. Lancer le projet

```bash
cd carte-tailwind
npm install
npm run dev
```

La page montre les deux cartes côte à côte : la carte des classes de base à gauche, celle avec nos couleurs à droite.

## Documentation

- Installation avec Vite : https://tailwindcss.com/docs/installation/using-vite
- Les couleurs et le thème : https://tailwindcss.com/docs/theme
- `@apply` : https://tailwindcss.com/docs/functions-and-directives#apply-directive
