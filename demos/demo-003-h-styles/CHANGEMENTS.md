# Démo 003-H · Styles en React : le code complet

Tous les fichiers utilisés par la démo, en entier, pour la recoder sans imprimer le code. Fichiers utilisés : ceux atteints par les imports depuis src/main.* ; les fichiers du gabarit Vite non modifiés sont seulement listés. Ordre de lecture : main → App → composants et pages → le reste. Une section par projet ou sous-dossier.

La même Card Car (maquette Figma) en CSS (codée en live), avec Tailwind CSS (2 approches) et avec Chakra UI (2 approches).

## `carte-css`

La carte catalogue de la maquette Figma (Card Car), en React + CSS : on la code en live, maquette ouverte. La carte détail (Card Details), c’est l’exercice 9.

*Fichiers générés par Vite, non modifiés (non affichés) : `index.html`, `vite.config.js`, `.gitignore`, `eslint.config.js`, `public/vite.svg`, `package.json`*

### `carte-css/src/main.jsx` (6 lignes)

```jsx
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <App />
);
```

### `carte-css/src/App.jsx` (8 lignes)

```jsx
import "./App.css";
import Home from "./components/Home";

function App() {
  return <Home />;
}

export default App;
```

### `carte-css/src/App.css` (22 lignes)

```css
/* ========================================
   POLICES ET RESET GLOBAL
   ======================================== */

/* Import de la police Google Fonts "Inter" avec différentes épaisseurs */
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap");

/* Reset global pour tous les éléments */
* {
  box-sizing: border-box; /* Inclut padding et border dans la largeur/hauteur totale */
  margin: 0; /* Supprime toutes les marges par défaut */
  padding: 0; /* Supprime tous les paddings par défaut */
}

/* ========================================
   STYLES GÉNÉRAUX DE LA PAGE
   ======================================== */

body {
  font-family: "Inter", sans-serif; /* Applique la police Inter à tout le texte */
  -webkit-font-smoothing: antialiased; /* Rend le texte plus lisse sur les écrans */
}
```

### `carte-css/src/components/Home.jsx` (40 lignes)

```jsx
import "./styles.css";

// La Card Car de la maquette Figma, en CSS (on la code en live, maquette ouverte)
export default function Home() {
  return (
    <main className="page">
      <div className="container">
        <header className="header">
          <h1 className="header-title">CSS Design System</h1>
          <h2 className="header-subtitle">La carte catalogue</h2>
        </header>

        {/* style={{ }} : du style en ligne, c'est un objet JS (propriétés en camelCase : fontSize) */}
        <h3
          style={{
            fontSize: "24px",
            fontWeight: "600",
            color: "#ffffff",
            marginBottom: "24px",
            textAlign: "center",
          }}
        >
          Carte Catalogue
        </h3>

        {/* className : les classes du fichier styles.css */}
        <div className="card" style={{ maxWidth: "400px", margin: "0 auto" }}>
          <h3 className="car-name">Tesla Model S</h3>
          <div className="color">
            <span className="circle" style={{ backgroundColor: "#dc2626" }}></span>
            <span>Rouge</span>
          </div>
          <span className="badge available">Available</span>
          <p className="price">$79,990</p>
          <button className="btn">View Details</button>
        </div>
      </div>
    </main>
  );
}
```

### `carte-css/src/components/styles.css` (135 lignes)

```css
.page {
  background-color: #111827; /* Couleur de fond gris très foncé */
  color: #f9fafb; /* Couleur du texte blanc cassé */
  min-height: 100vh; /* Hauteur minimale = 100% de la hauteur de l'écran */
  display: flex; /* Active le mode flexbox */
  align-items: center; /* Centre verticalement le contenu */
  justify-content: center; /* Centre horizontalement le contenu */
  padding: 32px 16px; /* Espace intérieur: 32px en haut/bas, 16px à gauche/droite */
}

.container {
  max-width: 1280px; /* Largeur maximale du conteneur */
  width: 100%; /* Prend 100% de la largeur disponible jusqu'au max-width */
}

/* ========================================
   HEADER
   ======================================== */

.header {
  text-align: center; /* Centre le texte horizontalement */
  margin-bottom: 48px; /* Espace en bas de 48px */
  padding: 32px 0; /* Espace intérieur de 32px en haut et en bas */
}

.header-title {
  font-size: 48px; /* Taille de texte de 48 pixels */
  font-weight: 700; /* Épaisseur du texte: gras (700) */
  color: #ffffff; /* Couleur du texte: blanc pur */
  margin-bottom: 16px; /* Espace en bas de 16px */
  line-height: 1.2; /* Hauteur de ligne: 1.2 fois la taille du texte */
}

.header-subtitle {
  font-size: 24px; /* Taille de texte de 24 pixels */
  font-weight: 600; /* Épaisseur du texte: semi-gras (600) */
  color: #9ca3af; /* Couleur du texte: gris moyen */
}

/* ========================================
   CARTES GÉNÉRIQUES
   ======================================== */

.card {
  background-color: #1f2937; /* Couleur de fond gris foncé */
  border-radius: 12px; /* Coins arrondis de 12px */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Ombre portée: décalage 4px vers le bas, flou de 6px */
  padding: 24px; /* Espace intérieur de 24px sur tous les côtés */
  display: flex; /* Active le mode flexbox */
  flex-direction: column; /* Dispose les éléments verticalement (en colonne) */
  gap: 16px; /* Espace de 16px entre chaque élément enfant */
  transition: box-shadow 0.3s ease; /* Animation fluide de l'ombre sur 0.3 secondes */
}

.card:hover {
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2); /* Ombre plus grande au survol de la souris */
}

/* ========================================
   ÉLÉMENTS DE CARTE CATALOGUE
   ======================================== */

.car-name {
  font-size: 18px; /* Taille de texte de 18 pixels */
  font-weight: 700; /* Épaisseur du texte: gras (700) */
  color: #ffffff; /* Couleur du texte: blanc pur */
}

.color {
  display: flex; /* Active le mode flexbox */
  align-items: center; /* Aligne verticalement les éléments au centre */
  gap: 8px; /* Espace de 8px entre le cercle et le texte */
  font-size: 14px; /* Taille de texte de 14 pixels */
  color: #9ca3af; /* Couleur du texte: gris moyen */
}

.circle {
  width: 16px; /* Largeur du cercle: 16 pixels */
  height: 16px; /* Hauteur du cercle: 16 pixels */
  border-radius: 50%; /* Rend l'élément circulaire (50% = cercle parfait) */
  border: 2px solid #6b7280; /* Bordure de 2px, couleur gris */
  /* flex-shrink: 0; /* Empêche le cercle de rétrécir si l'espace est limité */
}

.badge {
  display: inline-flex; /* Flexbox en ligne (prend seulement la largeur nécessaire) */
  width: fit-content; /* Largeur ajustée au contenu */
  align-self: flex-start; /* S'aligne au début du conteneur parent */
  padding: 4px 12px; /* Espace intérieur: 4px en haut/bas, 12px à gauche/droite */
  border-radius: 9999px; /* Coins très arrondis (forme de pilule) */
  font-size: 12px; /* Taille de texte de 12 pixels */
  font-weight: 500; /* Épaisseur du texte: moyennement gras (500) */
}

.badge.available {
  background-color: #d1fae5; /* Couleur de fond vert clair pour "disponible" */
  color: #065f46; /* Couleur du texte vert foncé */
}

.badge.unavailable {
  background-color: #fee2e2; /* Couleur de fond rouge clair pour "indisponible" */
  color: #991b1b; /* Couleur du texte rouge foncé */
}

.price {
  font-size: 20px; /* Taille de texte de 20 pixels */
  font-weight: 600; /* Épaisseur du texte: semi-gras (600) */
  color: #ffffff; /* Couleur du texte: blanc pur */
}

/* ========================================
   BOUTONS
   ======================================== */

.btn {
  width: 100%; /* Largeur du bouton: 100% du conteneur parent */
  background-color: #3b82f6; /* Couleur de fond bleu */
  color: #ffffff; /* Couleur du texte: blanc pur */
  font-weight: 600; /* Épaisseur du texte: semi-gras (600) */
  padding: 12px 16px; /* Espace intérieur: 12px en haut/bas, 16px à gauche/droite */
  border-radius: 8px; /* Coins arrondis de 8px */
  border: none; /* Supprime la bordure par défaut */
  cursor: pointer; /* Change le curseur en main au survol */
  font-size: 16px; /* Taille de texte de 16 pixels */
  transition: background-color 0.2s ease; /* Animation fluide de la couleur de fond sur 0.2 secondes */
}

.btn:hover {
  background-color: #2563eb; /* Couleur de fond bleu plus foncé au survol */
}

.btn:focus {
  outline: none; /* Supprime le contour par défaut au focus */
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.5); /* Ajoute une ombre bleue de 3px pour indiquer le focus */
}
```

## `carte-tailwind`

La même Card Car, faite avec Tailwind CSS v4, de deux façons : 1) les classes de base de Tailwind ; 2) nos couleurs de la maquette dans @theme + une classe @apply. Projet prêt : on en fait le tour avec GUIDE-tailwind.pdf.

*Fichiers générés par Vite, non modifiés (non affichés) : `index.html`, `.gitignore`, `eslint.config.js`, `public/vite.svg`*

*package.json (gabarit Vite) : dépendances ajoutées : `@tailwindcss/vite ^4.1.18`, `tailwind-merge ^3.3.1`, `tailwindcss ^4.1.18`, `tailwindcss-animate ^1.0.7`, `vite-tsconfig-paths ^6.0.3`*

### `carte-tailwind/src/main.jsx` (4 lignes)

```jsx
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(<App />);
```

### `carte-tailwind/src/App.jsx` (8 lignes)

```jsx
import "./App.css";
import Home from "./components/Home";

function App() {
  return <Home />;
}

export default App;
```

### `carte-tailwind/src/App.css` (20 lignes)

```css
@import "tailwindcss";

/* Approche 2 : les couleurs de la maquette Figma, rangées dans le thème Tailwind.
   --color-card donne les classes bg-card, text-card, border-card… */
@theme {
  --color-page: #111827; /* fond de la page */
  --color-card: #1f2937; /* fond de la carte */
  --color-muted: #9ca3af; /* texte gris */
  --color-brand: #3b82f6; /* bouton */
  --color-brand-dark: #2563eb; /* bouton au survol */
  --color-success-bg: #d1fae5; /* badge Available : fond */
  --color-success-fg: #065f46; /* badge Available : texte */
}

/* Une classe réutilisable faite avec @apply : on regroupe des classes Tailwind sous un seul nom */
@layer components {
  .btn-brand {
    @apply w-full cursor-pointer rounded-lg bg-brand px-4 py-3 font-semibold text-white transition-colors hover:bg-brand-dark;
  }
}
```

### `carte-tailwind/src/components/Home.jsx` (23 lignes)

```jsx
import CardUtilities from "./CardUtilities";
import CardTheme from "./CardTheme";

// La Card Car de la maquette Figma, faite avec Tailwind CSS, de deux façons
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-12 bg-page p-8">
      <h1 className="text-4xl font-bold text-white">Tailwind CSS</h1>

      <div className="flex flex-wrap justify-center gap-12">
        <div className="flex flex-col items-center gap-4">
          <h2 className="text-lg font-semibold text-gray-400">1 · Les classes de Tailwind</h2>
          <CardUtilities />
        </div>

        <div className="flex flex-col items-center gap-4">
          <h2 className="text-lg font-semibold text-gray-400">2 · Nos couleurs (@theme) + @apply</h2>
          <CardTheme />
        </div>
      </div>
    </main>
  );
}
```

### `carte-tailwind/src/components/CardUtilities.jsx` (34 lignes)

```jsx
// Approche 1 : uniquement les classes de base de Tailwind (couleurs et tailles déjà fournies)
export default function CardUtilities() {
  return (
    <div className="flex w-80 flex-col gap-4 rounded-xl bg-gray-800 p-6 shadow-md transition-shadow hover:shadow-xl">
      {/*
        flex flex-col gap-4 : les éléments en colonne, 16px entre eux
        w-80 : largeur 320px
        rounded-xl : coins arrondis de 12px
        bg-gray-800 : fond gris foncé (#1f2937)
        p-6 : padding de 24px
        shadow-md / hover:shadow-xl : ombre, plus grande au survol
      */}
      <h3 className="text-lg font-bold text-white">Tesla Model S</h3>

      <div className="flex items-center gap-2 text-sm text-gray-400">
        {/* size-4 : 16px × 16px ; rounded-full : un cercle ; border-2 : bordure de 2px */}
        <span className="size-4 rounded-full border-2 border-gray-500 bg-red-600"></span>
        <span>Rouge</span>
      </div>

      {/* self-start : le badge garde sa largeur (il ne s'étire pas) */}
      <span className="self-start rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-800">
        Available
      </span>

      <p className="text-xl font-semibold text-white">$79,990</p>

      {/* hover:bg-blue-600 : la couleur au survol */}
      <button className="w-full cursor-pointer rounded-lg bg-blue-500 px-4 py-3 font-semibold text-white transition-colors hover:bg-blue-600">
        View Details
      </button>
    </div>
  );
}
```

### `carte-tailwind/src/components/CardTheme.jsx` (23 lignes)

```jsx
// Approche 2 : nos couleurs à nous (déclarées dans @theme, dans App.css) + une classe @apply
export default function CardTheme() {
  return (
    <div className="flex w-80 flex-col gap-4 rounded-xl bg-card p-6 shadow-md transition-shadow hover:shadow-xl">
      {/* bg-card : la couleur --color-card du thème */}
      <h3 className="text-lg font-bold text-white">Tesla Model S</h3>

      <div className="flex items-center gap-2 text-sm text-muted">
        <span className="size-4 rounded-full border-2 border-gray-500 bg-red-600"></span>
        <span>Rouge</span>
      </div>

      <span className="self-start rounded-full bg-success-bg px-3 py-1 text-xs font-medium text-success-fg">
        Available
      </span>

      <p className="text-xl font-semibold text-white">$79,990</p>

      {/* btn-brand : notre classe faite avec @apply (dans App.css) */}
      <button className="btn-brand">View Details</button>
    </div>
  );
}
```

### `carte-tailwind/vite.config.js` (9 lignes)

```js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  // tailwindcss() : le plugin qui branche Tailwind v4 dans Vite
  plugins: [react(), tailwindcss()],
});
```

## `carte-chakra`

La même Card Car, faite avec Chakra UI v3, de deux façons : 1) les props de style ; 2) les tokens du thème (createSystem). Projet prêt : on en fait le tour avec GUIDE-chakra.pdf.

*Fichiers générés par Vite, non modifiés (non affichés) : `index.html`, `vite.config.js`, `.gitignore`, `eslint.config.js`, `public/vite.svg`*

*package.json (gabarit Vite) : dépendances ajoutées : `@chakra-ui/react ^3.30.0`, `@emotion/react ^11.14.0`, `next-themes ^0.4.6`, `react-icons ^5.5.0`, `vite-tsconfig-paths ^6.0.3`*

### `carte-chakra/src/main.jsx` (4 lignes)

```jsx
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(<App />);
```

### `carte-chakra/src/App.jsx` (31 lignes)

```jsx
import "./App.css";
import { ChakraProvider, Flex, Heading, VStack } from "@chakra-ui/react";
import system from "./styles/theme";
import CardProps from "./components/CardProps";
import CardToken from "./components/CardToken";

// La Card Car de la maquette Figma, faite avec Chakra UI, de deux façons
function App() {
  // ChakraProvider : donne le thème (system) à tous les composants Chakra
  return (
    <ChakraProvider value={system}>
      <VStack bg="primary.600" minH="100vh" w="100%" p="8" gap="12" justify="center">
        <Heading size="3xl" color="text.100">
          Chakra UI
        </Heading>
        <Flex wrap="wrap" gap="12" justify="center" align="flex-start">
          <VStack gap="4">
            <Heading size="md" color="text.300">1 · Props de style</Heading>
            <CardProps />
          </VStack>
          <VStack gap="4">
            <Heading size="md" color="text.300">2 · Tokens du thème</Heading>
            <CardToken />
          </VStack>
        </Flex>
      </VStack>
    </ChakraProvider>
  );
}

export default App;
```

### `carte-chakra/src/App.css` (6 lignes)

```css
/* Import de la police Google Fonts "Inter" avec différentes épaisseurs */
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap");

body {
  margin: 0; /* pas de marge autour de la page */
}
```

### `carte-chakra/src/components/CardProps.jsx` (51 lignes)

```jsx
import { Badge, Box, Button, Card, HStack, Text } from "@chakra-ui/react";

// Approche 1 : la carte personnalisée avec des props de style (bg, color, borderRadius…) et les valeurs de la maquette
export default function CardProps() {
  return (
    <Card.Root
      w="320px"
      bg="#1f2937" // fond de la carte
      color="#f9fafb" // texte clair
      borderRadius="12px"
      border="none"
    >
      <Card.Body p="6" gap="4">
        <Card.Title fontSize="18px" fontWeight="700" color="#ffffff">
          Tesla Model S
        </Card.Title>
        <HStack gap="2">
          <Box w="16px" h="16px" borderRadius="full" border="2px solid" borderColor="#6b7280" bg="#dc2626" />
          <Text fontSize="14px" color="#9ca3af">
            Rouge
          </Text>
        </HStack>
        <Badge
          bg="#d1fae5"
          color="#065f46"
          borderRadius="9999px"
          px="3"
          py="1"
          fontSize="12px"
          fontWeight="500"
          w="fit-content"
        >
          Available
        </Badge>
        <Text fontSize="20px" fontWeight="600" color="#ffffff">
          $79,990
        </Text>
        <Button
          w="100%"
          bg="#3b82f6"
          color="#ffffff"
          borderRadius="8px"
          fontWeight="600"
          _hover={{ bg: "#2563eb" }} // _hover : le style au survol
        >
          View Details
        </Button>
      </Card.Body>
    </Card.Root>
  );
}
```

### `carte-chakra/src/components/CardToken.jsx` (51 lignes)

```jsx
import { Badge, Box, Button, Card, HStack, Text } from "@chakra-ui/react";

// Approche 2 : les valeurs viennent du thème (tokens définis dans styles/theme.js)
export default function CardToken() {
  return (
    <Card.Root
      w="320px"
      bg="primary.500" // token
      color="text.50" // token
      borderRadius="card" // token (radii)
      border="none"
    >
      <Card.Body p="6" gap="4">
        <Card.Title fontSize="18px" fontWeight="700" color="text.100">
          Tesla Model S
        </Card.Title>
        <HStack gap="2">
          <Box w="16px" h="16px" borderRadius="full" border="2px solid" borderColor="border.600" bg="#dc2626" />
          <Text fontSize="14px" color="text.300">
            Rouge
          </Text>
        </HStack>
        <Badge
          bg="success.bg"
          color="success.fg"
          borderRadius="pill"
          px="3"
          py="1"
          fontSize="12px"
          fontWeight="500"
          w="fit-content"
        >
          Available
        </Badge>
        <Text fontSize="20px" fontWeight="600" color="text.100">
          $79,990
        </Text>
        <Button
          w="100%"
          bg="brand.500"
          color="text.100"
          borderRadius="button"
          fontWeight="600"
          _hover={{ bg: "brand.600" }}
        >
          View Details
        </Button>
      </Card.Body>
    </Card.Root>
  );
}
```

### `carte-chakra/src/styles/theme.js` (48 lignes)

```js
import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

// theme.js (Chakra UI v3) : nos tokens = les valeurs de la maquette Figma, avec un nom
export const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        primary: {
          500: { value: "#1f2937" }, // fond de la carte
          600: { value: "#111827" }, // page bg
        },
        text: {
          50: { value: "#f9fafb" }, // texte clair
          100: { value: "#ffffff" }, // blanc pur
          300: { value: "#9ca3af" }, // texte muted
        },
        brand: {
          500: { value: "#3b82f6" }, // bouton
          600: { value: "#2563eb" }, // hover bouton
        },
        success: {
          bg: { value: "#d1fae5" },
          fg: { value: "#065f46" },
        },
        danger: {
          bg: { value: "#fee2e2" },
          fg: { value: "#991b1b" },
        },
        border: {
          500: { value: "#374151" },
          600: { value: "#6b7280" },
        },
      },
      radii: {
        card: { value: "12px" },
        button: { value: "8px" },
        pill: { value: "9999px" },
      },
      fonts: {
        body: { value: "Inter, system-ui, sans-serif" },
      },
    },
  },
});

// createSystem : la config par défaut de Chakra + nos tokens = le thème donné au ChakraProvider
const system = createSystem(defaultConfig, config);
export default system;
```
