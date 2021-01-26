/* eslint-disable no-unused-vars */
// declare a variable for URL to our API
import { setToken, getUserFromToken, removeToken } from './tokenService';
// const BASE_URL = 'http://localhost:3001/api/users'; // Dev URL
const BASE_URL = 'https://project-3-backend-api.herokuapp.com/api/users'; // Deployed URL 

// define functions for making AJAX requests
function signup(user) {
    return fetch(BASE_URL + '/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'Application/json'
        },
        body: JSON.stringify(user)
    }).then(response => {
        if(response.ok) return response.json();
        // error handling
        throw new Error('Email already taken');
    }).then(data => setToken(data.token));
};

function login(credentials) {
    return fetch(BASE_URL + '/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'Application/json'
        },
        body: JSON.stringify(credentials)
    }).then(response => {
        if(response.ok) return response.json();
        // error handling
        throw new Error('Invalid Login');
    }).then(data => setToken(data.token));
};

function logout() {
    removeToken();
};

function getUser() {
    return getUserFromToken();
};

export {
    signup,
    login,
    logout,
    getUser
};