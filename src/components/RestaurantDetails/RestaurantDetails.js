import { useState, useEffect } from "react";
import { IMAGE_CDN_URL } from "../../utils/constants";
import { useParams } from "react-router-dom";
import "./restaurantDetails.css";
const RestaurantDetails = () => {
  const [details, setDetails] = useState(null);
  const { id } = useParams();
  console.log(id); //to get pathname
  const pathname = "/123456";

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await fetch(
      `https://corsproxy.io/?https://namastedev.com/api/v1/listRestaurantMenu${pathname}`,
    );
    if (res && res.status === 200) {
      const data = await res.json();
      setDetails(data?.data);
    }
  };

  const {
    name = "",
    costForTwo = "",
    avgRating = "",
    cloudinaryImageId = "",
  } = details?.cards[2]?.card?.card?.info || {};

  const { cards = [] } =
    details?.cards[4].groupedCard.cardGroupMap.REGULAR || {};

  return (
    <div className="details-container">
      <div className="res-details">
        <h2>{name}</h2>
        <img src={`${IMAGE_CDN_URL}${cloudinaryImageId}`} />
        <h4>{costForTwo}</h4>
        <h4>{avgRating}</h4>
      </div>
      <div className="menu-details">
        {cards.map((item) => {
          const { title = "", itemCards = [] } = item?.card?.card || {};
          return (
            <div key={title}>
              <h2>{title}</h2>
              {itemCards.map((menu) => {
                const {
                  name = "",
                  imageId = "",
                  description = "",
                  id = "",
                  price = 0,
                } = menu.card.info;
                return (
                  <div className="items" key={id}>
                    <div>
                      <h4>{name}</h4>
                      <p>{description}</p>
                    </div>
                    <div>
                      <img src={`${IMAGE_CDN_URL}${imageId}`} />
                      <p>Rs.{price / 100}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RestaurantDetails;
