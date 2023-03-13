// Styles
import './ContactForm.css';

// Icons
import { MdSend } from 'react-icons/md';

// Hooks
import { useNavigate } from 'react-router-dom';

const ContactForm = () => {
    const navigate = useNavigate();

    function handleSubmit() {
        navigate('/thanks');
    }

    return (
        <div className='container my-5 border p-5 rounded contact-form shadow gradient transparent'>
            <h5 className='mb-3'>Contact Form</h5>
            <form name='contact' method='POST' onSubmit={handleSubmit}>
                <input type='hidden' name='form-name' value='contact' />
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
                    Send Message <MdSend />
                </button>
            </form>
        </div>
    );
};
export default ContactForm;
