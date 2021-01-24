import { useState, useEffect } from 'react';
import { getListings } from '../../services/listingService';
import ListingCard from '../../components/ListingCard';

function ListingsPage(props) {
    const [listingsData, setListingsData] = useState({

    });
    
    useEffect(() => {
      async function getListingData() {
        const data = await getListings();
        setListingsData(data)
      }
      getListingData()
    }, []);

    return(
        <div>
            <h1>listings</h1>
            { listingsData.length > 0 &&
                listingsData.map(listing => (
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