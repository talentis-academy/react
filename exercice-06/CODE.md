# Exercice 06 · Force du mot de passe : le code complet

Tous les fichiers de la correction (dossier correction/), en entier, pour suivre la correction. Fichiers utilisés : ceux atteints par les imports depuis src/main.* ; les fichiers du gabarit Vite non modifiés sont seulement listés. Ordre de lecture : main → App → composants et pages → le reste.

## `correction`

*Styles fournis (copiés tels quels, pas tapés en live) : `src/index.css` (80 lignes)*

*Fichiers générés par Vite, non modifiés (non affichés) : `src/main.jsx`, `index.html`, `vite.config.js`, `.gitignore`, `eslint.config.js`, `public/vite.svg`, `package.json`*

### `correction/src/App.jsx` (7 lignes)

```jsx
import PasswordStrength from "./PasswordStrength.jsx";

function App() {
  return <PasswordStrength />;
}

export default App;
```

### `correction/src/PasswordStrength.jsx` (46 lignes)

```jsx
import { useState } from "react";

function getStrength(password) {
  if (password.length === 0) return { label: "Saisissez un mot de passe", color: "#757575", level: 0 };

  // .test() renvoie true ou false
  let score = 0;
  if (/[A-Z]/.test(password)) score++; // une majuscule
  if (/[0-9]/.test(password)) score++; // un chiffre
  if (/[^A-Za-z0-9]/.test(password)) score++; // un caractère spécial (ni lettre, ni chiffre)

  if (score === 3) return { label: "Fort", color: "#50BF90", level: 3 };
  if (score === 2) return { label: "Moyen", color: "#FC8C00", level: 2 };
  return { label: "Faible", color: "#F84A4A", level: 1 };
}

function PasswordStrength() {
  const [password, setPassword] = useState("");
  const strength = getStrength(password);

  return (
    <div className="card">
      <h1>Force du mot de passe</h1>
      <label>
        Mot de passe
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>

      <p style={{ color: strength.color, fontWeight: 600 }}>Force : {strength.label}</p>

      {/* Bonus : barre de progression */}
      <div className="bar">
        <div
          className="bar-fill"
          style={{ width: `${(strength.level / 3) * 100}%`, background: strength.color }}
        />
      </div>
    </div>
  );
}

export default PasswordStrength;
```
