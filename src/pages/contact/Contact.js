import './Contact.css';
import { MdEmail, MdPhoneIphone } from 'react-icons/md';
const Contact = () => {
    return (
        <section className='contact-page min-vh-100'>
            <div className='container'>
                <div className='row'>
                    <div className='col'>
                        <h2 className='title contact-title text-center'>
                            Contact Me
                        </h2>
                        <p className='intro contacts-intro text-center'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat.
                        </p>
                    </div>
                </div>

                <div className='container'>
                    <div className='row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3  d-flex justify-content-between'>
                        <div className='col'>
                            <div className='card py-3 '>
                                <div className='card-body d-flex justify-content-center flex-column align-items-center gap-4'>
                                    <span className='fs-4'>
                                        <MdEmail />
                                    </span>
                                    <h6 className='card-title'>EMAIL</h6>
                                    <div className='border border-top-3 border-secondary w-50'></div>
                                    <p className='card-text'>
                                        oneal.grant@outlook.com
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='col'>
                            <div className='card py-3 '>
                                <div className='card-body d-flex justify-content-center flex-column align-items-center gap-4'>
                                    <span className='fs-4'>
                                        <MdPhoneIphone />
                                    </span>
                                    <h6 className='card-title'>PHONE</h6>
                                    <div className='border border-top-3 border-secondary w-50'></div>
                                    <p className='card-text'>
                                        oneal.grant@outlook.com
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='col'>
                            <div className='card py-3 '>
                                <div className='card-body d-flex justify-content-center flex-column align-items-center gap-4'>
                                    <span className='fs-4'>
                                        <MdEmail />
                                    </span>
                                    <h6 className='card-title'>EMAIL</h6>
                                    <div className='border border-top-3 border-secondary w-50'></div>
                                    <p className='card-text'>
                                        oneal.grant@outlook.com
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
