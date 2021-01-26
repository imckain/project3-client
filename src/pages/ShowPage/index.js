import { Link } from 'react-router-dom';
import styles from './ShowPage.module.css';

function ShowPage(props) {

    return(
        <div>
            <div>
                <div className={styles.ShowPageHeader}>
                    <h1>Show Page Loaded</h1>
                    <Link to="/listings" className={styles.NavLinkListings}>A L L &nbsp;&nbsp; L I S T I N G S</Link>
                </div>
                <div>{props.location.listingProps.listing.address.street}</div>
            </div>
        </div>
    );
};

export default ShowPage;