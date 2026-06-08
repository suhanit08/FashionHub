function Cart({
  cartItems,
  setCartItems,
}) {
  const removeItem = (index) => {
    const updatedCart = [...cartItems];

    updatedCart.splice(index, 1);

    setCartItems(updatedCart);
  };

  const totalPrice =
    cartItems.reduce(
      (total, item) =>
        total + item.price,
      0
    );

  if (cartItems.length === 0) {
    return (
      <h2 style={{ textAlign: "center" }}>
        Your Cart is Empty
      </h2>
    );
  }

  return (
    <div className="cart-page">
      <h1>Shopping Cart</h1>

      {cartItems.map((item, index) => (
        <div
          key={index}
          className="cart-item"
        >
          <h3>{item.name}</h3>

          <p>₹{item.price}</p>

          <button
            onClick={() =>
              removeItem(index)
            }
          >
            Remove
          </button>
        </div>
      ))}

      <h2>Total: ₹{totalPrice}</h2>
    </div>
  );
}

export default Cart;