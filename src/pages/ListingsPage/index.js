import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getListings } from '../../services/listingService';
import styles from './ListingsPage.module.css';

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
        <div className={styles.ListingsPage}>
            <div className={styles.ListingsPageMain}>
                <div className={styles.ListingsPageContent}>
                    { listingsData.length > 0 &&
                        listingsData.map(listing => (
                            <div key={listing._id} className={styles.ListingCard}>
                                <Link to={{
                                        pathname: `/listings/${listing._id}`,
                                        listingProps: {
                                            id: listing._id,
                                            listing: listing
                                        }
                                    }}>
                                    <ListingCard  
                                        key={listing._id}
                                        listing={listing}
                                    />
                                </Link>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default ListingsPage;