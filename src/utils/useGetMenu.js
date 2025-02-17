import { useState, useEffect } from "react";
import { RESTAURANT_MENU } from "../../constant";

const useGetMenu = (resId) => {
  const [menuGet, setMenuGet] = useState("");

  useEffect(() => {
    getRestaurantMenuData();
  }, []);

  async function getRestaurantMenuData() {
    const data = await fetch(`${RESTAURANT_MENU}${resId}`);
    const reponseData = await data.json();
    // console.log(reponseData);
    
    setMenuGet(reponseData);
  }

  return menuGet;
};

export default useGetMenu;
