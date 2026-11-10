// Démo 003-E · étape 2 : onMouseEnter / onMouseLeave, on change la couleur directement avec l'événement
// Ça marche, mais ce n'est pas la bonne façon : on modifie le DOM à la main
function Title() {
  const handleMouseEnter = (event) => {
    event.target.style.color = "red";
  };
  const handleMouseLeave = (event) => {
    event.target.style.color = "black";
  };

  return (
    <h1
      onCopy={() => alert("Texte copié !")}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      Bienvenue dans la formation React
    </h1>
  );
}

export default Title;
