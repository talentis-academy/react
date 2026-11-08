import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div style={{ padding: 16 }}>
      <h2>Oups… une erreur est survenue</h2>
      <p>Merci de réessayer.</p>
      <Link to="/">Go back home</Link>
    </div>
  );
}
export default ErrorPage;
