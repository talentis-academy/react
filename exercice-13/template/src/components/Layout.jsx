// Layout = Header + Footer + la page au milieu
// TODO (exercice) : les liens avec NavLink, et la page enfant avec <Outlet /> à la place de children (react-router)
function Layout({ children }) {
  return (
    <div className="layout">
      <header className="header">
        <span className="logo">Car App</span>
        <nav className="nav">
          <a href="/">Home</a>
          {/* TODO (exercice) : connecté → un bouton « Se déconnecter » (className="nav-btn") à la place du lien Login */}
          <a href="/login">Login</a>
        </nav>
      </header>

      <main className="main">{children}</main>

      <footer className="footer">Footer simple</footer>
    </div>
  );
}

export default Layout;
