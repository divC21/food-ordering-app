import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import RestaurantCard from "../RestaurantCard/RestaurantCard";
import Shimmer from "../Shimmer/Shimmer";
import Button from "../Button/Button";
import Input from "../Input/Input";
import useOnlineStatus from "../../utils/useOnlineStatus";

const MainContainer = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();
  const status = useOnlineStatus();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await fetch(
      "https://corsproxy.io/?https://namastedev.com/api/v1/listRestaurants",
    );
    const data = await res.json();
    const updatedData =
      data?.data?.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants.map(
        (item) => {
          return {
            name: item.info.name,
            id: item.info.id,
            description: item.info.description,
            rating: item.info.avgRatingString,
            costForTwo: item.info.costForTwo,
            cuisines: item.info.cuisines,
            imageId: item.info.cloudinaryImageId,
          };
        },
      );
    setListOfRestaurants(updatedData);
    setFilteredRestaurants(updatedData);
  };

  const handleSearch = () => {
    const filteredRestaurants = listOfRestaurants.filter((res) =>
      res.name.toLowerCase().includes(searchInput),
    );
    setFilteredRestaurants(filteredRestaurants);
    setSearchInput("");
  };

  const handleTopRatedRestaurants = () => {
    const filteredRestaurants = listOfRestaurants.filter(
      (res) => Number(res.rating) > 4,
    );
    setFilteredRestaurants(filteredRestaurants);
  };

  const handleClearFilters = () => {
    fetchData();
  };

  //Navigate using useNavigate hook
  // const handleRestaurantDetails = (id) => {
  //   navigate(`/restaurant/${id}`);
  // };

  return (
    <>
      {status ? (
        <div className="py-10">
          <div className="flex items-center mx-10">
            <Input
              type="text"
              testId="searchInput"
              value={searchInput}
              placeholder="Search for restaurants..."
              onChange={(evt) => {
                const { value } = evt.target;
                setSearchInput(value.toLowerCase());
              }}
            />
            <Button
              name="Search"
              type="primary"
              onClick={handleSearch}
            ></Button>
            <Button
              name="Top Rated Restaurants"
              type="primary"
              onClick={handleTopRatedRestaurants}
            />
            <Button
              name="Clear Filters"
              type="secondary"
              onClick={handleClearFilters}
            ></Button>
          </div>
          <div className="flex flex-wrap gap-10">
            {filteredRestaurants.length ? (
              filteredRestaurants.map((res) => (
                /* Navigate using LINK */
                <Link to={`/restaurant/${res.id}`} key={res.id}>
                  <RestaurantCard
                    resData={{
                      name: res.name,
                      description: res.description,
                      rating: res.rating,
                      costForTwo: res.costForTwo,
                      cuisines: res.cuisines,
                      imageId: res.imageId,
                    }}
                    // onClick={() => handleRestaurantDetails(res.id)}
                  />
                </Link>
              ))
            ) : (
              <Shimmer noOfCards={14} />
            )}
          </div>
        </div>
      ) : (
        <h2>Looks like you are offline</h2>
      )}
    </>
  );
};

export default MainContainer;
