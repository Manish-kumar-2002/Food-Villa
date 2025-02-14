import { useParams } from "react-router-dom";
import UseGetInstantMart from "../utils/useGetInstantMart";
import { MART_PRODUCT_IMG } from "../../constant";
import { useEffect, useState } from "react";
import ShimmerMenu from "./ShimmerMenu";

const MartProduct = () => {
  const product = UseGetInstantMart();
  console.log(product);

  const { productId } = useParams();
  const [filterProduct, setFilterProduct] = useState("");

  useEffect(() => {
    setFilterProduct(() => {
      return product.filter((element) => {
        return element.product_id == productId;
      });
    });
  }, [filterProduct]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  console.log(filterProduct);

  return  (
    <div className="py-10">
      <div className="container">
        {
          filterProduct.length === 0 ? <ShimmerMenu /> : <div className="flex flex-col md:flex-row">
            <div className="lg:w-[500px] bg-black rounded-xl shadow-md p-4 relative">
          {/* Discount Badge */}
          <div className="absolute top-2 left-2 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded">
            {
              filterProduct[0]?.variations[0]?.price?.offer_applied
                ?.product_description
            }
          </div>

          <img
            src={MART_PRODUCT_IMG + filterProduct[0]?.variations[0]?.images[0]}
            alt="Product"
            className="w-full max-h-72 object-cover rounded"
          />

          {/* Delivery Time */}
          <div className="mt-2 text-white text-xs flex items-center">
            <span>⏳ 12 mins</span>
          </div>

          {/* Product Info */}
          <h2 className="text-white font-semibold text-xl  mt-1">
            {filterProduct[0]?.variations[0]?.display_name}
          </h2>
          <p className="text-white text-md">
            {filterProduct[0]?.variations[0]?.cart_allowed_quantity?.total}{" "}
            Piece
          </p>

          {/* Price Section */}
          <div className="flex items-center mt-1">
            <span className="text-white font-bold text-lg">
              ₹{filterProduct[0]?.variations[0]?.price?.offer_price}
            </span>
            <span className="text-gray-300 text-sm line-through ml-2">
              ₹{filterProduct[0]?.variations[0]?.price?.store_price}
            </span>
          </div>

          {/* Add to Cart Button */}
          <button className="w-full bg-green-500 text-white font-bold py-2 mt-2 rounded">
            ADD
          </button>
        </div>
        <div className="w-full bg-black text-white rounded-lg shadow-md p-4">
          <h2 className="text-xl font-semibold mb-3">Highlights</h2>
          <table className="w-full border border-gray-700 rounded-md">
            <thead>
              <tr className="border-b  border-gray-700">
                <th className="p-3 text-start font-medium w-1/3">Attribute</th>
                <th className="p-3 text-start font-medium">Details</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-700">
                <td className="p-3 font-medium w-1/3">Included In the Box</td>
                <td className="p-3">
                  {filterProduct[0]?.variations[0]?.display_name}
                </td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="p-3 font-medium">Brand</td>
                <td className="p-3">{filterProduct[0]?.brand}</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="p-3 font-medium">Discount</td>
                <td className="p-3">
                  {
                    filterProduct[0]?.variations[0]?.price?.offer_applied
                      ?.product_description
                  }
                </td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="p-3 font-medium">Pack Size</td>
                <td className="p-3">
                  Pack of{" "}
                  {
                    filterProduct[0]?.variations[0]?.cart_allowed_quantity
                      ?.total
                  }
                </td>
              </tr>
              <tr>
                <td className="p-3 font-medium">Category</td>
                <td className="p-3">
                  {filterProduct[0]?.variations[0]?.category}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
          </div>
        }
      </div>
    </div>
  );
};

export default MartProduct;
