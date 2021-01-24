/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { signup } from '../../services/userService';
import styles from './SignupPage.module.css';

function SignupPage(props) {
    const [formState, setFormState] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
    });

    function getInitialFormState() {
        setFormState({
            firstName: "",
            lastName: "",
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

            await signup(formState);

            setFormState({getInitialFormState});

            props.handleSignupOrLogin();

            props.history.push('/dashboard');
        } catch (error) {
            alert(error.message);
        };
    };

    return(
        <div className={styles.SignupPage}>
            <div className={styles.SignupPageContent}>
                <h1>S I G N &nbsp;&nbsp; U P</h1>
                <form className={styles.SignupPageForm} onSubmit={handleSubmit}>
                    <input
                        value={formState.firstName}
                        onChange={handleChange}
                        name="firstName" 
                        type="text" 
                        placeholder=" F I R S T &nbsp; N A M E"
                        className={styles.SignupPageInput}
                    />
                    <input 
                        value={formState.lastName} 
                        onChange={handleChange} 
                        name="lastName" 
                        type="text" 
                        placeholder=" L A S T &nbsp; N A M E"
                        className={styles.SignupPageInput}
                    />
                    <input 
                        value={formState.email} 
                        onChange={handleChange} 
                        name="email" 
                        type="email"
                        placeholder=" E M A I L"
                        className={styles.SignupPageInput}
                    />
                    <input 
                        value={formState.password} 
                        onChange={handleChange} 
                        name="password" 
                        type="password" 
                        placeholder=" P A S S W O R D"
                        className={styles.SignupPageInput}
                    />
                    <button className={styles.SignupPageButton}>S I G N &nbsp;&nbsp; U P</button>
                </form>
            </div>
        </div>
    );
};

export default SignupPage;