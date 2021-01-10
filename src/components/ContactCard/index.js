import styles from './ContactCard.module.css';

import realtorImg from './images/realtor.jpeg'

function ContactCard(props) {

    return(
        <div className={styles.ContactCard}>
            <div className={styles.Realtor}>
                <img className={styles.RealtorImg} src={realtorImg} alt="realtor" />
                <div>
                    <h3>Tim Heidecker</h3>
                    <p>Free Real Estate INC.</p>
                    <p>License #5030008671</p>
                </div>
            </div>
            <div>
                <p>Mobile: (555) 555-1234</p>
                <p>Office: (555) 555-5678</p>
                <p>Email: tim.heidecker@fre.com</p>
            </div>
        </div>
    );
};

export default ContactCard;