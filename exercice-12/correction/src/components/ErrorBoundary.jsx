import React from "react";

class ErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    // Ici tu peux envoyer vers Sentry / LogRocket etc.
    console.error("ErrorBoundary caught:", error, info);
  }

  render() {
    if (this.state.hasError) {
      // fallback custom si tu veux
      if (this.props.fallback) return this.props.fallback;

      // fallback par défaut
      return (
        <div style={{ padding: 16 }}>
          <h2>Un problème est survenu</h2>
          <p>Merci de recharger la page ou de réessayer.</p>

          {/* Optionnel: afficher le message en dev */}
          {this.state.error && (
            <pre style={{ marginTop: 12 }}>{this.state.error.message}</pre>
          )}
        </div>
      );
    }

    return this.props.children;
  }
}
export default ErrorBoundary;
