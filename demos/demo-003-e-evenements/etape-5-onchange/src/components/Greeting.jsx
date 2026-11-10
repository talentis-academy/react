import { useState } from "react";
// Démo 003-E · étape 5 : onChange, l'utilisateur tape, on met à jour le state, React met à jour l'affichage
function Greeting() {
  const [name, setName] = useState("");

  return (
    <div>
      <input
        placeholder="Votre nom"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>Bonjour, {name || "invité"}</p>
    </div>
  );
}

export default Greeting;
