// Hooks
import { useState } from 'react';

// Styles
import './ContactForm.css';

const ContactForm = () => {
    const [formStatus, setFormStatus] = useState('Send Message');

    const onSubmit = (e) => {
        e.preventDefault();
        const { name, email, message } = e.target.elements;
        let formData = {
            name: name.value,
            email: email.value,
            message: message.value,
        };

        alert(
            'Thanks for you message ' +
                formData.name +
                ". I'll get back to you as soon as possible"
        );

        name.value = '';
        email.value = '';
        message.value = '';

        setFormStatus('Message sent');
        setTimeout(() => {
            setFormStatus('Send Message');
        }, 1000);
    };

    return (
        <div className='container my-5 border p-5 rounded contact-form shadow gradient transparent'>
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
                    // data-bs-toggle='modal'
                    // data-bs-target='#thanksModal'
                >
                    {formStatus}
                </button>
            </form>
        </div>
    );
};
export default ContactForm;
