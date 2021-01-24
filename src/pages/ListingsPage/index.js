import ListingCard from '../../components/ListingCard';

function ListingsPage(props) {


    return(
        <div>
            <h1>listings</h1>
            {console.log(props.listings)}
            { props.listings.length > 0 &&
                props.listings.map(listing => (
                    <ListingCard  
                        key={listing._id}
                        photo={listing.photo}
                        price={listing.price}
                        sqft={listing.sqft}
                        bed={listing.bed}
                        bath={listing.bath}
                    />
                ))
            }
        </div>
    );
};

export default ListingsPage;