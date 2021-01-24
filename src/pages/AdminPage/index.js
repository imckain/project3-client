import { Link } from 'react-router-dom';
import ListingCard from '../../components/ListingCard';

import { deleteListing } from '../../services/listingService';

import DashboardPage from "../DashboardPage";

function AdminPage(props) {

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
                    { props.listings.length > 0 &&
                        props.listings.map(listing => (
                            <div key={listing._id}>
                                <ListingCard 
                                    photo={listing.photo}
                                    price={listing.price}
                                    sqft={listing.sqft}
                                    bed={listing.bed}
                                    bath={listing.bath}
                                />
                                <button type='submit' onClick={() => {deleteListing(listing._id); props.refresh()}}  >X</button>
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