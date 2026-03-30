import { useState, useEffect } from "react";
import { IMAGE_CDN_URL } from "../../utils/constants";
import { useParams } from "react-router-dom";

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
    <div className="p-10">
      <div className="res-details">
        <h2>{name}</h2>
        <img
          className="w-150 h-80 rounded-xl"
          src={`${IMAGE_CDN_URL}${cloudinaryImageId}`}
        />
        <h4>{costForTwo}</h4>
        <h4>{avgRating}</h4>
      </div>
      <div className="w-4/5">
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
                  <div className="flex justify-between" key={id}>
                    <div>
                      <h4>{name}</h4>
                      <p>{description}</p>
                    </div>
                    <div>
                      <img
                        className="w-56 h-36 rounded-xl"
                        src={`${IMAGE_CDN_URL}${imageId}`}
                      />
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
