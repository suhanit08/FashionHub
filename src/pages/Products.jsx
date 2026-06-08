import { useState } from "react";
import products from "../data/products";
import ProductCard from "../components/ProductCard";
import "../styles/ProductCard.css";

function Products() {
  const [search, setSearch] = useState("");
  const [category, setCategory] =
    useState("All");

  const filteredProducts =
    products.filter((product) => {
      return (
        product.name
          .toLowerCase()
          .includes(search.toLowerCase()) &&
        (category === "All" ||
          product.category === category)
      );
    });

  return (
    <div className="products-page">
      <h1>Fashion Collection</h1>

      <div className="filters">
        <input
          type="text"
          placeholder="Search Product"
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />

        <select
          value={category}
          onChange={(e) =>
            setCategory(e.target.value)
          }
        >
          <option>All</option>
          <option>Men</option>
          <option>Women</option>
          <option>Footwear</option>
          <option>Accessories</option>
        </select>
      </div>

      <div className="products-grid">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </div>
  );
}

export default Products;