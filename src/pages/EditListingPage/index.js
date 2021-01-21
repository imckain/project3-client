// import { useRouteMatch } from 'react-router-dom';
// import { useHistory } from 'react-router-dom';
// import { updateListing } from '../../services/listingService';

// function EditListing(props) {
//     const match = useRouteMatch();
//     const history = useHistory()

//     const onSubmit = async (data) => {
//         await updateListing(data, match.params.id)
//         history.push('/dashboard')
//     }

//     return(
//         <div>
//             <h3>Edit Listing</h3>
//             <form onSubmit={onSubmit}>
//                 <input type='text' name='photo' id='text' />
//                 <input type='text' name='price' id='text' />
//                 <input type='text' name='sqft' id='text' />
//                 <input type='text' name='bed' id='text' />
//                 <input type='text' name='bath' id='text' />
//                 <button type='submit' value='Add Listing' />
//             </form>
//         </div>
//     );
// };

// export default EditListing;