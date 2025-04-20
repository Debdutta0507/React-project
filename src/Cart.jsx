const intl = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD", // feel free to change to your local currency
});
const Cart = ({ cart, checkout }) => {
  let price = 0;
  for (let i = 0; i < cart.length; i++) {
    price += cart[i].price;
  }
  console.log("price", price, cart);
  return (
    <div className="cart">
      <h2></h2>
      <ul>
        {cart.map((pizza) => (
          <li>
            <span className="size">{pizza.size}-</span>
            <span className="type">{pizza.type}-</span>
            <span className="price">{pizza.price}</span>
          </li>
        ))}
      </ul>
      <p>Total: {intl.format(price)}</p>
      <button onClick={checkout}>Checkout</button>
    </div>
  );
};

export default Cart;
