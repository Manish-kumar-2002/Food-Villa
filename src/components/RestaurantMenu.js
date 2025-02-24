import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { IMG_URL, MENUS_IMG_URL } from "../../constant";
import ShimmerMenu from "./ShimmerMenu";
import useGetMenu from "../utils/useGetMenu";

import MenuList from "./MenuList";

const RestaurantMenu = () => {
  const { resId } = useParams("");

  const menu = useGetMenu(resId);

  console.log(menu);

  const product = menu;

  

  

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="py-14 pt-[98px] md:pt-[128px]">
      <div className="container">


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
              <MenuList menu={menu} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RestaurantMenu;
