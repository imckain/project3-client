const BASE_URL = 'http://localhost:3001/api/listings/';

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
    }).then(res => res.json()).catch(err => console.log(err));
}

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

// }

export {
    getListings, 
    createListing,
    deleteListing,
    updateListing,
    showListing,
};