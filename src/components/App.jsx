import Banner from "./Banner";
import Cart from "./Cart";
import Recommendation from "./Recommendation";
import ShoppingList from "./ShoppingList";
import logo from "../assets/logo.png"
import Footer from "./Footer.tsx";

function App() {
  return (
    <>
      <Banner>
        <div className="lmj-banner-row">
          <img src={logo} alt="La maison jungle" className="lmj-logo" />
          <h1 className="lmj-title">La maison jungle</h1>
          <Recommendation/>
        </div>
      </Banner>
      <Cart />

      <ShoppingList />
      <Footer/>
    </>
  );
}

export default App;
