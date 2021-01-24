/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { signup } from '../../services/userService';
import './SignupPage.css';

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
        <div className="Page">
            <h1>Signup</h1>
            <form onSubmit={handleSubmit}>
                <input
                    value={formState.firstName}
                    onChange={handleChange}
                    name="firstName" 
                    type="text" 
                    placeholder="First Name"
                />
                <input 
                    value={formState.lastName} 
                    onChange={handleChange} 
                    name="lastName" 
                    type="text" 
                    placeholder="Last Name"
                />
                <input 
                    value={formState.email} 
                    onChange={handleChange} 
                    name="email" 
                    type="email"
                    placeholder="Email"
                />
                <input 
                    value={formState.password} 
                    onChange={handleChange} 
                    name="password" 
                    type="password" 
                    placeholder="Password"
                />
                <button>Sign Up</button>
            </form>
        </div>
    );
};

export default SignupPage;