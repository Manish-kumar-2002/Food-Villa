import { Link } from "react-router-dom";
import { MART_PRODUCT_IMG } from "../../constant";
import UseGetInstantMart from "../utils/useGetInstantMart";
import ShimmerMart from "./ShimmerMart";
import useClock from "../utils/useClock";

const InstantMart = () => {
  const martPoducts = UseGetInstantMart();
  // console.log(martPoducts);

  const specificNightTime = new Date();
  const specificDayTime = new Date();

  specificNightTime.setHours(23, 0, 0);
  specificDayTime.setHours(10, 0, 0);

  const CurrentTime = useClock();

  console.log(
    specificNightTime.toLocaleTimeString() < CurrentTime ||
      specificDayTime.toLocaleTimeString() > CurrentTime
  );

  if (
    specificNightTime.toLocaleTimeString() < CurrentTime ||
    specificDayTime.toLocaleTimeString() > CurrentTime
  ) {
    return (
      <div className="h-[60vh] flex items-center justify-center text-center flex-col">
        <strong className="text-3xl mb-5">🕛 Store Closed! 🕛</strong>
        <p className="text-xl mb-5 w-[585px]">
          Our services are currently unavailable. We are open daily from 10:00
          AM to 11:00 PM. Please visit us during our operating hours.
        </p>
        <p className="text-lg">🙏 We look forward to serving you! 🙏</p>
      </div>
    );
  }

  return (
    <div className="p-10">
      <div className="container">
        <h1 className="text-3xl font-bold">Instant Mart</h1>
        <span className="text-xl font-bold mb-5 block">
          <i className="fas fa-bolt mr-2"></i>17 Mins delivery
        </span>
        {martPoducts.length === 0 ? (
          <ShimmerMart />
        ) : (
          <div className="flex flex-wrap gap-5 justify-start">
            {martPoducts.map((element) => (
              <Link
                to={`/product/${element?.product_id}`}
                key={element?.variations[0]?.id}
                className="w-[18.7%] bg-black text-white rounded-xl shadow-md p-3 relative hover:scale-95 duration-300 ease-in"
              >
                <div className="absolute top-2 left-2 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded">
                  {
                    element?.variations[0]?.price?.offer_applied
                      ?.product_description
                  }
                </div>
                <img
                  src={MART_PRODUCT_IMG + element?.variations[0]?.images[0]}
                  alt={element?.variations[0]?.display_name}
                  className="w-full h-40 object-cover rounded"
                />
                <div className="mt-2 text-gray-300 text-xs">⏳16 mins</div>
                <h2 className="text-white font-semibold text-sm">
                  {element?.variations[0]?.display_name}
                </h2>
                <p className="text-gray-400 text-xs">
                  {element?.variations[0]?.cart_allowed_quantity?.total} Piece
                </p>
                <div className="flex items-center mt-1">
                  <span className="text-gray-300 text-xs line-through">
                    ₹{element?.variations[0]?.price?.store_price}
                  </span>
                  <span className="text-white font-bold ml-2">
                    ₹{element?.variations[0]?.price?.offer_price}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default InstantMart;
