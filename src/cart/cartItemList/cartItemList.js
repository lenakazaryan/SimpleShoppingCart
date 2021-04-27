import CartItem from "./cartItem/Cartitem";

function CartItemList({ items, changeSubTotal, onDelete }) {
  const cartItems = items.map((item, index) => {
    return <CartItem key={index} product={item} changeSubTotal={changeSubTotal} onDelete={onDelete}/>;
  });

  return <div>{cartItems}</div>;
}
export default CartItemList;
