> **Exercice 6 · Correction**

# Force du mot de passe

*Correction complète, bonus compris.*

| | |
|---|---|
| **Énoncé** | Exercice_06_Enonce.docx |
| **Code** | Dossier `correction/` (projet Vite prêt à lancer) |
| **Point de départ** | Dossier `template/` (le CSS est prêt, les TODO à coder) |
| **Source** | Énoncé du formateur (Programme.docx, Exercice_06.docx) |

## Le composant

**`src/PasswordStrength.jsx`**

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

## Points clés

- Input contrôlé : `value` vient du state, `onChange` le met à jour
- La logique est sortie dans `getStrength` : le JSX reste lisible
- Le champ vide est testé en premier
- Chaque `.test()` renvoie true ou false : on ajoute 1 au `score` pour chaque règle respectée (`let`, car il change)
- `score === 3` → Fort ; `score === 2` → Moyen ; sinon Faible
- `level` sert au bonus : la largeur de la barre est `level / 3`

## Ressources utiles

- React, répondre aux événements : <https://react.dev/learn/responding-to-events>
- React, l’élément input : <https://react.dev/reference/react-dom/components/input>
