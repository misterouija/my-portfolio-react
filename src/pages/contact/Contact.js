import './Contact.css';
import {
    BsEnvelopeFill,
    BsPhoneFill,
    BsFilePdfFill,
    BsDownload,
} from 'react-icons/bs';
import AOS from 'aos';
import { useEffect } from 'react';
import 'aos/dist/aos.css';
import ContactForm from '../../components/contactform/ContactForm';
import { GitHub, LinkedIn } from '../../components/social/Social';
import Cv from '../../assets/leighton-cv.pdf';

const Contact = () => {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <section
            className='contact-page py-5'
            data-aos='fade-up'
            data-aos-delay='300'
        >
            <div className='container my-5'>
                <div className='row'>
                    <div className='col'>
                        <h2 className='title contact-title text-center my-5'>
                            Contact Me
                        </h2>
                        <p className='intro contacts-intro text-center fs-5'>
                            If you are interested in working with me or have any
                            questions, please feel free to contact me using the
                            form or any of the other options below. I look
                            forward to hearing from you soon!
                        </p>
                    </div>
                </div>

                <div className='container my-5'>
                    <div className='row row-cols-1'>
                        <div className='col'>
                            <ContactForm />
                        </div>
                    </div>
                </div>

                <div className='container my-5 contact-info'>
                    <div className='row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3  d-flex justify-content-between'>
                        <div className='col'>
                            <div className='card py-3 '>
                                <div className='card-body d-flex justify-content-center flex-column align-items-center gap-4'>
                                    <span className='fs-4'>
                                        <BsEnvelopeFill />
                                    </span>
                                    <h6 className='card-title'>EMAIL</h6>
                                    <div className='border border-top-3 border-secondary w-50'></div>
                                    <p className='card-text'>
                                        <a
                                            href='mailto:oneal.grant@outlook.com'
                                            style={{ textDecoration: 'none' }}
                                        >
                                            oneal.grant@outlook.com
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='col'>
                            <div className='card py-3 '>
                                <div className='card-body d-flex justify-content-center flex-column align-items-center gap-4'>
                                    <span className='fs-4'>
                                        <BsPhoneFill />
                                    </span>
                                    <h6 className='card-title'>PHONE</h6>
                                    <div className='border border-top-3 border-secondary w-50'></div>
                                    <p className='card-text'>
                                        <a
                                            href='tel:07886028826'
                                            style={{ textDecoration: 'none' }}
                                        >
                                            +447886028826
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='col'>
                            <div className='card py-3 '>
                                <div className='card-body d-flex justify-content-center flex-column align-items-center gap-4'>
                                    <span className='fs-4'>
                                        <BsFilePdfFill />
                                    </span>
                                    <h6 className='card-title'>MY CV</h6>
                                    <div className='border border-top-3 border-secondary w-50'></div>
                                    <p className='card-text'>
                                        <a
                                            href={Cv}
                                            download
                                            style={{ textDecoration: 'none' }}
                                        >
                                            Leighton's CV <BsDownload />
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='container my-5'>
                    <div className='row'>
                        <div className='col d-flex justify-content-center gap-3'>
                            <span className='social-buttons'>
                                <LinkedIn />
                            </span>
                            <span className='social-buttons'>
                                <GitHub />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
