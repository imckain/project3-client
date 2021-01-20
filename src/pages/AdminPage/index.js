import { Link } from 'react-router-dom';
import ListingCard from '../../components/ListingCard';

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
                    <div>
                        {
                            props.listings.map(listing => (
                                <div>
                                    <ListingCard 
                                        key={listing.id}
                                    />
                                    <Link to={`/edit/${listing.id}`}>Edit</Link>
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