import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { IMG_URL } from "../../constant";
import ShimmerMenu from "./ShimmerMenu";
import useGetMenu from "../utils/useGetMenu";


const RestaurantMenu = () => {
  const { resId } = useParams("");
  const menu = useGetMenu(resId);

  console.log(menu);
  console.log(menu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.categoryId);
  

  
  // const accordionData = [
  //   { id: 1, title: "Section 1", content: "Content for section 1" },
  //   { id: 2, title: "Section 2", content: "Content for section 2" },
  //   { id: 3, title: "Section 3", content: "Content for section 3" },
  // ];
  const [openId, setOpenId] = useState(menu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.categoryId);
  const toggleAccordion = (id) => {
    setOpenId(openId === id ? null : id);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="py-14">
      <div className="container">

      {/* <div>
      {accordionData.map(({ id, title, content }) => (
        <div key={id}>
          <button onClick={() => toggleAccordion(id)}>{title}</button>
          {openId === id && <div>{content}</div>}
        </div>
      ))}
    </div> */}
        
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
              <p className="text-2xl font-bold mb-4">
                Menu List <i className="fas fa-utensils"></i>{" "}
              </p>
              <div className="flex gap-10 flex-wrap">
                {menu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
                  ?.slice(1)
                  .map(
                    (card, index) =>
                      card?.card?.card?.itemCards?.length > 0 && (
                        <div
                          key={card?.card?.card?.categoryId || index}
                          className="w-full border-collapse border rounded-lg p-5"
                        >
                          <h1 className="text-xl font-bold cursor-pointer" onClick={() => toggleAccordion(card?.card?.card?.categoryId)}>
                            {card?.card?.card?.title || "No Title"}
                          </h1>
                          {
                            openId === card?.card?.card?.categoryId && <ul className="mt-4">
                            {card.card.card.itemCards.map(
                              (
                                element //Unsafe usage of optional chaining. If it short-circuit with 'undefined' the evaluation will throw TypeError
                              ) => (
                                <li
                                  className="list-disc flex gap-20 justify-between mb-2 relative after:w-full after:absolute after:border-b after:border-dotted after:block  after:bottom-2 after:left-0 after:-z-10"
                                  key={element?.card?.info?.id}
                                >
                                  <span className="bg-black block pr-2">{element?.card?.info?.name}</span>
                                  <span className="whitespace-nowrap pl-2 bg-black block">
                                    ₹{" "}
                                    {element?.card?.info?.price
                                      ? (
                                          element?.card?.info?.price / 100
                                        ).toFixed(2)
                                      : "Price unavailable"}
                                  </span>
                                </li>
                              )
                            )}
                          </ul>
                          }
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
