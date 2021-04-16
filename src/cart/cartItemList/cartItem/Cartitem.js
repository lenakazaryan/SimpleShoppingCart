import "../../../App.css";

function CartItem({ product }) {
  return (
    <div>
      <div className="cartItems">
        <div>
          <img className="img" src={product.image} />
        </div>
        <div>
          <p className="productName">{product.name}</p>
          <p className="productColor">{product.color}</p>
          <select className="productQuantity">
            <option value="1">{product.quantity}</option>
          </select>
        </div>
        <div>
          <p className="productPrice">${product.price}</p>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
