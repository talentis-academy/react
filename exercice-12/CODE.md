# Exercice 12 · Error Boundary avec react-error-boundary : le code complet

Tous les fichiers de la correction (dossier correction/), en entier, pour suivre la correction. Fichiers utilisés : ceux atteints par les imports depuis src/main.* ; les fichiers du gabarit Vite non modifiés sont seulement listés. Ordre de lecture : main → App → composants et pages → le reste.

## `correction`

*Fichiers générés par Vite, non modifiés (non affichés) : `index.html`, `vite.config.js`, `.gitignore`, `eslint.config.js`, `public/vite.svg`*

*package.json (gabarit Vite) : dépendances ajoutées : `react-error-boundary ^6.0.0`*

*Présents mais pas encore branchés (non affichés) : `src/components/ErrorBoundary.jsx`*

### `correction/src/main.jsx` (9 lignes)

```jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
```

### `correction/src/App.jsx` (22 lignes)

```jsx
import { ErrorBoundary } from "react-error-boundary";
import Home from "./components/Home";
import EventError from "./components/EventError";
import ErrorFallback from "./components/ErrorFallback";

import "./App.css";

function App() {
  const logError = (error, info) => {
    // Ici tu peux envoyer vers Sentry / LogRocket etc.
    console.error("ErrorBoundary caught:", error, info);
  };

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback} onError={logError}>
      <Home />
      <EventError />
    </ErrorBoundary>
  );
}

export default App;
```

### `correction/src/App.css` (33 lignes)

```css
/* VERSION RESPONSIVE - S'adapte à tous les écrans (mobile, tablette, desktop) */

/* Importation de la police Google Fonts Inter avec plusieurs graisses */
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap");

/* Sélecteur universel qui cible tous les éléments HTML */
* {
  /* Force tous les éléments à inclure padding et border dans leur largeur/hauteur totale */
  box-sizing: border-box;
  /* Supprime les marges par défaut du navigateur pour avoir un contrôle total */
  margin: 0;
  /* Supprime les espacements internes par défaut du navigateur */
  padding: 0;
}

/* Style global du corps de la page */
body {
  /* Applique la police Inter importée, avec sans-serif comme police de secours */
  font-family: "Inter", sans-serif;
  /* Améliore le rendu des polices sur les navigateurs WebKit (Safari, Chrome) */
  -webkit-font-smoothing: antialiased;
  /* Améliore le rendu des polices sur Firefox pour Mac */
  -moz-osx-font-smoothing: grayscale;

  text-align: center;

  padding: 20px;
}

h1 {
  padding: 20px;
}

```

### `correction/src/components/Home.jsx` (17 lignes)

```jsx
import { useState } from "react";
function Home() {
  const [crash, setCrash] = useState(false);

  if (crash) {
    throw new Error("Test Error (render)");
  }

  return (
    <div>
      <h1>Welcome to the Login Page</h1>
      <button onClick={() => setCrash(true)}>Throw error</button>
    </div>
  );
}

export default Home;
```

### `correction/src/components/EventError.jsx` (22 lignes)

```jsx
import { useErrorBoundary } from "react-error-boundary";

// Une erreur dans un event ou un fetch n'est pas captée par un Error Boundary.
// showBoundary permet de l'envoyer quand même à l'ErrorBoundary.
function EventError() {
  const { showBoundary } = useErrorBoundary();

  const handleClick = async () => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/unknown");
      if (!response.ok) {
        throw new Error("Test Error (event / fetch)");
      }
    } catch (error) {
      showBoundary(error);
    }
  };

  return <button onClick={handleClick}>Throw error (event)</button>;
}

export default EventError;
```

### `correction/src/components/ErrorFallback.jsx` (16 lignes)

```jsx
// UI de secours affichée par react-error-boundary à la place du composant qui a crashé
function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div style={{ padding: 16 }}>
      <h2>Un problème est survenu</h2>
      <p>Merci de réessayer.</p>

      {/* Optionnel: afficher le message en dev */}
      <pre style={{ marginTop: 12 }}>{error.message}</pre>

      <button onClick={resetErrorBoundary}>Réessayer</button>
    </div>
  );
}

export default ErrorFallback;
```
