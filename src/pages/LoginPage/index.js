import { useState } from 'react';
import { login } from '../../services/userService';

import styles from './LoginPage.module.css';

function LoginPage(props) {
    const [formState, setFormState] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
    });

    function getInitialFormState() {
        setFormState({
            email: "",
            password: "",
        });
    };

    function handleChange(event) {
        setFormState(prevState => ({
            ...prevState,
            [event.target.name]: event.target.value
        }));
    };

    async function handleSubmit(event) {
        try {
            event.preventDefault();

            await login(formState);

            setFormState({getInitialFormState});

            props.handleSignupOrLogin();

            props.history.push('/dashboard');
        } catch (error) {
            alert(error.message);
        };
    };

    return(
        <div className={styles.LoginPage}>
            <div className={styles.LoginPageContent}>
                <h1>L O G I N</h1>
                <form className={styles.LoginPageForm} onSubmit={handleSubmit}>
                    <input 
                        value={formState.email} 
                        onChange={handleChange} 
                        name="email" 
                        type="email"
                        placeholder=" E M A I L "
                        className={styles.LoginPageInput}
                    />
                    <input 
                        value={formState.password} 
                        onChange={handleChange} 
                        name="password" 
                        type="password" 
                        placeholder=" P A S S W O R D "
                        className={styles.LoginPageInput}
                    />
                    <button className={styles.LoginPageButton} >L O G I N</button>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;