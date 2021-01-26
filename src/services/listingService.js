// const BASE_URL = 'http://localhost:3001/api/listings/'; // Dev URL
const BASE_URL = 'https://project-3-backend-api.herokuapp.com/api/listings/'; // Deployed URL

const getListings = () => 
    fetch(BASE_URL, {
        method: 'GET',
    }).then(res => res.json()).catch(err => console.log(err));

function createListing(listing) {
    fetch(BASE_URL, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(listing)
    }).then(res => res.json()).then(getListings());
};

function deleteListing(id) {
    fetch(BASE_URL + id, {
        method: 'DELETE'
    });
};

function showListing(id) {
    fetch(BASE_URL + id, {
        method: 'GET',
    }).then(res => res.json()).then(data => console.log(data)).catch(err => console.log(err));
};

function updateListing(listing, id) {
    fetch(BASE_URL + 'edit/' + id, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(listing)
    }).then(getListings());
};

// function addFavorite() {
//     return fetch(BASE_URL + '/favorites', {
//         method: 'POST',
//     }).then(res => res.json());
// };

// function getFavorite() {
//     return fetch(BASE_URL + '/favorites', {
//         method: 'GET',
//     }).then(res => res.json());
// };

export {
    getListings, 
    createListing,
    deleteListing,
    updateListing,
    showListing,
};