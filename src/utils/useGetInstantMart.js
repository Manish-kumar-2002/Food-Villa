import { useEffect, useState } from "react";
import { instantMartJson } from "../../constant";

const UseGetInstantMart = () => {
  const [instantMartProduct, setInstantMartProduct] = useState([]);

  useEffect(() => {
    getInstaMart();
  }, []);

  async function getInstaMart() {
    const response = await fetch(
      "https://www.swiggy.com/api/instamart/home?clientId=INSTAMART-APP"
    );
    const data = await response.json();
    const martProduct = data?.data?.widgets[4]?.data;
    if (martProduct === undefined) {
      setInstantMartProduct(instantMartJson?.data?.widgets[3]?.data);
      console.log("fromJson");
    } else {
      setInstantMartProduct(martProduct);
      console.log("fromApi");
    }
  }

  return instantMartProduct;

  // return data?.data?.widgets[3]?.data
};

export default UseGetInstantMart;
