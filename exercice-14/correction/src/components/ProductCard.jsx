import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";
import { formatPrice } from "../utils";

function ProductCard({ product }) {
  const dispatch = useDispatch();

  return (
    <div className="card">
      <div className="product-icon">{product.icon}</div>
      <h3 className="product-name">{product.name}</h3>
      <div className="color">
        <span className="circle" style={{ backgroundColor: product.colorCode }}></span>
        <span>{product.color}</span>
      </div>
      <span className={`badge ${product.available ? "available" : "unavailable"}`}>
        {product.available ? "Available" : "Not Available"}
      </span>
      <p className="price">{formatPrice(product.price)}</p>
      <button
        className="btn"
        disabled={!product.available}
        onClick={() => dispatch(addToCart(product))}
      >
        Ajouter au panier
      </button>
    </div>
  );
}

export default ProductCard;
