const BASE_URL = 'http://localhost:3001';

const getListings = () => 
    fetch(BASE_URL + '/api/listings', {
        method: 'GET',
    }).then(res => res.json()).catch(err => console.log(err));

function createListing(listing) {
    fetch(BASE_URL + '/api/listings', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(listing)
    }).then(res => res.json()).then(getListings());
};

function deleteListing(id) {
    fetch(BASE_URL + '/api/listings/' + id, {
        method: 'DELETE'
    });
}

function updateListing(listing, id) {
    fetch(BASE_URL + '/api/listings/' + id, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(listing)
    }).then(getListings());
};

// function addFavorite() {

// }

export {
    getListings, 
    createListing,
    deleteListing,
    updateListing,
}