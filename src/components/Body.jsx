import Restaurant from "./Restaurant";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {

    let [restaurantList , setRestaurantList] = useState(resList)

     // state variable 

     let [restList , setResList] = useState([ {
        "info": {
            "id": "485445",
            "name": "Chinese Woks",
            "cloudinaryImageId": "e0839ff574213e6f35b3899ebf1fc597",
            "costForTwo": "₹250 for two",
            "cuisines": [
                "Chinese",
                "Asian",
                "Tibetan",
                "Desserts"
            ],
            "avgRating": 4,
            }
        
    },
    {
        "info": {
            "id": "485446",
            "name": "KFC",
            "cloudinaryImageId": "e0839ff574213e6f35b3899ebf1fc597",
            "costForTwo": "₹250 for two",
            "cuisines": [
                "Chinese",
                "Asian",
                "Tibetan",
                "Desserts"
            ],
            "avgRating": 4.4,
            }
        
    }]) ;

    // normal js variable 

    let restaurant2List = [
        {
            "info": {
                "id": "485445",
                "name": "Chinese Wok",
                "cloudinaryImageId": "e0839ff574213e6f35b3899ebf1fc597",
                "costForTwo": "₹250 for two",
                "cuisines": [
                    "Chinese",
                    "Asian",
                    "Tibetan",
                    "Desserts"
                ],
                "avgRating": 4,
                }
            
        },
        {
            "info": {
                "id": "485446",
                "name": "KFC",
                "cloudinaryImageId": "e0839ff574213e6f35b3899ebf1fc597",
                "costForTwo": "₹250 for two",
                "cuisines": [
                    "Chinese",
                    "Asian",
                    "Tibetan",
                    "Desserts"
                ],
                "avgRating": 4.4,
                }
            
        }
    ]

  return (
    <>
      <div className="body">
        <div className="search">
          <input className="searchInput" type="text"></input>
          <button>search</button>
        </div>
        <div className="filter">
          <div className="filter-top" style={{display: 'inline'}}>
            <button className="filter-btn-top" onClick={()=>{
                filterList = restaurantList.filter((res=> res.info.avgRating > 4.4))
                console.log(filterList)
                setRestaurantList(filterList);
                
            }}>Top Rated</button>
          </div>
          <div className="filter-veg" style={{display: 'inline'}}>
            <button className="filter-btn-veg">Veg Foods</button>
          </div>
          <div className="filter-non-veg" style={{display: 'inline'}}>
            <button className="filter-btn-non-veg">Non-veg Foods</button>
          </div>
        </div>
        <div className="res-container" style={{ padding: "2%" }}>
          {restaurantList.map((restaurant) => (
            <Restaurant key={restaurant.info.id} resData={restaurant} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Body;
