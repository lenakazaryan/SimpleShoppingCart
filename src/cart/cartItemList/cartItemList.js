import CartItem from "./cartItem/Cartitem";

function CartItemList({ items }) {
  const cartItems = [];
  items.map((item, index) => {
    cartItems.push(<CartItem key={index} product={item} />);
  });

  return <div>{cartItems}</div>;
}
export default CartItemList;
