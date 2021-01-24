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
        <div className="Page">
            <h1>Login</h1>
            <form className={styles.LoginPageForm} onSubmit={handleSubmit}>
                <input 
                    value={formState.email} 
                    onChange={handleChange} 
                    name="email" 
                    type="email"
                    placeholder="Email"
                    className={styles.LoginPageInput}
                />
                <input 
                    value={formState.password} 
                    onChange={handleChange} 
                    name="password" 
                    type="password" 
                    placeholder="Password"
                    className={styles.LoginPageInput}
                />
                <button className={styles.LoginPageButton} >Login</button>
            </form>
        </div>
    );
};

export default LoginPage;