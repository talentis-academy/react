import { Link } from "react-router-dom";
import { Button, ButtonLink } from "../atoms";

// L'en-tête : il ne connaît pas le stockage, il reçoit le nom affiché et l'action de déconnexion
export function Header({ userName, isLoggedIn, onLogout }) {
  return (
    <header className="header">
      <div className="header-content">
        <Link to="/" className="logo">
          Car Catalog
        </Link>
        <nav className="nav">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/favorites" className="nav-link">
            Favorites
          </Link>
          <Link to="/api-demo" className="nav-link">
            API Demo
          </Link>
        </nav>
        <div className="user-section">
          <span className="username">{userName}</span>
          {isLoggedIn ? (
            <Button size="sm" onClick={onLogout}>
              Logout
            </Button>
          ) : (
            <ButtonLink to="/login" size="sm">
              Login
            </ButtonLink>
          )}
        </div>
      </div>
    </header>
  );
}
