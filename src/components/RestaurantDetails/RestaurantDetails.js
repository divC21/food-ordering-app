import { useState, useEffect } from "react";
import { IMAGE_CDN_URL } from "../../utils/constants";
import { useParams } from "react-router-dom";
import Accordian from "../Accordian/Accordian";
import { useDispatch } from "react-redux";
import { addItem } from "../../utils/cartSlice";

const RestaurantDetails = () => {
  const [details, setDetails] = useState(null);
  const [activeAccordian, setActiveAccordian] = useState("");
  const [status, setStatus] = useState(false);
  const { id } = useParams();
  const dispatch = useDispatch();
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

  const handleAddItems = (item) => {
    dispatch(addItem(item));
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
        <h2 className="text-2xl font-bold my-4">{name}</h2>
        {/* <img
          className="w-150 h-80 rounded-xl"
          src={`${IMAGE_CDN_URL}${cloudinaryImageId}`}
        /> */}
        <h4>{costForTwo}</h4>
        <h4>{avgRating}</h4>
      </div>
      <div className="w-4/5">
        {cards.map((item) => {
          const { title = "", itemCards = [] } = item?.card?.card || {};
          return (
            <div key={title}>
              {title ? (
                <Accordian
                  title={title}
                  isOpen={title === activeAccordian && !status}
                  getOpenedItem={(data, status) => {
                    setActiveAccordian(data);
                    setStatus(status);
                  }}
                >
                  <div>
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
                            <h4 className="text-lg">
                              {name}
                              {"    "}
                              <span className="text-slate-800 text-sm">
                                ₹{price / 100}
                              </span>
                            </h4>
                            <p className="text-slate-500 text-xs my-1">
                              {description}
                            </p>
                          </div>
                          <div className="relative">
                            <img
                              className="w-40 h-28 rounded-xl my-1.5"
                              src={`${IMAGE_CDN_URL}${imageId}`}
                            />
                            <div
                              className="border border-solid border-amber-100 absolute bottom-2 cursor-pointer left-10 bottom-1.5 bg-black text-amber-50 px-4 py-1 rounded-md"
                              onClick={() => handleAddItems(name)}
                            >
                              Add +
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </Accordian>
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RestaurantDetails;
