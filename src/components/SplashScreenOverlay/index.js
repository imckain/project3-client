import ListingsLink from '../../components/ListingsLink';

import styles from './SplashScreenOverlay.module.css';

function SplashScreenOverlay(props) {
    
    return(
        <div className={styles.SplashScreenOverlay}>
            <h1>Find Your Dream Home</h1>
            <ListingsLink 
                className={styles.SplashScreenButton}
            />
        </div>
    );
};

export default SplashScreenOverlay;