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

      <p style={{ color: strength.color, fontWeight: 600 }}>Force : {strength.label}</p>

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
