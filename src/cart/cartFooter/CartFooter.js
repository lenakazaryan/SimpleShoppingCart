import "../../App.css"

function CartFooter(props) {
    return (
    <div>
    <div className="footerItems">
    <p className="subTotal">Subtotal:</p>
    <p className="total">${props.subtotal}</p>
    </div>
    
        <button className="btn">Checkout</button>
    </div>
    )
  }
  
  export default CartFooter;
  