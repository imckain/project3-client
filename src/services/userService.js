/* eslint-disable no-unused-vars */
// declare a variable for URL to our API
const BASE_URL = 'http://localhost:3001/api/users';

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
    }).then(data => console.log(data));
}

function login(credentials) {

}

function logout() {

}

function getUser() {

}

// export our functions

export {
    signup,
    login,
    logout,
    getUser
};