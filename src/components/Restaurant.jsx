import { CDN_URL } from "../utils/constants";

import '../styles/restaurant.css'

const Restaurant = (props) => {
    const { resData } = props;
    const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } = resData?.info;
  
    return (
      <div className='res-card'>
        <img className='res-logo' src={CDN_URL + cloudinaryImageId} alt={`${name} logo`} />
        <h4>{name}</h4>
        <p>{cuisines.join(', ')}</p>
        <div className='res-details'>
          <h4 className='cost-for-two'>{costForTwo}</h4>
         
        </div>
        <div>
        <h5 className='avg-rating'>
            Ratings: {renderStars(avgRating)}
          </h5>
        </div>
      </div>
    );
  };
  


function renderStars(avgRating) {
    const fullStars = Math.floor(avgRating); // Number of full stars
    const halfStar = avgRating % 1 >= 0.5; // Determine if there's a half star
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0); // Number of empty stars

    return (
        <>
            {'★'.repeat(fullStars)}
            {halfStar ? '½' : ''}
            {'☆'.repeat(emptyStars)}
        </>
    );
}




export default Restaurant ;