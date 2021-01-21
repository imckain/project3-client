const BASE_URL = 'http://localhost:3001';

const getListings = () => 
    fetch(BASE_URL + '/api/listings', {
        method: 'POST',
    }).then(res => res.json()).catch(err => console.log(err));

// function createListing(listing) {
//     fetch(BASE_URL + '/', {
//         method: 'POST',
//         headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(listing)
//     });
// };

// const getListing = (id) => fetch(`${BASE_URL}/${id}`).then(res => res.json());

// function updateListing(listing, id) {
//     fetch(BASE_URL + `/${id}`, {
//         method: 'POST',
//         headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(listing)
//     });
// };

// function addFavorite() {

// }

export {
    getListings, 
    // createListing,
    // getListing,
    // updateListing,
}