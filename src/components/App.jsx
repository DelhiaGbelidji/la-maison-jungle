import Banner from "./Banner";
import Cart from "./Cart";
import Recommendation from "./Recommendation";
import ShoppingList from "./ShoppingList";
import logo from "../assets/logo.png"

function App() {
  return (
    <>
      <Banner>
      <div className="lmj-banner-row">
      <img src={logo} alt="La maison jungle" className="lmj-logo" />
        <h1 className="lmj-title">La maison jungle</h1>
        </div>

        <Recommendation/>
      </Banner>
      <Cart />
      <ShoppingList />
    </>
  );
}

export default App;
