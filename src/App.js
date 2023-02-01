import { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./components/store/cart-provider";

function App() {
  const [showCart, setCartShow] = useState(false);
  //change state when headerCartButton is clicked
  const showCartHandler = () => {
    setCartShow(true);
  };
  //change state when Modal overlay is canceled (btn & Backdrop)
  const hideCartHandler = () => {
    setCartShow(false);
  };
  return (
    <CartProvider>
      {showCart && <Cart onClose={hideCartHandler} />}
      <Header onShow={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
