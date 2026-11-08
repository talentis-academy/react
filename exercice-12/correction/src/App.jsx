import { ErrorBoundary } from "react-error-boundary";
import Home from "./components/Home";
import EventError from "./components/EventError";
import ErrorFallback from "./components/ErrorFallback";

import "./App.css";

function App() {
  const logError = (error, info) => {
    // Ici tu peux envoyer vers Sentry / LogRocket etc.
    console.error("ErrorBoundary caught:", error, info);
  };

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback} onError={logError}>
      <Home />
      <EventError />
    </ErrorBoundary>
  );
}

export default App;
