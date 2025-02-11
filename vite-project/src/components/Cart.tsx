import React from "react";

interface Props {
  cartItems: string[];
  addCart: () => void;
}

export const Cart = ({ cartItems, addCart }: Props) => {
  return (
    <>
      <ul>
        <h1>Cart</h1>
        {cartItems.map((cartItem, index) => (
          <li key={index}>{cartItem}</li>
        ))}
      </ul>
      <button onClick={addCart}>Add Cart Items</button>
    </>
  );
};
