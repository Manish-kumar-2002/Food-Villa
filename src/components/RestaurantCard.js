import { IMG_URL } from "../../Constant";

const RestaurantCard = ({
  name,
  cloudinaryImageId,
  avgRating,
  sla,
  areaName,
  locality,
  cuisines,
  aggregatedDiscountInfoV3
}) => {
  return (
    <div className="restaurant-card ">
      <div className="image-container">
        <img src={IMG_URL + cloudinaryImageId} alt="food-img" />
        {/* <div className="discount-badge">20% OFF UPTO ₹50</div> */}
        <div className="discount-badge">{aggregatedDiscountInfoV3?.header} {aggregatedDiscountInfoV3?.subHeader}</div>
      </div>
      <h3 className="restaurant-name">{name}</h3>
      <div className="info-container">
        <div className="info-row">
          <div className="rating">
            <span className="rating-star">
              <i className="fas fa-star"></i>
            </span>
            <span className="review-count">({avgRating})</span>
          </div>
          <div className="delivery-info">
            <i className="fas fa-clock" style={{ marginRight: "6px" }}></i>{" "}
            {sla.slaString}
          </div>
        </div>
        <p>{cuisines.join(", ")}</p>
        <p>
          <i className="fas fa-map-marker-alt"></i> {areaName + ", " + locality}
        </p>
      </div>
    </div>
  );
};

export default RestaurantCard;
