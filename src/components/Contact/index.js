import React, { useState } from 'react';
import { validateEmail } from '../../utils/helper';

function ContactForm() {
    // manage form data, empty out the initialize values
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    // deconstructing the formState object into it's named properties
    const { name, email, message } = formState;
    // error message
    const [errorMessage, setErrorMessage] = useState('');

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
                if(!isValid) {
                    setErrorMessage('Your email is invalid');
                } else {
                    setErrorMessage('');
                }
            // checking if name and message has input 
            } else {
                if (!e.target.value.length) {
                  setErrorMessage(`${e.target.name} is required.`);
                } else {
                  setErrorMessage('');
                } 
        }
        // setFormState is updating formState for the property
        if (!errorMessage) {
        setFormState({...formState, [e.target.name]: e.target.value })
        }
    }
    // console.log(formState);
    // console.log('errorMessage', errorMessage)

    // form submit 
    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }

return (
    <section>
        <h1 data-testid='h1tag'>CONTACT ME</h1>
        <form id="contact-form">
            <div>
                <label htmlFor="name">Name:</label>
                <input type="text" defaultValue={name} onBlur={handleChange} name="name" />
            </div>
            <div>
                <label htmlFor="email">Email address:</label>
                <input type="email" defaultValue={email} onBlur={handleChange} name="email" />
            </div>
            <div>
                <label htmlFor="message">Message:</label>
                <textarea name="message" defaultValue={message} onBlur={handleChange} rows="5" />
            </div> 
            {errorMessage && (
            <div>
                <p className="error-text">{errorMessage}</p>
            </div>
            )}
            <button data-testid='button' type="submit" onSubmit={handleSubmit}>Submit</button>
        </form>
    </section>
    );
}
    
export default ContactForm;