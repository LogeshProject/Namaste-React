

const Restaurant = (props) => {

    let { resData } = props;

    let { cloudinaryImageId, name, cuisines, avgRating, costForTwo } = resData?.info;

    return (
        <>


            <div className='res-card' style={{ backgroundColor: '#f0f0f0', margin: '3%' }}>
                <img className='res-logo' src={'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/' + cloudinaryImageId} ></img>
                <h4>{name}</h4>
                <p>{cuisines.join(" , ")}</p>
                <div style={{ color: 'red' }}>
                    <h4 style={{ display: 'inline', marginLeft: '1px', color: 'red' }}>{costForTwo}</h4>
                    <h5 style={{ display: 'inline', color: 'blue', padding : '10px' }}>Ratings : {renderStars(avgRating)}</h5>

                </div>

            </div>


        </>
    )

}


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