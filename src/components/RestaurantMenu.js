import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { IMG_URL, MENUS_IMG_URL } from "../../constant";
import ShimmerMenu from "./ShimmerMenu";
import useGetMenu from "../utils/useGetMenu";
import { CartContext } from "../utils/UpdateCartContext";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const RestaurantMenu = () => {
  const { resId } = useParams("");

  const menu = useGetMenu(resId);

  console.log(menu);

  const product = menu;

  const { state, dispatch } = useContext(CartContext);

  const dispatchRedux = useDispatch();

  const handlerAddItem = (item) => {
    dispatchRedux(addItem(item));
  };

  // const accordionData = [
  //   { id: 1, title: "Section 1", content: "Content for section 1" },
  //   { id: 2, title: "Section 2", content: "Content for section 2" },
  //   { id: 3, title: "Section 3", content: "Content for section 3" },
  // ];
  const [openId, setOpenId] = useState();
  const toggleAccordion = (id) => {
    setOpenId(openId === id ? null : id);
  };

  // toggleAccordion(menu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.categoryId)

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="py-14 pt-[98px] md:pt-[128px]">
      <div className="container">
        {/* <div>
      {accordionData.map(({ id, title, content }) => (
        <div key={id}>
          <button onClick={() => toggleAccordion(id)}>{title}</button>
          {openId === id && <div>{content}</div>}
        </div>
      ))}
    </div> */}

        {menu.length === 0 ? (
          <ShimmerMenu />
        ) : (
          <div className="menu-wrap flex flex-col md:flex-row gap-10">
            <div className="restaurent-details md:w-[300px] flex-none md:sticky top-[128px] h-[calc(100vh-128px)] overflow-y-auto">
              {/* <h1 className="text-3xl font-bold whitespace-nowrap mb-2">
                Restaurant Id : {resId}
              </h1> */}
              <p className="text-3xl font-bold mb-4">
                {menu?.data?.cards[2]?.card?.card?.info?.name}
              </p>
              <img
                className="h-[300px]"
                src={
                  IMG_URL +
                  menu?.data?.cards[2]?.card?.card?.info?.cloudinaryImageId
                }
                alt="reataurantImg"
              />
              <p className="text-lg mt-4">
                {menu?.data?.cards[2]?.card?.card?.info?.costForTwoMessage}
              </p>
              <p className="text-lg">
                {menu?.data?.cards[2]?.card?.card?.info?.cuisines.join(", ")}
              </p>
              <p>
                <i className="fas fa-map-marker-alt"></i>{" "}
                {menu?.data?.cards[2]?.card?.card?.info?.areaName +
                  ", " +
                  menu?.data?.cards[2]?.card?.card?.info?.locality}
              </p>
            </div>
            <div className="restaurent-menu w-full md:overflow-y-auto">
              <p className="text-2xl font-bold mb-4">
                Menu List <i className="fas fa-utensils"></i>{" "}
              </p>
              <div className="flex gap-10 flex-wrap">
                {menu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
                  ?.slice(1)
                  ?.filter((card) => card?.card?.card?.itemCards?.length > 0) // Safely filter empty cards
                  ?.map((card, index) => (
                    <div
                      key={card?.card?.card?.categoryId || index}
                      className="w-full border-collapse border rounded-lg p-5"
                    >
                      <h1
                        className="text-xl font-bold flex items-center justify-between cursor-pointer"
                        onClick={() =>
                          toggleAccordion(card?.card?.card?.categoryId)
                        }
                      >
                        {card?.card?.card?.title || "No Title"}{" "}
                        <i
                          className={`fas fa-caret-down${
                            openId === card?.card?.card?.categoryId
                              ? " rotate-180"
                              : ""
                          }`}
                        ></i>
                      </h1>
                      {openId === card?.card?.card?.categoryId && (
                        <ul className="mt-4">
                          {card?.card?.card?.itemCards?.map((element) => (
                            <li
                              className="mb-2"
                              key={element?.card?.info?.id || Math.random()}
                            >
                              <div className="bg-black text-white p-4 rounded-lg flex gap-4">
                                <div className="flex-grow">
                                  <h2 className="text-lg font-bold">
                                    {element?.card?.info?.name ||
                                      "Unnamed Item"}
                                  </h2>
                                  <p className="text-green-400 font-semibold">
                                    ₹{" "}
                                    {element?.card?.info?.price
                                      ? (
                                          element?.card?.info?.price / 100
                                        ).toFixed(2)
                                      : "N/A"}
                                    <span className="text-sm">
                                      ⚡{" "}
                                      {element?.card?.info?.offerTags?.[0]
                                        ?.title || ""}{" "}
                                      {element?.card?.info?.offerTags?.[0]
                                        ?.subTitle || ""}
                                    </span>
                                  </p>
                                  <p className="text-green-400 font-bold text-sm">
                                    ★{" "}
                                    {element?.card?.info?.ratings
                                      ?.aggregatedRating?.rating || "No Rating"}
                                    (
                                    {element?.card?.info?.ratings
                                      ?.aggregatedRating?.ratingCountV2 || "0"}
                                    )
                                  </p>
                                  <p className="text-gray-300 text-sm mt-1 line-clamp-2">
                                    {element?.card?.info?.description ||
                                      "No description available"}
                                  </p>
                                </div>
                                {element?.card?.info?.imageId && (
                                  <div className="flex-shrink-0 text-center">
                                    <img
                                      src={`${MENUS_IMG_URL}${element?.card?.info?.imageId}`}
                                      alt={element?.card?.info?.name}
                                      className="w-24 h-24 rounded-lg"
                                    />
                                    <div className="flex justify-center items-center mt-2 gap-3">
                                      {/* {(state.count == 0) ? "" :( <span className="cursor-pointer" onClick={() => dispatch({ type: "REMOVE_FROM_CART", payload: element?.card.info.id })}><i className="fas fa-minus"></i></span>)}
                                    <button className="bg-green-500 text-white px-4 py-1 rounded-lg" onClick={() => dispatch({ type: "ADD_TO_CART", payload: element?.card })}>
                                    {state.count == 0 ? " ADD " : state.count}
                                    </button>{(state.count == 0) ? "" :( <span className="cursor-pointer" onClick={() => dispatch({ type: "ADD_TO_CART", payload: element?.card })}><i className="fas fa-plus"></i></span>)} */}
                                      <button
                                        className="bg-green-500 text-white px-4 py-1 rounded-lg"
                                        onClick={() =>
                                          handlerAddItem(element?.card)
                                        }
                                      >
                                        Add
                                      </button>
                                    </div>
                                  </div>
                                )}
                              </div>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RestaurantMenu;
