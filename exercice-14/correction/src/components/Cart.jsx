import { useDispatch, useSelector } from "react-redux";
import {
  clearCart,
  decrement,
  increment,
  removeFromCart,
  selectCartItems,
  selectCartTotal,
} from "../store/cartSlice";
import { formatPrice } from "../utils";

function Cart() {
  const items = useSelector(selectCartItems);
  const total = useSelector(selectCartTotal);
  const dispatch = useDispatch();

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
                  <button onClick={() => dispatch(decrement(item.id))}>−</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => dispatch(increment(item.id))}>+</button>
                </div>
                <span className="cart-price">{formatPrice(item.price * item.quantity)}</span>
                <button className="remove" onClick={() => dispatch(removeFromCart(item.id))}>
                  ×
                </button>
              </li>
            ))}
          </ul>

          <div className="row total">
            <span>Total</span>
            <span className="price">{formatPrice(total)}</span>
          </div>
          <button className="btn btn-secondary" onClick={() => dispatch(clearCart())}>
            Vider le panier
          </button>
        </>
      )}
    </aside>
  );
}

export default Cart;
