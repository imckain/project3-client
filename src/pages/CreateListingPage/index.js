import { useState } from 'react';
import styles from './CreateListing.module.css';

import { createListing } from '../../services/listingService';

function CreateListing(props) {
    const [formState, setFormState] = useState({
        photo: '',
        address: {
            street: '',
            city: '',
            state: '',
            zip: '',
        },
        price: '',
        sqft: '',
        bed: '',
        bath: '',
        additionalDetails: {
            ac: false,
            laundry: false,
            garage: false,
            offStreetParking: false,
            fireplace: false,
            pool: false,
            hardwoodFloors: false,
            sewer: false,
            schoolsNearby: false,
            parksNearby: false,
        }
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

            setFormState(event);
            await createListing(formState);
            props.history.push('/dashboard');
            props.refresh();
        } catch (error) {
            alert(error.message);
        };
    };

    return(
        <div>
            <div className={styles.CreateListingHeader} >
                <h1>C R E A T E &nbsp; A &nbsp; L I S T I N G</h1>
            </div>
            <div className={styles.CreateListingMain}>
                <div className={styles.CreateFormMain}>
                    <form className={styles.CreateListingForm} onSubmit={handleSubmit}>
                        <div className={styles.CreateFormItem}>
                            <input
                                className={styles.CreateFormInput}
                                value={formState.photo}
                                onChange={handleChange}
                                type='text' 
                                name='photo' 
                                placeholder=' P H O T O &nbsp; L I N K'
                            />
                        </div>
                        <div className={styles.CreateFormItem}>
                            <div className={styles.CreateFormAddressItem}>
                                <input 
                                    className={styles.CreateFormInput}
                                    value={formState.address.street}
                                    onChange={handleChange}
                                    type='text' 
                                    name='street' 
                                    placeholder=' S T R E E T'
                                />
                                <input
                                    className={styles.CreateFormInput}
                                    value={formState.address.city}
                                    onChange={handleChange}
                                    type='text' 
                                    name='city' 
                                    placeholder=' C I T Y'
                                />
                                <input
                                    className={styles.CreateFormInput}
                                    value={formState.address.state}
                                    onChange={handleChange}
                                    type='text' 
                                    name='state' 
                                    placeholder=' S T A T E'
                                />
                                <input
                                    className={styles.CreateFormInput}
                                    value={formState.address.zip}
                                    onChange={handleChange}
                                    type='text' 
                                    name='zip' 
                                    placeholder=' Z I P'
                                />
                            </div>
                        </div>
                        <div className={styles.CreateFormItem}>
                            <input 
                                className={styles.CreateFormInput}
                                value={formState.price}
                                onChange={handleChange}
                                type='text'     
                                name='price'    
                                placeholder=' P R I C E'
                            />
                        </div>
                        <div className={styles.CreateFormItem}>
                            <input 
                                className={styles.CreateFormInput}
                                value={formState.sqft}
                                onChange={handleChange}
                                type='text'     
                                name='sqft'     
                                placeholder=' S Q U A R E &nbsp;&nbsp; F O O T A G E'
                            />
                        </div>
                        <div className={styles.CreateFormItem}>
                            <input 
                                className={styles.CreateFormInput}
                                value={formState.bed}
                                onChange={handleChange}
                                type='text'     
                                name='bed'  
                                placeholder=' B E D R O O M S'
                            />
                        </div>
                        <div className={styles.CreateFormItem}>
                            <input 
                                className={styles.CreateFormInput}
                                value={formState.bath}
                                onChange={handleChange}
                                type='text'     
                                name='bath'     
                                placeholder=' B A T H R O O M S'
                            />
                        </div>
                        <div className={styles.CreateFormAdditionalItems}>
                            <label>Additional Details: </label>
                            <div className={styles.CreateFormCheckboxItem}>
                                <label>HVAC: </label>
                                <input 
                                    className={styles.CreateFormCheckbox}
                                    value={formState.additionalDetails.ac}
                                    onChange={handleChange}
                                    type='checkbox'     
                                    name='ac'     
                                />
                            </div>
                            <div className={styles.CreateFormCheckboxItem}>
                                <label>Laundry Hookup: </label>
                                <input 
                                    className={styles.CreateFormCheckbox}
                                    value={formState.additionalDetails.laundry}
                                    onChange={handleChange}
                                    type='checkbox'     
                                    name='laundry'     
                                />
                            </div>
                            <div className={styles.CreateFormCheckboxItem}>
                                <label>Garage: </label>
                                <input 
                                    className={styles.CreateFormCheckbox}
                                    value={formState.additionalDetails.garage}
                                    onChange={handleChange}
                                    type='checkbox'     
                                    name='garage'     
                                />
                            </div>
                            <div className={styles.CreateFormCheckboxItem}>
                                <label>Off-Street Parking: </label>
                                <input 
                                    className={styles.CreateFormCheckbox}
                                    value={formState.additionalDetails.offStreetParking}
                                    onChange={handleChange}
                                    type='checkbox'     
                                    name='offStreetParking'     
                                />
                            </div>
                            <div className={styles.CreateFormCheckboxItem}>
                                <label>Fireplace: </label>
                                <input 
                                    className={styles.CreateFormCheckbox}
                                    value={formState.additionalDetails.fireplace}
                                    onChange={handleChange}
                                    type='checkbox'     
                                    name='fireplace'     
                                />
                            </div>
                            <div className={styles.CreateFormCheckboxItem}>
                                <label>Pool: </label>
                                <input 
                                    className={styles.CreateFormCheckbox}
                                    value={formState.additionalDetails.pool}
                                    onChange={handleChange}
                                    type='checkbox'     
                                    name='pool'     
                                />
                            </div>
                            <div className={styles.CreateFormCheckboxItem}>
                                <label>Hardwood Floors: </label>
                                <input 
                                    className={styles.CreateFormCheckbox}
                                    value={formState.additionalDetails.hardwoodFloors}
                                    onChange={handleChange}
                                    type='checkbox'     
                                    name='hardwoodFloors'     
                                />
                            </div>
                            <div className={styles.CreateFormCheckboxItem}>
                                <label>Sewer: </label>
                                <input 
                                    className={styles.CreateFormCheckbox}
                                    value={formState.additionalDetails.sewer}
                                    onChange={handleChange}
                                    type='checkbox'     
                                    name='sewer'     
                                />
                            </div>
                            <div className={styles.CreateFormCheckboxItem}>
                                <label>Schools Nearby: </label>
                                <input 
                                    className={styles.CreateFormCheckbox}
                                    value={formState.additionalDetails.schoolsNearby}
                                    onChange={handleChange}
                                    type='checkbox' 
                                    name='schoolsNearby'     
                                />
                            </div>
                            <div className={styles.CreateFormCheckboxItem}>
                                <label>Parks/Trails Nearby: </label>
                                <input 
                                    className={styles.CreateFormCheckbox}
                                    value={formState.additionalDetails.parksNearby}
                                    onChange={handleChange}
                                    type='checkbox'     
                                    name='parksNearby'     
                                />
                            </div>
                        </div>
                        <button className={styles.CreateFormButton} type='submit' value='Create Listing'>C R E A T E &nbsp;&nbsp; L I S T I N G</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CreateListing;