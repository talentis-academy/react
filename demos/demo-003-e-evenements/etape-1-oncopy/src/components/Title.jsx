// Démo 003-E · étape 1 : onCopy + alert (les événements React sont en camelCase : onCopy, pas oncopy)
function Title() {
  return (
    <h1 onCopy={() => alert("Texte copié !")}>
      Bienvenue dans la formation React
    </h1>
  );
}

export default Title;
