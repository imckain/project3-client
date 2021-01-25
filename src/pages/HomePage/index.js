import SplashScreenOverlay from '../../components/SplashScreenOverlay'
import Contact from '../../components/Contact';

import styles from './HomePage.module.css'

function HomePage(props) {
    return(
        <div>
            <div className={styles.SplashScreenBanner}>
                <div className={styles.SplashScreenContent}>
                    <SplashScreenOverlay
                        className={styles.SplashScreenOverlay}
                    />
                </div>
            </div>
            <div className={styles.Contact}>
                <Contact />
            </div>
        </div>
    );
};

export default HomePage;