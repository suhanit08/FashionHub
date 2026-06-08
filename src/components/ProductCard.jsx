import { Link } from "react-router-dom";

function getPlaceholderImage(name) {
  const label = encodeURIComponent(name);
  return `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='250' height='250' viewBox='0 0 250 250'%3E%3Crect width='250' height='250' fill='%233a3f51'/%3E%3Ctext x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-family='Arial,Helvetica,sans-serif' font-size='20' fill='%23ffffff'%3E${label}%3C/text%3E%3C/svg%3E`;
}

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img
        src={product.image}
        alt={product.name}
        onError={(e) => {
          e.currentTarget.onerror = null;
          e.currentTarget.src = getPlaceholderImage(product.name);
        }}
      />

      <h3>{product.name}</h3>

      <p>₹{product.price}</p>

      <Link to={`/products/${product.id}`}>
        <button>View Details</button>
      </Link>
    </div>
  );
}

export default ProductCard;