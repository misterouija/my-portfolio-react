// Hooks
import { useNavigate } from 'react-router-dom';

// Styles
import './ContactForm.css';

// Icons
import { IoSend } from 'react-icons/io5';

const ContactForm = () => {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const myForm = e.target;
        const formData = new FormData(myForm);
        const formDataString = new URLSearchParams(formData).toString();

        fetch('https://www.formbackend.com/f/75e66f7945b56004', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: formDataString,
        })
            .then(() => {
                navigate('/thanks');
            })
            .catch((error) => alert(error));
    };

    return (
        <div className='container my-5 border p-5 rounded contact-form shadow gradient transparent'>
            <h5 className='mb-3'>Contact Form</h5>
            <form onSubmit={handleSubmit}>
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
                >
                    Send Message <IoSend />
                </button>
            </form>
        </div>
    );
};
export default ContactForm;
