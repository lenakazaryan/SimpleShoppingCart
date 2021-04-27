import Cart from "./cart/Cart";
import "./cart/loading.css";


function App(){

    
    return (
        <div className="App">
         <Cart/>
         <div className="loading-conatiner">
         <div id='hideMe' className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
         </div>
        </div>
    )
}

export default App;