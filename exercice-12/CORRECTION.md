> **Exercice 12 · Correction**

# Error Boundary avec react-error-boundary

*Fallback, Réessayer, onError et showBoundary.*

| | |
|---|---|
| **Énoncé** | Exercice_12_Enonce.docx |
| **Code** | Dossier `correction/` (projet Vite prêt à lancer) |
| **Source** | Projet du formateur : Formation/Projets/errors (Home, ErrorBoundary en class, styles). Ajouts validés par le formateur : App.jsx avec react-error-boundary, ErrorFallback.jsx, EventError.jsx |

## App

**`src/App.jsx`**

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

## Le fallback

**`src/components/ErrorFallback.jsx`**

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

## Le composant test (erreur pendant le render)

**`src/components/Home.jsx`**

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

## Erreur dans un event ou un fetch : showBoundary

**`src/components/EventError.jsx`**

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

## Pour comparer : la version class

La version faite ensemble en mode class reste dans le projet :

**`src/components/ErrorBoundary.jsx`**

```jsx
import React from "react";

class ErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    // Ici tu peux envoyer vers Sentry / LogRocket etc.
    console.error("ErrorBoundary caught:", error, info);
  }

  render() {
    if (this.state.hasError) {
      // fallback custom si tu veux
      if (this.props.fallback) return this.props.fallback;

      // fallback par défaut
      return (
        <div style={{ padding: 16 }}>
          <h2>Un problème est survenu</h2>
          <p>Merci de recharger la page ou de réessayer.</p>

          {/* Optionnel: afficher le message en dev */}
          {this.state.error && (
            <pre style={{ marginTop: 12 }}>{this.state.error.message}</pre>
          )}
        </div>
      );
    }

    return this.props.children;
  }
}
export default ErrorBoundary;
```

## Points clés

- `FallbackComponent` reçoit `error` et `resetErrorBoundary`
- `onError` remplace `componentDidCatch` : c’est l’endroit pour logger (console, Sentry…)
- Après `resetErrorBoundary`, les enfants sont remontés : `Home` repart avec `crash = false`
- `showBoundary(error)` envoie à l’Error Boundary une erreur venant d’un event ou d’un fetch

## Ressources utiles

- react-error-boundary : <https://github.com/bvaughn/react-error-boundary>
