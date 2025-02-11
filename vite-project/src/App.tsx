import { ListGroup } from "./components/ListGroup";
import { Button } from "./components/Button";
import { Like } from "./components/Like";
import { useState } from "react";
import { produce } from "immer";
import { Cart } from "./components/Cart";
import { NavBar } from "./components/NavBar";

function App() {
  const [cartItems, setCartItems] = useState(["Product 1", "Product 2"]);

  const addCart = () => {
    setCartItems(
      produce((draft) => {
        draft.push(`Product ${cartItems.length + 1}`);
      })
    );
  };

  return (
    <>
      <NavBar cartItemsCount={cartItems.length}></NavBar>
      <Cart cartItems={cartItems} addCart={addCart} />
    </>
  );
}

export default App;
