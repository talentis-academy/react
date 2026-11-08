function Header() {
  // TODO (exercice) : lire le nombre d'articles du panier dans le store (useSelector)
  const count = 0;

  return (
    <header className="header">
      <h1 className="header-title">Apple Store</h1>
      <div className="cart-badge">
        🛒 Panier <span className="cart-count">{count}</span>
      </div>
    </header>
  );
}

export default Header;
