// Le chargement : un spinner et un texte, réutilisé par toutes les pages
export default function Loading({ text = "Loading..." }) {
  return (
    <div className="center-page">
      <div className="spinner"></div>
      <p>{text}</p>
    </div>
  );
}
