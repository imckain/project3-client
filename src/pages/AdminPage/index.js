import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
                <div>
                    <h1>Admin Page</h1>
                    <div>
                        <ul>
                            <li>
                                <Link to="/listings">View Listings</Link>
                            </li>
                            <li>
                                <Link to="/create">Create Listing</Link>
                            </li>
                        </ul>
                    </div>
                    { listingsData.length > 0 &&
                        listingsData.map(listing => (
                            <div key={listing._id}>
                                <ListingCard 
                                    photo={listing.photo}
                                    price={listing.price}
                                    sqft={listing.sqft}
                                    bed={listing.bed}
                                    bath={listing.bath}
                                />
                                <button type='submit' onClick={() => handleDeleteAndRefresh(listing._id)} >X</button>
                                <Link to={{
                                        pathname: `/listings/${listing._id}`,
                                        listingProps:{
                                            id: listing._id
                                        }
                                }}>Edit</Link>
                            </div>
                        ))
                    }
                </div>
                :
                <DashboardPage />
            }
        </div>
    );
};

export default AdminPage;