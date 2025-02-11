import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_URL } from "../../Constant";
import ShimmerMenu from "./ShimmerMenu";

const RestaurantMenu = () => {
  const { resId } = useParams("");
  const [menu, setMenu] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  // console.log(menu?.data?.cards[2]?.card?.card?.info?.name);

  useEffect(() => {
    getRestaurantMenuData();
  }, []);

  async function getRestaurantMenuData() {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=${resId}`
    );
    const reponseData = await data.json();
    // console.log(reponseData);
    setMenu(reponseData);
  }

  return (
    <div className="py-14">
      <div className="container">
        {menu?.data?.cards[2]?.card?.card?.info?.name == undefined ? (
          <ShimmerMenu />
        ) : (
          <div className="menu-wrap flex gap-10">
            <div className="restaurent-details">
              <h1 className="text-3xl font-bold whitespace-nowrap mb-2">
                Restaurant Id : {resId}
              </h1>
              <p className="text-xl mb-4">
                Restaurant Name : {menu?.data?.cards[2]?.card?.card?.info?.name}
              </p>
              <img
                width={200}
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
            <div className="restaurent-menu">
              <p className="text-2xl font-bold mb-4">Menu List <i class="fas fa-utensils"></i>  </p>
              <div className="flex gap-10 flex-wrap">
                {/* <ul className="w-[46%]">
                    {menu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards.map(
                      (element) => (
                        <li
                          className="list-disc flex gap-20 justify-between mb-2"
                          key={element?.card?.info?.id}
                        >
                          <span>{element?.card?.info?.name}</span>  <span className="whitespace-nowrap">₹ {(element?.card?.info?.price / 100).toFixed(2) || "not mentioned"}</span>
                        </li>
                      )
                    )}
                  </ul> */}
                {menu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
                  ?.slice(1)
                  .map(
                    (card, index) =>
//                         
//                     && (AND): Executes the right-hand side only if the left-hand side condition is true.  (Short-circuit evaluation) AND (&&) ensures we only render lists that have data.
//                     || (OR): Executes the right-hand side if the left-hand side condition is false or falsy.  OR (||) would cause empty lists to be rendered when itemCards is missing or empty.
//                       The ?? (Nullish Coalescing Operator) is used to provide a default value only when the left-hand side is null or undefined.
                      (card?.card?.card?.itemCards?.length > 0) && (
                        <div
                          key={card?.card?.card?.categoryId || index}
                          className="w-[46%] border-collapse border rounded-lg p-5"
                        >
                          <h1 className="text-xl mb-4 font-bold underline">
                            {card?.card?.card?.title || "No Title"}
                          </h1>
                          <ul>
                            {(card?.card?.card?.itemCards).map((element) => (
                              <li
                                className="list-disc flex gap-20 justify-between mb-2"
                                key={element?.card?.info?.id}
                              >
                                <span>{element?.card?.info?.name}</span>
                                <span className="whitespace-nowrap">
                                  ₹{" "}
                                  {element?.card?.info?.price
                                    ? (
                                        element?.card?.info?.price / 100
                                      ).toFixed(2)
                                    : "Price unavailable"}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )
                  )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RestaurantMenu;
