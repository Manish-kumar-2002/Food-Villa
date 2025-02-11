import { useEffect, useState } from "react"
import { RESTAURANT_URL } from "../../constant"

const useGetReastaurant = (setFilterRestaurants) => {

    const [restaurants,setRestaurants] = useState([])  

    useEffect(()=>{
        getRestaurants()
      },[])
    
    
      async function getRestaurants() {
        try{
          const response = await fetch(RESTAURANT_URL);
          const data = await response.json();
          const allRestaurants = data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
          setRestaurants(allRestaurants)
          setFilterRestaurants(allRestaurants)
        }catch(error){
          console.log(error);
        }
    
      }

    return restaurants
}

export default useGetReastaurant