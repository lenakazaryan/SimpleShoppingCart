import CartHeader from "./cartHeader/CartHeader";
import "./cartHeader/CartHeader.css";
import { useState } from "react";
import CartFooter from "./cartFooter/CartFooter";
import CartItemList from "./cartItemList/cartItemList";

function Cart() {
  const [products, setProducts] = useState({
    items: [
      {
        price: 100,
        image: "images/blender.jpg",
        quantity: 1,
        name: "Blender",
        color: "Jack Black/Red",
      },
      {
        price: 100,
        image: "images/microwave.png",
        quantity: 1,
        name: "Microwave",
        color: "Jack Black/Red",
      },
    ],
    subtotal: 200,
  });

  return (
    <div className="cart">
      <CartHeader />
      <CartItemList items={products.items} />
      <CartFooter subtotal={products.subtotal} />
    </div>
  );
}

export default Cart;
