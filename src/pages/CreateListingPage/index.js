import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { createListing } from '../../services/listingService';

function CreateListing(props) {
    const {register, handleSubmit} = useForm();
    const history = useHistory()

    const submitHandler = handleSubmit((data) => {
        onSubmit(data)
    })

    const onSubmit = async (data) => {
        await createListing(data)
        history.push('/dashboard')
    };

    return(
        <div>
            <h3>Create a Listing</h3>
            <form onSubmit={submitHandler}>
                <input ref={register} type='text' name='photo' id='text' />
                <input ref={register} type='text' name='price' id='text' />
                <input ref={register} type='text' name='sqft' id='text' />
                <input ref={register} type='text' name='bed' id='text' />
                <input ref={register} type='text' name='bath' id='text' />
                <button type='submit' value='Add Listing' />
            </form>
        </div>
    );
};

export default CreateListing;