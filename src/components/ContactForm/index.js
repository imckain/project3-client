function ContactForm(props) {

    return(
        <div>
            <form>
                <label>First Name</label>
                <input 
                    value='firstName'
                    name='firstName'
                    type='text'
                    placeholder='First Name'
                />
                <label>Last Name</label>
                <input 
                    value='lastName'
                    name='lastName'
                    type='text'
                    placeholder='Last Name'
                />
                <label>Phone Number</label>
                <input 
                    value='phoneNumber'
                    name='phoneNumber'
                    type='text'
                    placeholder='Phone Number'
                />
                <label>Email</label>
                <input 
                    value='email'
                    name='email'
                    type='email'
                    placeholder='Email'
                />
                <label>Message</label>
                <input 
                    value='message'
                    name='message'
                    type='text'
                />
                <button>Send</button>
            </form>
        </div>
    );
};

export default ContactForm;