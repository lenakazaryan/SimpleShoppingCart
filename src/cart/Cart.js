import CartHeader from "./cartHeader/CartHeader";
import "./cartHeader/CartHeader.css";
import { useState, useEffect } from "react";
import CartFooter from "./cartFooter/CartFooter";
import CartItemList from "./cartItemList/cartItemList";

function Cart() {
  const [products, setProducts] = useState([]);
  const [subtotal, setSubtotal] = useState(0);

  useEffect(() => {
    fetch("data.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setTimeout(() => {
          setProducts(data);
        }, 2000);
      });
  }, []);

  useEffect(() => {
    changeSubTotal();
  }, [products]);

  function changeSubTotal() {
    const subtotal = products
      .map((item) => {
        const price = item.price.slice(1); 
        return Number(price) * Number(item.quantity);
      })
      .reduce((agr, val) => {
        return agr + val;
      }, 0);

    setSubtotal(subtotal);
  }

  return (
    <div className="cart">
      <CartHeader />
      {products.length ? (
        <div>
          <CartItemList
            onDelete={(product) => {
              setProducts(products.filter((el) => el.id !== product.id));
            }}
            items={products}
            changeSubTotal={changeSubTotal}
          />
        </div>
      ) : (
        "Card is empty"
      )}
      <CartFooter subtotal={subtotal} />
    </div>
  );
}

export default Cart;
