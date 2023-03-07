import React from 'react';
import './ContactForm.css';
const ContactForm = () => {
    const [formStatus, setFormStatus] = React.useState('Send');
    const onSubmit = (e) => {
        e.preventDefault();
        setFormStatus('Submitting...');
        const { name, email, message } = e.target.elements;
        let conFom = {
            name: name.value,
            email: email.value,
            message: message.value,
        };
        console.log(conFom);
    };
    return (
        <div className='container my-5 border p-5 rounded'>
            <h5 className='mb-3'>Contact Form</h5>
            <form onSubmit={onSubmit}>
                <div className='mb-3'>
                    <label className='form-label' htmlFor='name'>
                        Name
                    </label>
                    <input
                        className='form-control'
                        type='text'
                        id='name'
                        required
                    />
                </div>
                <div className='mb-3'>
                    <label className='form-label' htmlFor='email'>
                        Email
                    </label>
                    <input
                        className='form-control'
                        type='email'
                        id='email'
                        required
                    />
                </div>
                <div className='mb-3'>
                    <label className='form-label' htmlFor='message'>
                        Message
                    </label>
                    <textarea className='form-control' id='message' required />
                </div>
                <button
                    className='btn form-btn rounded-pill px-4 my-4'
                    type='submit'
                >
                    {formStatus + ' Message'}
                </button>
            </form>
        </div>
    );
};
export default ContactForm;
