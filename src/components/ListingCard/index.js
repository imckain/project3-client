import styles from './ListingCard.module.css';

function ListingCard(props) {

    return(
        <div className={styles.ListingCard} >
            <div className={styles.imageContainer}>
                <img src={props.listing.photo} alt="home" className={styles.image} />
            </div>
            <div>
                <span className={styles.Street}>{props.listing.address.street} </span>
                <span>Price: ${props.listing.price} </span>
                <span>Square Footage: {props.listing.sqft} </span>
                <span>Bed: {props.listing.bed} </span>
                <span>Bath: {props.listing.bath} </span>
            </div>
        </div>
    );
};

export default ListingCard;