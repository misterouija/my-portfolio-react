// Hooks
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Thanks } from '../modals/Thanks';
// Styles
import './ContactForm.css';

const ContactForm = () => {
    const [formStatus, setFormStatus] = useState('Send Message');
    const navigate = useNavigate();

    const onSubmit = (e) => {
        e.preventDefault();

        const myForm = e.target;
        const formData = new FormData(myForm);
        const formDataString = new URLSearchParams(formData).toString();

        fetch('127.0.0.1:8080/form', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: formDataString,
        })
            .then(() => {
                fetch('127.0.0.1:8080/form', { method: 'get' }).then((data) =>
                    console.log(data)
                );
                navigate('/thanks');
            })
            .catch((error) => alert(error));
    };
    // const { name, email, message } = e.target.elements;f
    // let formData = {
    //     name: name.value,
    //     email: email.value,
    //     message: message.value,
    // };

    // name.value = '';
    // email.value = '';
    // message.value = '';

    // navigate('/thanks');
    // return (
    //     <Thanks
    //         name={formData.name}
    //         email={formData.email}
    //         message={formData.message}
    //     />
    // );

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
                        name='name'
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
                        name='email'
                        required
                    />
                </div>
                <div className='mb-3'>
                    <label className='form-label' htmlFor='message'>
                        Message
                    </label>
                    <textarea
                        className='form-control'
                        id='message'
                        name='message'
                        required
                    />
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
