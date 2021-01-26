/* eslint-disable no-unused-vars */
import styles from './EditListingPage.module.css';
import { useState } from 'react';
import { updateListing } from '../../services/listingService';

function EditListing(props) {
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
            ac: '',
            laundry: '',
            garage: '',
            offStreetParking: '',
            fireplace: '',
            pool: '',
            hardwoodFloors: '',
            sewer: '',
            schoolsNearby: '',
            parksNearby: '',
        }
    });

    function handleChange(event) {
        setFormState({
            ...formState,
            [event.target.name]: event.target.value
        });
    };

    // function handleChange(event) {
    //     setFormState(prevState => ({
    //         ...prevState,
    //         [event.target.name]: event.target.value
    //     }));
    // };

    async function handleSubmit(event) {
        try {
            event.preventDefault();

            setFormState(event);
            await updateListing(formState, props.location.listingProps.id);
            props.history.push('/dashboard');
            props.refresh();
        } catch (error) {
            alert(error.message);
        };
    };

    return(
        <div>
            <div className={styles.EditListingHeader} >
                <h1>E D I T &nbsp;&nbsp; L I S T I N G</h1>
            </div>
            <div className={styles.EditListingMain}>
                <div className={styles.EditFormMain}>
                    <form className={styles.EditListingForm} onSubmit={handleSubmit}>
                        <div className={styles.EditFormItem}>
                            <input
                                className={styles.EditFormInput}
                                value={formState.photo}
                                onChange={handleChange}
                                type='text' 
                                name='photo' 
                                placeholder=' P H O T O &nbsp; L I N K'
                            />
                        </div>
                        <div className={styles.EditFormItem}>
                            <div className={styles.EditFormAddressItem}>
                                <input 
                                    className={styles.EditFormInput}
                                    value={formState.street}
                                    onChange={handleChange}
                                    type='text' 
                                    name='street' 
                                    placeholder=' S T R E E T'
                                />
                                <input
                                    className={styles.EditFormInput}
                                    value={formState.city}
                                    onChange={handleChange}
                                    type='text' 
                                    name='city' 
                                    placeholder=' C I T Y'
                                />
                                <input
                                    className={styles.EditFormInput}
                                    value={formState.state}
                                    onChange={handleChange}
                                    type='text' 
                                    name='city' 
                                    placeholder=' S T A T E'
                                />
                                <input
                                    className={styles.EditFormInput}
                                    value={formState.zip}
                                    onChange={handleChange}
                                    type='text' 
                                    name='zip' 
                                    placeholder=' Z I P'
                                />
                            </div>
                        </div>
                        <div className={styles.EditFormItem}>
                            <input 
                                className={styles.EditFormInput}
                                value={formState.price}
                                onChange={handleChange}
                                type='text'     
                                name='price'    
                                placeholder=' P R I C E'
                            />
                        </div>
                        <div className={styles.EditFormItem}>
                            <input 
                                className={styles.EditFormInput}
                                value={formState.sqft}
                                onChange={handleChange}
                                type='text'     
                                name='sqft'     
                                placeholder=' S Q U A R E &nbsp;&nbsp; F O O T A G E'
                            />
                        </div>
                        <div className={styles.EditFormItem}>
                            <input 
                                className={styles.EditFormInput}
                                value={formState.bed}
                                onChange={handleChange}
                                type='text'     
                                name='bed'  
                                placeholder=' B E D R O O M S'
                            />
                        </div>
                        <div className={styles.EditFormItem}>
                            <input 
                                className={styles.EditFormInput}
                                value={formState.bath}
                                onChange={handleChange}
                                type='text'     
                                name='bath'     
                                placeholder=' B A T H R O O M S'
                            />
                        </div>
                        <div className={styles.EditFormAdditionalItems}>
                            <label>Additional Details: </label>
                            <div className={styles.EditFormCheckboxItem}>
                                <label>HVAC: </label>
                                <input 
                                    className={styles.EditFormCheckbox}
                                    value={formState.ac}
                                    onChange={handleChange}
                                    type='checkbox'     
                                    name='ac'     
                                />
                            </div>
                            <div className={styles.EditFormCheckboxItem}>
                                <label>Laundry Hookup: </label>
                                <input 
                                    className={styles.EditFormCheckbox}
                                    value={formState.laundry}
                                    onChange={handleChange}
                                    type='checkbox'     
                                    name='laundry'     
                                />
                            </div>
                            <div className={styles.EditFormCheckboxItem}>
                                <label>Garage: </label>
                                <input 
                                    className={styles.EditFormCheckbox}
                                    value={formState.garage}
                                    onChange={handleChange}
                                    type='checkbox'     
                                    name='garage'     
                                />
                            </div>
                            <div className={styles.EditFormCheckboxItem}>
                                <label>Off-Street Parking: </label>
                                <input 
                                    className={styles.EditFormCheckbox}
                                    value={formState.offStreetParking}
                                    onChange={handleChange}
                                    type='checkbox'     
                                    name='offStreetParking'     
                                />
                            </div>
                            <div className={styles.EditFormCheckboxItem}>
                                <label>Fireplace: </label>
                                <input 
                                    className={styles.EditFormCheckbox}
                                    value={formState.fireplace}
                                    onChange={handleChange}
                                    type='checkbox'     
                                    name='fireplace'     
                                />
                            </div>
                            <div className={styles.EditFormCheckboxItem}>
                                <label>Pool: </label>
                                <input 
                                    className={styles.EditFormCheckbox}
                                    value={formState.fireplace}
                                    onChange={handleChange}
                                    type='checkbox'     
                                    name='fireplace'     
                                />
                            </div>
                            <div className={styles.EditFormCheckboxItem}>
                                <label>Hardwood Floors: </label>
                                <input 
                                    className={styles.EditFormCheckbox}
                                    value={formState.hardwoodFloors}
                                    onChange={handleChange}
                                    type='checkbox'     
                                    name='hardwoodFloors'     
                                />
                            </div>
                            <div className={styles.EditFormCheckboxItem}>
                                <label>Sewer: </label>
                                <input 
                                    className={styles.EditFormCheckbox}
                                    value={formState.sewer}
                                    onChange={handleChange}
                                    type='checkbox'     
                                    name='sewer'     
                                />
                            </div>
                            <div className={styles.EditFormCheckboxItem}>
                                <label>Schools Nearby: </label>
                                <input 
                                    className={styles.EditFormCheckbox}
                                    value={formState.schoolsNearby}
                                    onChange={handleChange}
                                    type='checkbox' 
                                    name='schoolsNearby'     
                                />
                            </div>
                            <div className={styles.EditFormCheckboxItem}>
                                <label>Parks/Trails Nearby: </label>
                                <input 
                                    className={styles.EditFormCheckbox}
                                    value={formState.parksNearby}
                                    onChange={handleChange}
                                    type='checkbox'     
                                    name='parksNearby'     
                                />
                            </div>
                        </div>
                        <button className={styles.EditFormButton} type='submit' value='Edit Listing'>E D I T &nbsp;&nbsp; L I S T I N G</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EditListing;