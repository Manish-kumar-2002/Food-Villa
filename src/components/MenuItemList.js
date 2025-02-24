import { useState } from "react";
import { IMG_URL, MENUS_IMG_URL } from "../../constant";
// import { CartContext } from "../utils/UpdateCartContext";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../utils/cartSlice";

const MenuItemList = ({ menuItemList }) => {
    const [added, setAdded] = useState(false)
    //   const { state, dispatch } = useContext(CartContext);


    // const localStorageMenulist = useSelector((store) => (store.cart.items))

    // localStorageMenulist.map((item)=>{
    //     if((item?.info?.id==menuItemList?.card?.info?.id)){
    //         setAdded(true)
    //     }
    // })

    const dispatchRedux = useDispatch();

    const handlerAddItem = (item) => {
        dispatchRedux(addItem(item));
        setAdded(true)
    };

    const handlerRemoveItem = (item) => {
        console.log(item);
        dispatchRedux(removeItem(item));
        setAdded(false)
    };
    return (
        <li className="mb-2">
            <div className="bg-black text-white p-4 rounded-lg flex gap-4">
                <div className="flex-grow">
                    <h2 className="text-lg font-bold">
                        {menuItemList?.card?.info?.name ||
                            "Unnamed Item"}
                    </h2>
                    <p className="text-green-400 font-semibold">
                        ₹{" "}
                        {menuItemList?.card?.info?.price
                            ? (
                                menuItemList?.card?.info?.price / 100
                            ).toFixed(2)
                            : "N/A"}
                        <span className="text-sm">
                            ⚡{" "}
                            {menuItemList?.card?.info?.offerTags?.[0]
                                ?.title || ""}{" "}
                            {menuItemList?.card?.info?.offerTags?.[0]
                                ?.subTitle || ""}
                        </span>
                    </p>
                    <p className="text-green-400 font-bold text-sm">
                        ★{" "}
                        {menuItemList?.card?.info?.ratings
                            ?.aggregatedRating?.rating || "No Rating"}
                        (
                        {menuItemList?.card?.info?.ratings
                            ?.aggregatedRating?.ratingCountV2 || "0"}
                        )
                    </p>
                    <p className="text-gray-300 text-sm mt-1 line-clamp-2">
                        {menuItemList?.card?.info?.description ||
                            "No description available"}
                    </p>
                </div>
                {menuItemList?.card?.info?.imageId && (
                    <div className="flex-shrink-0 text-center">
                        <img
                            src={`${MENUS_IMG_URL}${menuItemList?.card?.info?.imageId}`}
                            alt={menuItemList?.card?.info?.name}
                            className="w-24 h-24 rounded-lg"
                        />
                        <div className="flex justify-center items-center mt-2 gap-3">
                            {/* {(state.count == 0) ? "" :( <span className="cursor-pointer" onClick={() => dispatch({ type: "REMOVE_FROM_CART", payload: menuItemList?.card.info.id })}><i className="fas fa-minus"></i></span>)}
                                    <button className="bg-green-500 text-white px-4 py-1 rounded-lg" onClick={() => dispatch({ type: "ADD_TO_CART", payload: menuItemList?.card })}>
                                    {state.count == 0 ? " ADD " : state.count}
                                    </button>{(state.count == 0) ? "" :( <span className="cursor-pointer" onClick={() => dispatch({ type: "ADD_TO_CART", payload: menuItemList?.card })}><i className="fas fa-plus"></i></span>)} */}
                            {/* {!added ? "" : (<span className="cursor-pointer" onClick={() =>
                                handlerAddItem(menuItemList?.card)
                            }><i className="fas fa-minus"></i></span>)} */}
                            {
                                added ? <button
                                    className="bg-red-500 text-white px-4 py-1 rounded-lg"
                                    onClick={() => handlerRemoveItem(menuItemList?.card?.info?.id)}
                                >
                                    Remove
                                </button> : <button
                                    className="bg-green-500 text-white px-4 py-1 rounded-lg"
                                    onClick={() =>
                                        handlerAddItem(menuItemList?.card)
                                    }
                                >
                                    Add
                                </button>
                            }
                            {/* {!added ? "" : (<span className="cursor-pointer" onClick={() => handlerRemoveItem(menuItemList?.card?.info?.id)}><i className="fas fa-plus"></i></span>)} */}
                        </div>
                    </div>
                )}
            </div>
        </li >
    )
}

export default MenuItemList