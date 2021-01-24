import styles from './ContactForm.module.css';

function ContactForm(props) {

    return(
        <div>
            <form className={styles.ContactForm}>
                <div className={styles.ContactFormItem}>
                    <label>First Name</label>
                    <input 
                        className={styles.ContactFormInput}
                        // value='firstName'
                        name='firstName'
                        type='text'
                        placeholder=''
                    />
                </div>
                <div className={styles.ContactFormItem}>
                    <label>Last Name</label>
                    <input 
                        className={styles.ContactFormInput}
                        // value='lastName'
                        name='lastName'
                        type='text'
                        placeholder=''
                    />
                </div>
                <div className={styles.ContactFormItem}>
                    <label>Phone Number</label>
                    <input 
                        className={styles.ContactFormInput}
                        // value='phoneNumber'
                        name='phoneNumber'
                        type='text'
                        placeholder=''
                    />
                </div>
                <div className={styles.ContactFormItem}>
                    <label>Email</label>
                    <input 
                        className={styles.ContactFormInput}
                        // value='email'
                        name='email'
                        type='email'
                        placeholder=''
                    />
                </div>
                <div className={styles.ContactFormItem}>
                    <label>Message</label>
                    <input 
                        className={styles.ContactFormMessage}
                        // value='message'
                        name='message'
                        type='text'
                        placeholder=''
                    />
                </div>
                <div className={styles.ContactFormButtonItem}>
                    <button className={styles.ContactFormButton}>Send</button>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;