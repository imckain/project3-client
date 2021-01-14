function ListingCard(props) {

    return(
        <div>
            <img src={props.photo} />
            <span>Price: {props.price} </span>
            <span>Square Footage: {props.sqft} </span>
            <span>Bed: {props.bedrooms} </span>
            <span>Bath: {props.bathrooms} </span>
        </div>
    );
};