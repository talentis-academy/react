import { useRouteError, useNavigate, Link } from "react-router-dom";
import { AlertIcon } from "./Icons";

// errorElement de React Router : une erreur dans une page affiche cet écran au lieu de casser l'application
export default function ErrorBoundary() {
  const error = useRouteError();
  const navigate = useNavigate();

  console.error("ErrorBoundary:", error);

  return (
    <div className="center-page error-content">
      <AlertIcon size={64} />
      <h1 className="error-title">Something went wrong!</h1>
      <p className="muted">{error?.message || "An unexpected error occurred"}</p>
      <div className="button-group">
        <button className="btn" onClick={() => navigate(0)}>
          Try again
        </button>
        <Link to="/" className="btn">
          Go Home
        </Link>
      </div>
    </div>
  );
}
