import { IMAGE_CDN_URL } from "../../utils/constants";
import "./card.css";

const RestaurantCard = ({ resData }) => {
  const {
    name = "",
    description = "",
    rating = 0,
    costForTwo = 0,
    cuisines = [],
    imageId = "",
  } = resData;
  return (
    <div className="res-card">
      <img src={`${IMAGE_CDN_URL}${imageId}`} alt="Restaurant" />
      <h3>{name}</h3>
      <p>{description}</p>
      <h4>{rating}</h4>
      <h4>{costForTwo}</h4>
      <h4>{cuisines.join(", ")}</h4>
    </div>
  );
};

export default RestaurantCard;
