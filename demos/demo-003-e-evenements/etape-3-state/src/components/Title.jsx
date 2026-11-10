import { useState } from "react";
// Démo 003-E · étape 3 : la bonne façon, un state isHover ; React gère l'affichage
function Title() {
  const [isHover, setIsHover] = useState(false);

  return (
    <h1
      onCopy={() => alert("Texte copié !")}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      style={{ color: isHover ? "red" : "black", transition: "all 0.3s ease" }}
    >
      Bienvenue dans la formation React
    </h1>
  );
}

export default Title;
