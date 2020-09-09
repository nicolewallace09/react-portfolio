import React, { useState } from 'react';
import { validateEmail } from '../../utils/helper';

function ContactForm() {
    // // manage form data, empty out the initialize values
    // const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    // // deconstructing the formState object into it's named properties
    // const { name, email, message } = formState;
    // // error message
    // const [errorMessage, setErrorMessage] = useState('');

    // function handleChange(e) {
    //     if (e.target.name === 'email') {
    //         const isValid = validateEmail(e.target.value);
    
    //             if(!isValid) {
    //                 setErrorMessage('Your email is invalid');
    //             } else {
    //                 setErrorMessage('');
    //             }
    //         // checking if name and message has input 
    //         } else {
    //             if (!e.target.value.length) {
    //               setErrorMessage(`${e.target.name} is required.`);
    //             } else {
    //               setErrorMessage('');
    //             } 
    //     }
    //     // setFormState is updating formState for the property
    //     if (!errorMessage) {
    //     setFormState({...formState, [e.target.name]: e.target.value })
    //     }
    // }

    // // form submit 
    // function handleSubmit(e) {
    //     e.preventDefault();
  
    // }

return (
    <section>
        <h1 data-testid='h1tag' className="contact">CONTACT ME</h1>
        <div className="contact-container row">
        <div className="col-2">
        <a href="https://github.com/nicolewallace09"><img src="https://img.icons8.com/doodle/100/000000/github--v1.png" alt="github-logo" class="icon"/></a><p>FIND ME ON GITHUB</p>
        </div>

        <div className="col-2">
        <a href="https://www.linkedin.com/in/nicole-wallace09/"><img src="https://img.icons8.com/doodle/100/000000/linkedin--v2.png" alt="linkedin-logo" class="icon"/></a><p>FIND ME ON LINKEDIN</p>
        </div>

        <div className="col-2">
        <a href="mailto:nicole.elisaw@gmail.com"><img src="https://img.icons8.com/doodle/120/000000/new-post.png"/><p>SEND ME AN EMAIL</p></a>
        </div>

        </div>
    </section>
    );
}
    
export default ContactForm;

    // <section>
    //     <h1 data-testid='h1tag' className="contact">CONTACT ME (UNDER CONSTRUCTION)</h1>
    //     <form id="contact-form">
    //         <div class="col-12">
    //             <label htmlFor="name">Name:</label>
    //             <input type="text" class="form-control" width="100px" defaultValue={name} onBlur={handleChange} name="name" />
    //         </div>
    //         <div class="col-12">
    //             <label htmlFor="email">Email address:</label>
    //             <input type="email" class="form-control" defaultValue={email} onBlur={handleChange} name="email" />
    //         </div>
            {/* <div class="col-12">
                <label htmlFor="message">Message:</label>
                <textarea name="message" class="form-control" defaultValue={message} onBlur={handleChange} rows="7" />
            </div> 
            {errorMessage && (
            <div>
                <p className="error-text">{errorMessage}</p>
            </div>
            )}
            <br></br>
            <div class="col-12">
            <button data-testid='button' class="btn btn-outline-dark" type="submit" onSubmit={handleSubmit}>Submit</button>
            </div>
        </form>
    </section> */}