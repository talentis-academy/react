// Une erreur pleine page (ex. l'API ne répond pas)
export function ErrorMessage({ message }) {
  return (
    <div className="center-page">
      <p className="error-text">{message}</p>
    </div>
  );
}
