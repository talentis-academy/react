import "../styles.css";
import Header from "../components/Header";
import ProductList from "../components/ProductList";
import Cart from "../components/Cart";

function Home() {
  return (
    <main className="page">
      <Header />
      <div className="layout">
        <ProductList />
        <Cart />
      </div>
    </main>
  );
}

export default Home;
