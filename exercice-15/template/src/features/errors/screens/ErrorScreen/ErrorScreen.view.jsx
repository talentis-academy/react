import { useNavigate, useRouteError } from "react-router";
import { getErrorMessage } from "./ErrorScreen.adapter";
import { ErrorScreenScene } from "./ErrorScreen.scene";

// errorElement de React Router : une erreur dans une page affiche cet écran au lieu de casser l'application
export function ErrorScreenView() {
  // useRouteError : l'erreur attrapée par React Router (on affiche son message)
  const error = useRouteError();
  const navigate = useNavigate();

  console.error("ErrorBoundary:", error);

  // navigate(0) recharge la page courante
  return <ErrorScreenScene message={getErrorMessage(error)} onRetry={() => navigate(0)} />;
}
