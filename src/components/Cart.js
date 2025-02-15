
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../utils/UpdateCartContext";


const Cart = () => {
  const { state, dispatch } = useContext(CartContext);
  console.log("Cart State:", state);
  console.log("Cart Items:", state?.cart);
  
  return (
    <div className="pb-[40px] pt-[98px] md:pt-[128px]">
        <div className="container">
            <h3 className="font-bold text-3xl">Cart</h3>
            {state.cart.length == 0 ? (<div className="flex flex-col h-[50vh] justify-center items-center"><strong className="font-bold text-3xl mb-4">Your cart is empty</strong>
            <p>You can go to <Link className="underline text-blue-600" to='/'>home page</Link> to view more restaurants</p></div>)
             : <ul>
             {
              state?.cart.map(element=>{
                return <li key={element?.info?.id}>{element?.info?.name}</li>
            })
             }
             </ul>}
        </div>
    </div>
  )
}

export default Cart