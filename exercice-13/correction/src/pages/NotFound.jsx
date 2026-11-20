import { Link } from "react-router";

// 404
function NotFound() {
  return (
    <div className="card">
      <h1>404 - Page introuvable</h1>
      <Link className="link" to="/">Retour Home</Link>
    </div>
  );
}

export default NotFound;
