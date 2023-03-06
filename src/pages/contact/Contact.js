import './Contact.css';
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
                    <div className='row row-cols-1 row-cols-md-4 row-cols-lg-4 g-3 d-flex justify-content-between'>
                        <div className='col d-flex justify-content-center align-items-center flex-column'>
                            <p className=''>Lorem ipsum</p>
                        </div>
                        <div className='col d-flex justify-content-center align-items-center flex-column'>
                            <p className=''>Lorem ipsum</p>
                        </div>
                        <div className='col d-flex justify-content-center align-items-center flex-column'>
                            <p className=''>Lorem ipsum</p>
                        </div>
                        <div className='col d-flex justify-content-center align-items-center flex-column'>
                            <p className=''>Lorem ipsum</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
