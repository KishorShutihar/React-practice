import React from "react";

interface Props {
  cartItemsCount: number;
}

export const NavBar = ({ cartItemsCount }: Props) => {
  return <div>Cart Items count: {cartItemsCount}</div>;
};
