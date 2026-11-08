// UI de secours affichée par react-error-boundary à la place du composant qui a crashé
function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div style={{ padding: 16 }}>
      <h2>Un problème est survenu</h2>
      <p>Merci de réessayer.</p>

      {/* Optionnel: afficher le message en dev */}
      <pre style={{ marginTop: 12 }}>{error.message}</pre>

      <button onClick={resetErrorBoundary}>Réessayer</button>
    </div>
  );
}

export default ErrorFallback;
