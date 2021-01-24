import styles from './ListingCard.module.css';

function ListingCard(props) {

    return(
        <div className={styles.ListingCard} >
            <img src={props.photo} alt="home" className={styles.image} />
            <div>
                <span>Price: ${props.price} </span>
                <span>Square Footage: {props.sqft} </span>
                <span>Bed: {props.bed} </span>
                <span>Bath: {props.bath} </span>
            </div>
        </div>
    );
};

export default ListingCard;