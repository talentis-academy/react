import { formatPrice } from "../utils";

function Cart() {
  // TODO (exercice) : lire les lignes et le total du panier dans le store (useSelector)
  const items = [];
  const total = 0;

  // TODO (exercice) : brancher les boutons −, +, × et « Vider le panier » (useDispatch)

  return (
    <aside className="card cart">
      <h2 className="section-title">Mon panier</h2>

      {items.length === 0 ? (
        <p className="empty">Votre panier est vide.</p>
      ) : (
        <>
          <ul className="cart-lines">
            {items.map((item) => (
              <li key={item.id} className="cart-line">
                <span className="cart-name">
                  {item.icon} {item.name}
                </span>
                <div className="qty">
                  <button>−</button>
                  <span>{item.quantity}</span>
                  <button>+</button>
                </div>
                <span className="cart-price">{formatPrice(item.price * item.quantity)}</span>
                <button className="remove">×</button>
              </li>
            ))}
          </ul>

          <div className="row total">
            <span>Total</span>
            <span className="price">{formatPrice(total)}</span>
          </div>
          <button className="btn btn-secondary">Vider le panier</button>
        </>
      )}
    </aside>
  );
}

export default Cart;
