import { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterRestautrant } from "../utils/helper";
import useGetReastaurant from "../utils/useGetRestaurant";
import useOnlineStatus from "../utils/useOnlineStatus";

const MainSection = function () {
  const [filterRestaurants, setFilterRestaurants] = useState([]);

  let restaurants = useGetReastaurant(setFilterRestaurants);

  const [search, setSearch] = useState("");

  const isOnline = useOnlineStatus();

  console.log(restaurants);
  

  // early return
  if(isOnline){
    return "net off"
  }

  return (
    <div className="py-10">
      <div className="container">
        <div className="flex justify-start mb-8">
          <input
            type="text"
            name="search"
            value={search}
            className="text-black bg-slate-400 rounded-md px-2"
            onChange={(e) => {
              setSearch(e.target.value);
              setFilterRestaurants(filterRestautrant(search, restaurants));
            }}
          />
          <button
            className="menu-block !rounded-md !ml-4"
            onClick={() =>
              setFilterRestaurants(filterRestautrant(search, restaurants))
            }
          >
            search
          </button>
        </div>

        {restaurants.length === 0 ? (
          <Shimmer />
        ) : (
          <div className="flex flex-wrap gap-5 justify-start">
            {filterRestaurants.map((restaurant, index) => (
              <Link
                className="w-[100%] md:w-[31.6%]  lg:w-[23.7%]"
                key={restaurant.info.id}
                to={`/restaurant/${restaurant.info.id}`}
              >
                <RestaurantCard {...restaurant.info} />
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
export default MainSection;
