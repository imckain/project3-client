import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './ShowPage.module.css';

import { showListing } from '../../services/listingService';

function ShowPage(props) {
    const [listingsData, setListingsData] = useState({

    });

    // async function handleGetListing() {
    //     try {
    //         const data = await showListing(props.location.listingProps.id);
    //         setListingsData(data)
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }
    
    
    useEffect(() => {
        async function getListingData() {
          const data = await showListing(props.location.listingProps.id);
          console.log('data from use effect: ', data);
          setListingsData(data)
        }
        getListingData()
    }, [props.location.listingProps.id]);
    
    return(
        <div>
            <div>
                <Link to="/listings" className={styles.NavLinkListings}>A L L &nbsp;&nbsp; L I S T I N G S</Link>
                <h1>Show Page Loaded</h1>
                {console.log("data from div: ",listingsData)}
                {console.log("match id: ", props.match.params.id)}
                {console.log("location id: ", props.location.listingProps.id)}
            </div>
        </div>
    );
};

export default ShowPage;