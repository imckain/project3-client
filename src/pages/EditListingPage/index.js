/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { getListings, updateListing } from '../../services/listingService';

function EditListing(props) {
    const [formState, setFormState] = useState({
        photo: '',
        price: '',
        sqft: '',
        bed: '',
        bath: '',
    });

    function handleChange(event) {
        setFormState(prevState => ({
            ...prevState,
            [event.target.name]: event.target.value
        }));
    };

    async function handleSubmit(event) {
        try {
            event.preventDefault();

            setFormState(event)
            await updateListing(formState, props.location.listingProps.id)
            props.history.push('/dashboard')
            props.refresh();
        } catch (error) {
            alert(error.message)
        }
    };

    return(
        <div>
            <h3>Edit Listing</h3>
            <form onSubmit={handleSubmit}>
                <input 
                    value={formState.photo}
                    onChange={handleChange}
                    type='text' 
                    name='photo' 
                />
                <input 
                    value={formState.price}
                    onChange={handleChange}
                    type='text'     
                    name='price'    
                />
                <input 
                    value={formState.sqft}
                    onChange={handleChange}
                    type='text'     
                    name='sqft'     
                />
                <input 
                    value={formState.bed}
                    onChange={handleChange}
                    type='text'     
                    name='bed'  
                />
                <input 
                    value={formState.bath}
                    onChange={handleChange}
                    type='text'     
                    name='bath'     
                />
                <button type='submit' value='Save Listing' />
            </form>
        </div>
    );
};

export default EditListing;