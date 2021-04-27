import "../../../App.css";
import ChangeNumber from "../ChangeNumber";
import ChangePrice from "./changePrice";

function CartItem({ product, changeSubTotal, onDelete }) {
 
  function changeQuantity(count) {
    product.quantity = count;
    changeSubTotal();
  }

 
  return (
    <div className="border">
      <ChangeNumber changeQuantity={changeQuantity} count={product.quantity}/>
      <div className="cartItems">
        <div>
          <img className="img" src={product.image} />
          {product.image === "" ? product.image.src="defaultThumbnail.jpg": product.image.src}
        </div>
        <div>
          <p className="productName">{product.name}</p>
          <p style={{backgroundColor: product.color}} className="productColor">{product.color}</p>
        </div>
        <div>
          <p className="productPrice">{product.price}</p>
          <ChangePrice price={product}/>
          <img onClick={()=>{onDelete(product)}} className="recycle-bin" src="images/recycle-bin.png"  /> 
        </div>
      </div>
    </div>
  );
}

export default CartItem;


