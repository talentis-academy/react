import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="center-page">
      <h1 className="not-found-title">404</h1>
      <p className="not-found-text">Page not found</p>
      <Link to="/" className="btn">
        Go Home
      </Link>
    </div>
  );
}
