import { useParams } from "react-router-dom";
import products from "../data/products";

function ProductDetails({
  cartItems,
  setCartItems,
}) {
  const { id } = useParams();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  const addToCart = () => {
    setCartItems([...cartItems, product]);
    alert("Product Added To Cart");
  };

  if (!product) {
    return <h2>Product Not Found</h2>;
  }

  return (
    <div className="details-container">
      <img
        src={product.image}
        alt={product.name}
      />

      <div>
        <h1>{product.name}</h1>

        <h2>₹{product.price}</h2>

        <p>{product.description}</p>

        <button onClick={addToCart}>
          Add To Cart
        </button>
      </div>
    </div>
  );
}

export default ProductDetails;