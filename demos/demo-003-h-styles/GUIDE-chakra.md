# Démo 003-H · Chakra UI : pour démarrer

Le projet prêt : `carte-chakra` (la Card Car de la maquette Figma, faite de deux façons). On ne code pas Chakra en live : on fait le tour du projet avec ce guide.

## 1. Installer Chakra UI (v3) dans un projet Vite

```bash
npm create vite@latest mon-projet   # React + JavaScript
cd mon-projet
npm install @chakra-ui/react @emotion/react
```

Ensuite, on entoure l'application avec `ChakraProvider` (il donne le thème à tous les composants Chakra) :

```jsx
import { ChakraProvider, defaultSystem } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider value={defaultSystem}>
      {/* nos composants */}
    </ChakraProvider>
  );
}
```

`defaultSystem` = le thème par défaut de Chakra. Plus bas, on le remplace par notre thème.

## 2. Le principe

- Chakra donne des composants déjà prêts : `Card`, `Button`, `Badge`, `Text`, `HStack`…
- Le style se fait avec des props, directement sur le composant : `bg`, `color`, `p`, `mt`, `borderRadius`, `w`…
- Le survol : la prop `_hover`.

```jsx
<Button bg="#3b82f6" color="white" _hover={{ bg: "#2563eb" }}>
  View Details
</Button>
```

## 3. Personnaliser : les deux approches du projet

### Approche 1 : les props de style (`src/components/CardProps.jsx`)

On met les valeurs de la maquette Figma directement dans les props :

```jsx
<Card.Root bg="#1f2937" color="#f9fafb" borderRadius="12px">
```

C'est simple, mais les couleurs sont écrites partout : si la maquette change, il faut tout changer.

### Approche 2 : les tokens du thème (`src/styles/theme.js` et `src/components/CardToken.jsx`)

On donne un nom aux valeurs de la maquette, une seule fois, dans le thème :

```js
import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        primary: { 500: { value: "#1f2937" } }, // fond de la carte
        brand: { 500: { value: "#3b82f6" }, 600: { value: "#2563eb" } }, // bouton
      },
      radii: {
        card: { value: "12px" },
      },
    },
  },
});

// le thème par défaut de Chakra + nos tokens
const system = createSystem(defaultConfig, config);
export default system;
```

On donne ce thème au Provider :

```jsx
<ChakraProvider value={system}>
```

Et dans les composants, on utilise le nom du token :

```jsx
<Card.Root bg="primary.500" borderRadius="card">
<Button bg="brand.500" _hover={{ bg: "brand.600" }}>
```

Si la couleur change dans la maquette, on la change à un seul endroit : `theme.js`.

## 4. Lancer le projet

```bash
cd carte-chakra
npm install
npm run dev
```

La page montre les deux cartes côte à côte : « 1 · Props de style » et « 2 · Tokens du thème ».

## Documentation

- Installation avec Vite : https://chakra-ui.com/docs/get-started/frameworks/vite
- Les props de style : https://chakra-ui.com/docs/styling/style-props/background
- Les tokens et le thème : https://chakra-ui.com/docs/theming/tokens
