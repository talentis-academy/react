import { useNavigate, useRouteError } from "react-router-dom";
import { getErrorMessage } from "./ErrorScreen.adapter";
import { ErrorScreenScene } from "./ErrorScreen.scene";

// errorElement de React Router : une erreur dans une page affiche cet écran au lieu de casser l'application
export function ErrorScreenView() {
  const error = useRouteError();
  const navigate = useNavigate();

  console.error("ErrorBoundary:", error);

  // navigate(0) recharge la page courante
  return <ErrorScreenScene message={getErrorMessage(error)} onRetry={() => navigate(0)} />;
}
