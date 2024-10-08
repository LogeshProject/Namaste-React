import Restaurant from "./Restaurant";
import resList from "../utils/mockData";
import { useEffect, useState } from "react";

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

  return restaurantList.length === 0 ? (
    <h1 style={{display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "80vh",
      margin: 0}}>Loading....</h1>
  ) : (
    <>
      <div className="body">
        <div className="search">
          <input
            className="searchInput"
            type="text"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            onClick={() => {
              console.log(searchText);
              const filtername = restaurantList.filter(
                (res)=> res.info.name.toLowerCase().includes(searchText.toLowerCase()) 
              );

              setFilterRestaurantList(filtername);

            }}


          >
            search
          </button>
        </div>
        <div className="filter">
          <div className="filter-top" style={{ display: "inline" }}>
            <button
              className="filter-btn-top"
              onClick={() => {
                let filterList = restaurantList.filter(
                  (res) => res.info.avgRating > 4.5
                );

             
                console.log(filterList);
                setFilterRestaurantList(filterList);
              }}
            >
              Top Rated
            </button>
          </div>
          <div className="filter-veg" style={{ display: "inline" }}>
            <button className="filter-btn-veg">Pure Veg Foods</button>
          </div>
          <div className="filter-non-veg" style={{ display: "inline" }}>
            <button className="filter-btn-non-veg">Non-veg Foods</button>
          </div>
        </div>
        <div className="res-container" style={{ padding: "2%" }}>
          {filterRestaurantList.map((restaurant) => (
            <Restaurant key={restaurant.info.id} resData={restaurant} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Body;
