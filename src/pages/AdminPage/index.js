import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './AdminPage.module.css';

import ListingCard from '../../components/ListingCard';

import { deleteListing, getListings } from '../../services/listingService';

import DashboardPage from "../DashboardPage";

function AdminPage(props) {
    const [listingsData, setListingsData] = useState({

    });
    
    useEffect(() => {
      async function getListingData() {
        const data = await getListings();
        setListingsData(data);
      }
      getListingData();
    }, []);

    async function handleDeleteAndRefresh(id) {
        handleDelete(id);
        await getListings();
        refreshData();
    };

    function handleDelete(id) {
        deleteListing(id);
    };

    async function refreshData() {
        try {
          const data = await getListings();
          setListingsData(data);
        } catch (error) {
          console.log(error);
        };
    };

    return(
        <div>
            {
                props.isAdmin ?
                <div className={styles.AdminPage}>
                    <div className={styles.AdminHeader}>
                        <h1>A D M I N &nbsp; C O N S O L E </h1>
                        <div>
                            <Link to="/create" className={styles.NavLinkCreate}>Create Listing</Link>
                            <Link to="/listings" className={styles.NavLinkListings}>User View</Link>
                        </div>
                    </div>
                    <div className={styles.ListingsContent}>
                        { listingsData.length > 0 &&
                            listingsData.map(listing => (
                                <div className={styles.Listing} key={listing._id}>
                                    <div>
                                        <ListingCard 
                                            className={styles.ListingCard}
                                            // photo={listing.photo}
                                            // address={listing.street}
                                            // price={listing.price}
                                            // sqft={listing.sqft}
                                            // bed={listing.bed}
                                            // bath={listing.bath}
                                            listing={listing}
                                        />
                                        <button type='submit' onClick={() => handleDeleteAndRefresh(listing._id)} >X</button>
                                    </div>
                                    <Link 
                                        className={styles.NavLinkEditListing} 
                                        to={{
                                            pathname: `/listings/edit/${listing._id}`,
                                            listingProps:{
                                                id: listing._id
                                            }
                                        }}>E D I T</Link>
                                </div>
                            ))
                        }
                    </div>
                </div>
                :
                <DashboardPage />
            }
        </div>
    );
};

export default AdminPage;