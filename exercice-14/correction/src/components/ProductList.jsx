import products from "../data/products";
import ProductCard from "./ProductCard";

function ProductList() {
  return (
    <section>
      <h2 className="section-title">Nos produits</h2>
      <div className="products">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

export default ProductList;
