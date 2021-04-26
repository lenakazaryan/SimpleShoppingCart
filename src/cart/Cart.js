import CartHeader from "./cartHeader/CartHeader";
import "./cartHeader/CartHeader.css";
import { useState } from "react";
import CartFooter from "./cartFooter/CartFooter";
import CartItemList from "./cartItemList/cartItemList";


function Cart() {
  const [products, setProducts] = useState([]);
  

  fetch('data.json')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    setProducts(data);
  });


  // let subtotal = products.items.map((item)=>{
  //   return item.price;
  // }).reduce((agr, val)=>{
  //   return agr + val
  // },0)
  

  return (
    <div className="cart">
      <CartHeader />
      <CartItemList items={products} />
      <CartFooter />
    </div>
  );
}

export default Cart;

