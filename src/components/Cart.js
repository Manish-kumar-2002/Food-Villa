import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../utils/UpdateCartContext";
import { MENUS_IMG_URL } from "../../constant";

const Cart = () => {
  const { state, dispatch } = useContext(CartContext);
  console.log("Cart State:", state);
  console.log("Cart Items:", state?.cart.length);
  let updatedPrice = 0;

  console.log(state?.cart?.info?.id);
  

  state?.cart.map(
    (element) => (updatedPrice = element?.info?.price + updatedPrice)
  );
  updatedPrice = (updatedPrice / 100).toFixed(2);


  return (
    <div className="pb-[40px] pt-[98px] md:pt-[128px]">
      <div className="container">
        {state.cart.length == 0 ? (
          <div className="flex flex-col h-[50vh] justify-center items-center">
            <strong className="font-bold text-3xl mb-4">
              Your cart is empty
            </strong>
            <p>
              You can go to{" "}
              <Link className="underline text-blue-600" to="/">
                home page
              </Link>{" "}
              to view more restaurants
            </p>
          </div>
        ) : (
          <div className="bg-black text-white p-4">
            <div className="">
              {/* <div className="flex items-center gap-4 border-b pb-4">
              <img
              src="/kulfi.jpg"
              alt="Grameen Kulfi"
              className="w-12 h-12 rounded-full"
              />
              <div>
              <h2 className="text-xl font-bold">Grameen Kulfi</h2>
              <p className="text-gray-400">Central Bangalore</p>
              </div>
              </div> */}
              <h3 className="font-bold text-3xl mb-5">Cart</h3>

              <div className="mt-4 space-y-4">
                {state?.cart.map((element, index) => (
                  <div
                    key={element?.info?.id}
                    className="flex justify-between items-center border-b pb-4 px-2"
                  >
                    <div className="flex items-center gap-2">
                      <img
                        width={60}
                        height={60}
                        src={`${MENUS_IMG_URL}${element?.info?.imageId}`}
                        alt={element?.info?.name}
                        className=" rounded-lg"
                      />
                      <p>{element?.info?.name}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <button className="bg-gray-700 px-2 rounded">-</button>
                      <span>1</span>
                      <button onClick={()=>(addFood)} className="bg-gray-700 px-2 rounded">+</button>
                      <span className="text-green-400 min-w-20 text-end">
                        {/* ₹{(index + 1) * 59.32} */}
                        ₹{" "}
                        {element?.info?.price
                          ? (element?.info?.price / 100).toFixed(2)
                          : "N/A"}
                      </span>
                      <button className="ml-2" onClick={() => dispatch({ type: "REMOVE_FROM_CART", payload: element?.info?.id })}><i className="fas fa-trash text-red-500"></i></button>
                    </div>
                  </div>
                ))}
              </div>

              <div className=" pt-4 space-y-2">
                <div className="flex justify-between">
                  <span>Item Total</span>
                  <span>₹{" "}{updatedPrice}</span>
                </div>
                <div className="flex justify-between">
                  <span>Delivery Fee | 4.5 kms</span>
                  <span>₹{" "}22</span>
                </div>
                <div className="flex justify-between">
                  <span>Platform Fee</span>
                  <span className="text-blue-400">₹{" "}6</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span>GST and Restaurant Charges</span>
                  <span>₹{" "}67.01</span>
                </div>
                <div className="flex justify-between font-bold text-lg">
                  <span>TO PAY</span>
                  <span>₹{" "}{+updatedPrice+22+6+67.01}</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
