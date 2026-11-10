import { useState } from "react";
import "./Title.css";
// Démo 003-E · étape 4 : une template string avec interpolation pour choisir la classe CSS
function Title() {
  const [isHover, setIsHover] = useState(false);

  return (
    <h1
      onCopy={() => alert("Texte copié !")}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className={`title ${isHover ? "title--hover" : "title--normal"}`}
    >
      Bienvenue dans la formation React
    </h1>
  );
}

export default Title;
