import { useEffect, useState } from "react"
import { RESTAURANT_URL } from "../../constant"
import { restaurantJson } from "../../constant"

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
          if(allRestaurants===undefined){
           setFilterRestaurants( restaurantJson.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
           setRestaurants( restaurantJson.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
           console.log("fromJson");
          }else{
            setRestaurants(allRestaurants)
            setFilterRestaurants(allRestaurants)
            console.log("fromApi");
          }
              
        }catch(error){
          console.log(error);
        }
    
      }

    return restaurants
}

export default useGetReastaurant