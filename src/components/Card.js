const Card = (props) => {
//   console.log("props", props);
 const { cardData }  = props;
 const { name, cuisines, avgRating, cloudinaryImageId } = cardData?.info;
 const { deliveryTime } = cardData?.info?.sla;
    return (
        <div className="card">
            <img alt="food-logo" style={{ width: "100%"}} src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId} />
            <span><b>{name}</b></span>
            <span>{cuisines.join(", ")}</span>
            <span>{avgRating}</span>
            <span>delivery Time: {deliveryTime} minutes</span>
        </div>
    )
}

export default Card;