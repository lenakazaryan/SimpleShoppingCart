import "../../../App.css";
import ChangeNumber from "../../ChangeNumber";

function CartItem({ product }) {

  function changeQuantity(count) {
    product.quantity = count;
    console.log(count)
  }
  
  return (
    <div>
      <ChangeNumber count={changeQuantity}/>

      <div className="cartItems">
        <div>
          <img className="img" src={product.image} />
        </div>
        <div>
          <p className="productName">{product.name}</p>
          <p className="productColor">{product.color}</p>
        </div>
        <div>
          <p className="productPrice">${product.price}</p>
          <p>${product.subtotal}</p>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
