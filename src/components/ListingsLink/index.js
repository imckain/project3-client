import { Link } from "react-router-dom";

import styles from './ListingsLink.module.css';

function ListingsLink(props) {

    return(
        <div className={styles.ListingsLinkContent}>
            <div className={styles.Button} align="center">
                <Link to='/listings' className={styles.ListingsLink}><span>View Listings</span></Link>
            </div>
        </div>
    );
};

export default ListingsLink;