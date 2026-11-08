import { formatPrice } from "../utils";

function ProductCard({ product }) {
  // TODO (exercice) : au clic, dispatcher l'action addToCart(product) (useDispatch)
  const handleAdd = () => {
    console.log("Ajouter au panier :", product.name);
  };

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
      <button className="btn" disabled={!product.available} onClick={handleAdd}>
        Ajouter au panier
      </button>
    </div>
  );
}

export default ProductCard;
