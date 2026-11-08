import { useSelector } from "react-redux";
import { selectCartCount } from "../store/cartSlice";

function Header() {
  // Le nombre d'articles vient du store : il se met à jour partout en même temps
  const count = useSelector(selectCartCount);

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
