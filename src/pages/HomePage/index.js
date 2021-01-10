import About from '../../components/About'
import SplashScreenGallery from '../../components/SplashScreenGallery';
import SplashScreenOverlay from '../../components/SplashScreenOverlay'
import ListingsLink from '../../components/ListingsLink';
import Contact from '../../components/Contact';

import styles from './HomePage.module.css'

function HomePage(props) {
    return(
        <div>
            <div className={styles.SplashScreenBanner}>
                <SplashScreenGallery 
                    className={styles.SplashScreenGallery}
                />
                <div className={styles.SplashScreenContent}>
                    <SplashScreenOverlay
                        className={styles.SplashScreenOverlay}
                    />
                    <ListingsLink 
                        className={styles.SplashScreenButton}
                    />
                </div>
            </div>
            <div>
                <Contact />
            </div>
            <div className={styles.HomeContent}>
                <About 
                    className={styles.About}
                />
            </div>
        </div>
    );
};

export default HomePage;