import ContactCard from '../ContactCard/'
import ContactForm from '../ContactForm/'

import styles from './Contact.module.css';

function Contact(props) {

    return(
        <div className={styles.Contact}>
            <h1>Let's Connect!</h1>
            <div className={styles.ContactContent}>
                <ContactForm className={styles.ContactForm} />
                <ContactCard className={styles.ContactCard} />
            </div>
        </div>
    );
};

export default Contact;