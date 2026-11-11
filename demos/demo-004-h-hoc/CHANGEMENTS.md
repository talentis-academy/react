# Démo 004-H · Higher-Order Component : le code complet

Tous les fichiers utilisés par la démo, en entier, pour la recoder sans imprimer le code. Fichiers utilisés : ceux atteints par les imports depuis src/main.* ; les fichiers du gabarit Vite non modifiés sont seulement listés. Ordre de lecture : main → App → composants et pages → le reste.

Le HOC withAuth : la vérification « accès refusé / session expirée » centralisée pour les pages A et B. La version wrapper (AuthWrapper avec children) est en commentaire.

*Fichiers générés par Vite, non modifiés (non affichés) : `src/main.jsx`, `index.html`, `vite.config.js`, `eslint.config.js`, `public/vite.svg`, `package.json`*

*Fichiers vides : `src/index.css`*

### `src/App.jsx` (9 lignes)

```jsx
import Home from "./components/Home";

import "./App.css";

function App() {
  return <Home />;
}

export default App;
```

### `src/App.css` (39 lignes)

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
.container {
  margin: 10px;
}

h1 {
  padding: 20px;
}

.page {
  margin: 20px;
}
```

### `src/components/Home.jsx` (68 lignes)

```jsx
import React from "react";

function withAuth(Component) {
  // retourne un composant (wrapper)
  return function ProtectedComponent(props) {
    const isAuthorized = true;
    const isSessionExpired = false;

    if (!isAuthorized) return <div>Access denied</div>;
    if (isSessionExpired) return <div>Session expired</div>;

    // on passe les props au composant original
    return <Component {...props} />;
  };
}

function PageA() {
  /*const isAuthorized = true;
  const isSessionExpired = false;
  if (!isAuthorized) return <div>Access denied</div>;
  if (isSessionExpired) return <div>Session expired</div>;*/

  return (
    <div>
      <div className="page">Screen A (Private Content)</div>
    </div>
  );
}

function PageB() {
  /*const isAuthorized = true;
  const isSessionExpired = false;
  if (!isAuthorized) return <div>Access denied</div>;
  if (isSessionExpired) return <div>Session expired</div>;*/

  return (
    <div>
      <div className="page">Screen B (Private Content)</div>
    </div>
  );
}

// On enveloppe chaque page avec le HOC : la vérification n'est écrite qu'une fois
const ProtectedPageA = withAuth(PageA);
const ProtectedPageB = withAuth(PageB);

function Home() {
  return (
    <div>
      <h1>Welcome to the Login Page</h1>
      <div className="container">
        <ProtectedPageA />
        <ProtectedPageB />
      </div>
    </div>
  );
}

export default Home;

/*function AuthWrapper({ children }) {
  const isAuthorized = true;
  const isSessionExpired = false;

  if (!isAuthorized) return <div>Access denied</div>;
  if (isSessionExpired) return <div>Session expired</div>;
  return <>{children}</>;
}*/
```
