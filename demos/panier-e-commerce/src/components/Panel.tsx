import { useState } from "react";

const products = [
  { id: 1, name: "T-shirt", price: 20 },
  { id: 2, name: "Casquette", price: 15 },
  { id: 3, name: "Chaussures", price: 80 },
];

function Panel() {
  const [myProducts, setMyProducts] = useState<any>(products);
  return (
    <div className="panel">
      <h1>Panel Component</h1>
      <h2>This is a reusable panel component.</h2>
      {myProducts.length > 0 ? (
        <div className="products">
          {myProducts.map((product) => (
            <div key={product.id} className="product">
              <div>{product.name}</div>
              <div>{product.price}</div>
            </div>
          ))}
        </div>
      ) : (
        <div className="empty">{"Your panel is empty"}</div>
      )}
      <button
        className="btn"
        onClick={() => {
          setMyProducts(products);
        }}
      >
        Reload Panel
      </button>
      <button
        className="btn"
        onClick={() => {
          setMyProducts([]);
        }}
      >
        Clear Panel
      </button>
    </div>
  );
}

export default Panel;
