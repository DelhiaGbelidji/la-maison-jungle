import { useState } from "react";

import Banner from "./Banner";
import Cart from "./Cart";
import Recommendation from "./Recommendation";
import ShoppingList from "./ShoppingList";
import logo from "../assets/logo.png"
import Footer from "./Footer.tsx";

function App() {
  const [cart, setCart] = useState(0)

  return (
    <>
      <Banner>
        <div className="lmj-banner-row">
          <img src={logo} alt="La maison jungle" className="lmj-logo" />
          <h1 className="lmj-title">La maison jungle</h1>
          <Recommendation/>
        </div>
      </Banner>
      <div className='lmj-layout-inner'>
				<Cart cart={cart} setCart={setCart}/>
				<ShoppingList cart={cart} setCart={setCart}/>
			</div>
			<Footer />
    </>
  );
}

export default App;
