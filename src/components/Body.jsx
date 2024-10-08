import Restaurant from "./Restaurant";
import resList from "../utils/mockData";
import { useEffect, useState } from "react";

import useOnlineStatus from "../utils/useOnlineStatus";

import '../styles/body.css'

const Body = () => {
  let [restaurantList, setRestaurantList] = useState([]);
  let [filterRestaurantList, setFilterRestaurantList] = useState([]);
  let [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.89960&lng=80.22090&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

    setFilterRestaurantList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setRestaurantList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  };

  console.log("Rendered...");

  // state variable

  let [restList, setResList] = useState([
    {
      info: {
        id: "485445",
        name: "Chinese Woks",
        cloudinaryImageId: "e0839ff574213e6f35b3899ebf1fc597",
        costForTwo: "₹250 for two",
        cuisines: ["Chinese", "Asian", "Tibetan", "Desserts"],
        avgRating: 4,
      },
    },
    {
      info: {
        id: "485446",
        name: "KFC",
        cloudinaryImageId: "e0839ff574213e6f35b3899ebf1fc597",
        costForTwo: "₹250 for two",
        cuisines: ["Chinese", "Asian", "Tibetan", "Desserts"],
        avgRating: 4.4,
      },
    },
  ]);

  // normal js variable

  let restaurant2List = [
    {
      info: {
        id: "485445",
        name: "Chinese Wok",
        cloudinaryImageId: "e0839ff574213e6f35b3899ebf1fc597",
        costForTwo: "₹250 for two",
        cuisines: ["Chinese", "Asian", "Tibetan", "Desserts"],
        avgRating: 4,
      },
    },
    {
      info: {
        id: "485446",
        name: "KFC",
        cloudinaryImageId: "e0839ff574213e6f35b3899ebf1fc597",
        costForTwo: "₹250 for two",
        cuisines: ["Chinese", "Asian", "Tibetan", "Desserts"],
        avgRating: 4.4,
      },
    },
  ];

  // conditional rendering => shimmer ui

  // if(restaurantList.length === 0){
  //   return(
  //     <h1>Loading....</h1>
  //   )
  // }

  const userOnlineStatus = useOnlineStatus()

  if(userOnlineStatus === false ) return <h1
  
  style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "80vh",
    margin: 0,
  }}
  
  >Looks like you are offline !!! please check your internet connectivity</h1>

  return restaurantList.length === 0 ? (
    <h1
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "80vh",
        margin: 0,
      }}
    >
      Loading....
    </h1>
  ) : (
    <>
      <div className="body">
        {/* Search Bar */}
        <div className="search">
          <input
            className="searchInput"
            type="text"
            value={searchText}
            placeholder="Search restaurants..."
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="search-btn"
            onClick={() => {
              const filteredByName = restaurantList.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilterRestaurantList(filteredByName);
            }}
          >
            Search
          </button>
        </div>
  
        {/* Filter Section */}
        <div className="filter">
          {/* Top Rated Button */}
          <button
            className="filter-btn filter-btn-top"
            onClick={() => {
              const topRatedRestaurants = restaurantList.filter(
                (res) => res.info.avgRating > 4.5
              );
              setFilterRestaurantList(topRatedRestaurants);
            }}
          >
            Top Rated
          </button>
  
          {/* Pure Veg Button */}
          <button className="filter-btn filter-btn-veg">Pure Veg Foods</button>
  
          {/* Non-Veg Button */}
          <button className="filter-btn filter-btn-non-veg">Non-Veg Foods</button>
        </div>
  
        {/* Restaurant List */}
        <div className="res-container" style={{ padding: "2%" , margin : "5%" }}>
          {filterRestaurantList.map((restaurant) => (
            <Restaurant key={restaurant.info.id} resData={restaurant} />
          ))}
        </div>
      </div>
    </>
  );
  
};

export default Body;
