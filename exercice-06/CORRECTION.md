> **Exercice 6 · Correction**

# Force du mot de passe

*Correction complète, bonus compris. Le projet est dans le dossier « correction ».*

| | |
|---|---|
| **Énoncé** | Exercice_06_Enonce.docx |
| **Code** | Dossier `correction/` (projet Vite prêt à lancer) |

## Le composant

**`src/PasswordStrength.jsx`**

```jsx
import { useState } from "react";

function getStrength(password) {
  if (password.length === 0) return { label: "Saisissez un mot de passe", color: "#757575", level: 0 };
  if (password.length < 6) return { label: "Faible", color: "#F84A4A", level: 1 };
  if (password.length < 10) return { label: "Moyen", color: "#FC8C00", level: 2 };
  return { label: "Fort", color: "#50BF90", level: 3 };
}

function PasswordStrength() {
  const [password, setPassword] = useState("");
  const strength = getStrength(password);
  const hasDigit = /\d/.test(password);

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

      <p style={{ color: strength.color }}>Force : {strength.label}</p>

      {/* Bonus 2 : barre de progression */}
      <div className="bar">
        <div
          className="bar-fill"
          style={{ width: `${(strength.level / 3) * 100}%`, background: strength.color }}
        />
      </div>

      {/* Bonus 1 : chiffre */}
      {password && <p>Contient un chiffre : {hasDigit ? "OK" : "non"}</p>}
    </div>
  );
}

export default PasswordStrength;
```

## Points clés

- Input contrôlé : `value` vient du state, `onChange` le met à jour
- La logique est sortie dans `getStrength` : le JSX reste lisible
- Les conditions sont testées dans l’ordre : vide, puis moins de 6, puis moins de 10, sinon fort
- `/\d/.test(password)` renvoie `true` si le texte contient au moins un chiffre

## Ressources utiles

- React, répondre aux événements : <https://react.dev/learn/responding-to-events>
- React, l’élément input : <https://react.dev/reference/react-dom/components/input>
