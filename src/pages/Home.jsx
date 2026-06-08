import { Link } from "react-router-dom";
import products from "../data/products";
import ProductCard from "../components/ProductCard";
import "../styles/Home.css";
import "../styles/ProductCard.css";

function Home() {
  return (
    <div>
      <section className="hero">
        <h1>FashionHub</h1>
        <h2>Discover Your Style</h2>

        <p>
          Explore the latest fashion trends and
          premium collections.
        </p>

        <Link to="/products">
          <button>Shop Now</button>
        </Link>
      </section>

      <section className="featured">
        <h2>Featured Products</h2>

        <div className="products-grid">
          {products.slice(0, 6).map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;