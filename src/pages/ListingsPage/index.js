import ListingCard from '../../components/ListingCard';

function ListingsPage(props) {


    return(
        <div>
            {
                props.listings.map(props => (
                    <ListingCard  
                        key={props.listings._id}
                        photo={props.listings.photo}
                        price={props.listings.price}
                        sqft={props.listings.sqft}
                        bed={props.listings.bed}
                        bath={props.listings.bath}
                    />
                ))
            }
        </div>
    );
};

export default ListingsPage;