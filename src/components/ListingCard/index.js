function ListingCard(props) {

    return(
        <div>
            <img src={props.photo} alt="home" />
            <span>Price: {props.price} </span>
            <span>Square Footage: {props.sqft} </span>
            <span>Bed: {props.bed} </span>
            <span>Bath: {props.bath} </span>
        </div>
    );
};

export default ListingCard;