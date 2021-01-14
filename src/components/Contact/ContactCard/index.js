import styles from './ContactCard.module.css';

import realtorImg from './images/realtor.jpeg';
import phoneIcon from './images/Phone_Icon.png';
import mailIcon from './images/Mail_Icon.png'

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
            <div className={styles.PhoneAndEmail}>
                <div>
                    <img className={styles.PhoneIcon} src={phoneIcon} />
                    <div className={styles.PhoneContact}>
                        <p>Mobile: (555) 555-1234</p>
                        <p>Office: (555) 555-5678</p>
                    </div>
                </div>
                <div>
                    <img className={styles.MailIcon} src={mailIcon} />
                    <p>Email: tim.heidecker@fre.com</p>
                </div>
            </div>
        </div>
    );
};

export default ContactCard;