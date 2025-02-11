import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { RESTAURANT_URL } from "../../constant";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";


function filterRestautrant(search,restaurants){
  let filterdata = restaurants.filter((element)=>{
    // console.log(((element.info.name).toLowerCase()).includes(search.toLowerCase()));
    
    return(((element.info.name).toLowerCase()).includes(search.toLowerCase()))
  })
  // console.log(restaurants);
  
  // console.log(filterdata);
  return filterdata; 
}


const MainSection = function () {

  
  const [restaurants,setRestaurants] = useState([])  
  const [filterRestaurants,setFilterRestaurants] = useState([])  
  const [search,setSearch] = useState('')
  // console.log(restaurants);
  
  
  useEffect(()=>{
    // console.log("useState()");
    getRestaurants()
  },[])


  async function getRestaurants() {
    try{
      const response = await fetch(RESTAURANT_URL);
      const data = await response.json();
      const allRestaurants = data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
      // console.log(allRestaurants);
      setRestaurants(allRestaurants)
      setFilterRestaurants(allRestaurants)
    }catch(error){
      console.log(error);
    }

  }
  
  // console.log("render()");

  return (
    <div className="py-10">
      <div className="container">
        <div className="flex justify-start mb-8">
          <input type="text" name="search" value={search} className="text-black bg-slate-400 rounded-md px-2" onChange={(e)=>{setSearch(e.target.value);(setFilterRestaurants(filterRestautrant(search,restaurants)))                                                      }}  />
          <button className="menu-block !rounded-md !ml-4" onClick={()=>(setFilterRestaurants(filterRestautrant(search,restaurants)))}>search</button>
        </div>
        
       {restaurants?.length === 0 ? <Shimmer /> : (<div className="flex flex-wrap gap-5 justify-start">
          {filterRestaurants.map((restaurant,index) => (
            <Link className="w-[23.8%]"  key={restaurant.info.id} to={`/restaurant/${restaurant.info.id}`}><RestaurantCard {...restaurant.info} /></Link>
          ))}
        </div>)}
      </div>
    </div>
  );
};
export default MainSection;
