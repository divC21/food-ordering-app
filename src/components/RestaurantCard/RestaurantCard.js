import { IMAGE_CDN_URL } from "../../utils/constants";

const RestaurantCard = ({ resData, onClick }) => {
  const {
    name = "",
    description = "",
    rating = 0,
    costForTwo = 0,
    cuisines = [],
    imageId = "",
  } = resData;
  return (
    <div className="w-78 border-0 p-6 rounded-xl" onClick={onClick}>
      <img
        className="rounded-xl w-80 h-56"
        src={`${IMAGE_CDN_URL}${imageId}`}
        alt="Restaurant"
      />
      <h3 className="text-xl font-bold">{name}</h3>
      <p className="m-4">{description}</p>
      <h4>{rating}</h4>
      <h4>{costForTwo}</h4>
      <h4>{cuisines.join(", ")}</h4>
    </div>
  );
};

export default RestaurantCard;
