import { Link } from "react-router-dom";

export default function Header() {
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
          <span className="username">Guest</span>
        </div>
      </div>
    </header>
  );
}
