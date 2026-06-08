import { useState } from "react";
import productsData from "../data/products";
import ProductList from "../components/ProductList";

function ProductContainer() {

  const [products] = useState(productsData);

  return (
    <div>
      <ProductList products={products} />
    </div>
  );
}

export default ProductContainer;