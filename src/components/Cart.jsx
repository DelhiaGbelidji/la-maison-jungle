import "../styles/Cart.css";

function Cart() {
  const cart = "Panier";
  const monsteraPrice = 8;
  const ivyPrice = 10;
  const bunchPrice = 15;

  return (
    <div className="lmj-cart">
      <p>{cart}</p>
      <ul>
        <li>Monstera: {monsteraPrice}€</li>
        <li>Lierre: {ivyPrice}€</li>
        <li>Bouquet de fleurs: {bunchPrice}€</li>
      </ul>
      <p>Total: {monsteraPrice + ivyPrice + bunchPrice}€</p>
    </div>
  );
}
export default Cart;
