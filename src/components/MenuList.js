import { useState } from "react";

import MenuItemList from "./MenuItemList";

const MenuList = ({ menu }) => {
    
    const menuList = menu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
                
    const [openId, setOpenId] = useState();
    const toggleAccordion = (id) => {
        setOpenId(openId === id ? null : id);
    };

    return (
        <div className="flex gap-10 flex-wrap">
            {menuList?.slice(1)
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
                                className={`fas fa-caret-down${openId === card?.card?.card?.categoryId
                                    ? " rotate-180"
                                    : ""
                                    }`}
                            ></i>
                        </h1>
                        {openId === card?.card?.card?.categoryId && (
                            <ul className="mt-4">
                                {card?.card?.card?.itemCards?.map((element) => (
                                    <MenuItemList key={card?.card?.card?.itemCards?.card?.info?.id || Math.random()} menuItemList={element} />
                                ))}
                            </ul>
                        )}
                    </div>
                ))}
        </div>
    )
}

export default MenuList